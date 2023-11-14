import type { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken'
import type { Role, AccessTokenPayload } from "../types/index.js"


function parseAccessToken(token: string): AccessTokenPayload | undefined {
  try {
    console.log(token)
    return jwt.verify(token, 'SECRET') as AccessTokenPayload
  } catch(e) {
    console.log(e)
    return undefined
  }
}

function getRoles(data: unknown): Role[] | undefined{
  if (
    typeof data === 'object' &&
    data != null &&
    'roles' in data && 
    Array.isArray(data.roles) 
  ) {
    return data.roles
  } else {
    return undefined
  }
}
function hasRole(userRoles: Role[], allowedRoles: Role[]) {
  for (const userRole of userRoles) {
    if (allowedRoles.includes(userRole) ) {
      return true
    }
  }
  return false
}


const userData = Symbol()
function setUserData(req: Request, data: AccessTokenPayload) {
  //@ts-ignore
  req[userData] = data
}
export function getUserData(req: Request): AccessTokenPayload {
  //@ts-ignore
  return req[userData]
}

export default function(allowedRoles: Role[]) {
  return function(req: Request, resp: Response, next: NextFunction) {
    const accessToken = req.headers.authorization?.split(' ')[1]
    if (!accessToken) {
      return resp.status(401).send(JSON.stringify("Unauthorized user"))
    }
    const payload = parseAccessToken(accessToken)
    if (!payload) {
      return resp.status(401).send(JSON.stringify("Unauthorized user"))
    }
    
    const userRoles = getRoles(payload)
    if (!userRoles || !hasRole(userRoles, allowedRoles) ) {
      return resp.status(401).send(JSON.stringify("The user has no access"))
    }

    setUserData(req as Request & {[userData]: AccessTokenPayload}, payload)
    next()
  }

 
}