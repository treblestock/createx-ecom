import type { Request, Response } from "express"
import { validationResult } from "express-validator"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import db from '../../db/index.js'


import type { Role, UserData } from "../../types/index.js" 
import { getUserData } from "../../middleware/auth.js"



function generateAccessToken(email: string, pass: string, roles: Role[]): string {
  const payload = {
    email,
    pass,
    roles,
  }
  return jwt.sign(payload, 'SECRET')
}


class AuthController {
  async signup(req: Request, resp: Response) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return resp.status(400).send(JSON.stringify(errors))
    }

    const {email, pass, fullname} = req.body as {
      email: string,
      pass: string,
      fullname: string,
    }
    console.log(req.body)

    const existingUser = await db.findUser(email)
    if (existingUser) {
      return resp.status(400).send(JSON.stringify("Email is already used"))
    }

    const passHashed = bcrypt.hashSync(pass, 7)
    const newUserData: UserData = {
      email,
      fullname,
      passHashed,
      roles: ['user']
    }
    if (email === 'admin') {
      newUserData.roles.push('admin')
    }


    const savedUser = await db.saveUser(newUserData)
    if (!savedUser) {
      return resp.status(500).send(JSON.stringify("Cannot save new User"))
    }
    const accessToken = generateAccessToken(email, passHashed, savedUser.roles)
    return resp.status(200).send(JSON.stringify(accessToken))
  }
  async signin(req: Request, resp: Response) {
    const {email, pass } = req.body as {
      email: string,
      pass: string,
    }

    const foundUser = await db.findUser(email)
    if (!foundUser) {
      return resp.status(400).send(JSON.stringify("There is no such user"))
    }

    const isCorrectPassword = bcrypt.compareSync(pass, foundUser.passHashed)
    console.log(isCorrectPassword)
    if (!isCorrectPassword) {
      return resp.status(400).send(JSON.stringify("Incorrect password"))
    }

    const accessToken = generateAccessToken(email, foundUser.passHashed, foundUser.roles)
    return resp.status(200).send(JSON.stringify(accessToken))
  }
  async deleteAccount(req: Request, resp: Response) {
    const userData = getUserData(req)
    const email = userData.email

    const isDeleted = await db.deleteUser(email)
    if (!isDeleted) {
      return resp.status(500).send(JSON.stringify(`Failed to delete user`))
    }

    return resp.status(200).send(JSON.stringify(true))
  }
  async profile(req: Request, resp: Response) {
    const userData = getUserData(req)
    
    const foundUser = await db.findUser(userData.email)
    if (!foundUser) {
      return resp.status(400).send(JSON.stringify("User not found"))
    }

    return resp.status(200).send(JSON.stringify({
      email: foundUser.email,
      fullname: foundUser.fullname,
    }))
  }
  // async refresh() {},


  // 
  async users(req: Request, resp: Response) {
    return resp.status(200).send(JSON.stringify(await db.getUsers()))
  }
}

export default new AuthController()