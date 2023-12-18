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
function handler<T>(arg: T): T {
  return arg
}


export default handler