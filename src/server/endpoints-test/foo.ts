// import type { EndpointsConfig } from "./index.js"
// declare module "./index.js" {
//   export interface EndpointsConfig {
//     foo: {
//       method: 'GET'
//       payload: Parameters<typeof handler>
//       return: ReturnType<typeof handler>
//     }
//   }
// }
function handler<A>(str: string): string {
  return 'foo'
}


export default handler