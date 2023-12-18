// import type { EndpointsConfig } from "./index.js"
// declare module "./index.js" {
//   export interface EndpointsConfig {
//     bar: {
//       method: 'GET'
//       payload: Parameters<typeof handler>
//       return: ReturnType<typeof handler>
//     }
//   }
// }
function handler<A>(str: number): number {
  return 42
}


export default handler