// import type { EndpointsConfig } from "./index.js"
// declare module "./index.js" {
//   export interface EndpointsConfig {
//     echo: {
//       method: 'GET'
//       payload: Parameters<typeof handler>
//       return: ReturnType<typeof handler>
//     }
//   }
// }


// function handler(arg: string): number
// function handler(arg: number): string
type Toggle<T> = T extends string ? number 
  : T extends number ? string 
  : never

type s = Toggle<12>
type s1 = Toggle<'foo'> extends number ? true : false

function handler<T = string | number>(arg: T): Toggle<T> {
  if (typeof arg === 'string') {
    return Number(arg)
  }
  if (typeof arg === 'string') {
    return arg.toString()
  }
  return {}
}


export default handler