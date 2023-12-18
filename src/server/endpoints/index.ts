export { default as echo } from './echo.js'
export { default as foo } from './foo.js'
export { default as bar } from './bar.js'
export { default as toggle } from './toggle.js'



type f = ReturnType<typeof import('./foo.js')['default']>


// export type ResolveReturn<A extends keyof EndpointsConfig, P extends EndpointsConfig[A]['payload']> =
//   A extends 'echo' ? ReturnType<typeof echoHandler<P>>
//   : never

// const end = {
//   echo: () => 12,
//   bar: <T>(a: T) => a,
// }





// type GetPayload<Action extends keyof typeof end, Payload extends any> =
//   typeof end[Action]<Payload>


    
// export interface EndpointsConfig {
//   echo: {
//     method: 'GET'
//     handler: typeof import('./echo.js').default
//     payload: Parameters<typeof import('./echo.js')['default']>['0']
//   }
// }