import * as endpoints from '../endpoints/index.js'
import { EndpointsConfig } from '../endpoints/index.js'
import type { Request, Response } from "express"


export default function(req: Request, resp: Response) {
  const actionName: keyof EndpointsConfig | undefined = req.query.action as keyof EndpointsConfig | undefined
  if (!actionName) return resp.send('error')

  // @ts-ignore
  const action: undefined | ((...args: any) => any) = endpoints[actionName]

  if (!action) return resp.send('error')
  const payload: EndpointsConfig[keyof EndpointsConfig]['payload'] | undefined = req.query.payload

  const res = action(payload)
  resp.send(JSON.stringify(res))  
}
