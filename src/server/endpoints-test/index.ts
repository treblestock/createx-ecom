export { default as foo } from './foo.js'
import fooHandler from './foo.js'
export { default as bar } from './bar.js'
import barHandler from './bar.js'
export { default as echo } from './echo.js'
import echoHandler from './echo.js'
export { default as toggle } from './toggle.js'
import toggleHandler from './toggle.js'


export type ResolveReturn<A extends keyof EndpointsConfig, P extends EndpointsConfig[A]['payload']> =
  A extends 'echo' ? ReturnType<typeof echoHandler<P>>
  :A extends 'foo' ? ReturnType<typeof fooHandler<P>>
  :A extends 'bar' ? ReturnType<typeof barHandler<P>>
  :A extends 'toggle' ? ReturnType<typeof toggleHandler<P>>
  : never
  
  
// type ret = ResolveReturn<'foo', 'foo'>
// type ret2 = ResolveReturn<'echo', 'foo'>

// export type EchoReturn<P> = ReturnType<typeof import('./echo.js').default<P>>

// type s = EchoReturn<12>

// class Wrapper<A> {
  //   fn(e: A) {
    //     return echo<A>(e)
    //   }
    // }

// type GenricRetrurnType<A> = ReturnType<Wrapper<A>['fn']>




// class Wrapper<F extends <A>(...args: any) => any, A> {
//   res(fn: F, e: A) {
//     return echo<A>(e)
//   }
// }
// type GenricRetrurnType<F extends (...args: any) => any, A> = ReturnType<Wrapper<F, A>['res']>

type Handler<A extends keyof EndpointsConfig> = EndpointsConfig[A]['handler']

function helper<F extends (...args: any) => any, A extends Parameters<F>['0'] >(f: F, a: A) {
  return f(a)
}
namespace name {
  export type echo<E> = ReturnType<typeof echoHandler<E>>
}
type s = name.echo<12>


export namespace p {
  type echo<P> = ReturnType<typeof echoHandler<P>>
}

    
export interface EndpointsConfig {
  foo: {
    method: 'GET'
    handler: typeof import('./foo.js').default
    payload: Parameters<typeof import('./foo.js')['default']>['0']
  }
  bar: {
    method: 'GET'
    handler: typeof import('./bar.js').default
    payload: Parameters<typeof import('./bar.js')['default']>['0']
  }
  echo: {
    method: 'GET'
    handler: typeof import('./echo.js').default
    payload: Parameters<EndpointsConfig['echo']['handler']>['0']
  }
  toggle: {
    method: 'GET'
    handler: typeof import('./toggle.js').default
    payload: Parameters<EndpointsConfig['toggle']['handler']>['0']
  }
}

