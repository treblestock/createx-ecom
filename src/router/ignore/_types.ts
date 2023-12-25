import { AllowedComponentProps, VNodeProps } from 'vue'
import type { RouterLinkProps } from 'vue-router'
import type { RoutesOptions } from '.'


// type redirection (Make valid route without component and map this route to its redirection's route component)

// export type TypedTo<R extends AppRouteName> = string | Omit<RouterLinkProps['to'], 'params'> | OptionalParamsIfRouteHasntProps<{
//   name: R
//   params: RouteHasProps<R> extends true ? AppRoutes[R]['props'] : never
// }>

// export interface WithParamsAny<R extends AppRouteName> extends Omit<RouterLinkProps, 'to'> {
//   to?: TypedTo<R>
// }


// declare module 'vue-router' {
//   interface RouteMeta {
//     isAuthOnly?: boolean
//   }
// }



//?
// export interface VueRouterTypes {
//   RowRoutes: readonly (ValidRoute & HasValidChildren & RouteWithLazyComp)[]
// }
//?

// type FlatRoutes<Routes extends HasValidChildren> = Routes | Routes['children'][number]
type FlatRoutes<Routes extends HasValidChildren> = Routes | Routes['children'][number]

type HasValidChildren = {children: ValidRoute[] | readonly ValidRoute[]}
type ValidRoute = {name: string}
type RouteWithLazyComp = { component: () => Promise<{default: Component}>} 

export type AppRoute = FlatRoutes<RoutesOptions[number]>
export type AppRouteName = AppRoute['name']


type getComponent<R extends ValidRoute & RouteWithLazyComp> = Awaited<ReturnType<R['component']>>['default']

type _ComponentProps<C extends Component> = C extends new (...args: any) => any
  ? Omit<InstanceType<C>['$props'], keyof VNodeProps | keyof AllowedComponentProps>
  : never;
  type removeReadonly<T> = {
    -readonly[key in keyof T]: T[key]
  }
type ComponentProps<C extends Component> = removeReadonly<_ComponentProps<C>>


// 
type GetComponentPropsFromRoute<R extends ValidRoute & RouteWithLazyComp> = ComponentProps<getComponent<R>>
type RouteWithProps<R extends ValidRoute & RouteWithLazyComp> = Omit<R, 'props'> & {props: GetComponentPropsFromRoute<R>}
// 


type MainRoute = RoutesOptions['0']['children']['0']
type _MainRoute = AppRoutes & {name: 'Main'}
type _isSameRoute = MainRoute extends _MainRoute ? true : false

type SecondaryRoute = RoutesOptions['0']['children']['1']



// type props = GetComponentPropsFromRoute<MainRoute>

// case 1 ++
// type comp = getComponent<MainRoute>
// type props = ComponentProps<comp>

// case 2 ++
// type MainProps = GetComponentPropsFromRoute<MainRoute>

// case 3 ++
// type AppRoutesWithProps = RouteWithProps<MainRoute>['props']

// case 4 
// type AppRoutesWithProps = RouteWithProps<AppRoute>['props']





// case 5 ++
// type RoutesMap = {
//   [routeName in AppRouteName]: RouteWithProps<AppRoute & {name: routeName}>
// }
// export type AppRoutes = RoutesMap['Main']['props']

// case 5 ++
type RoutesMap<routeNames extends string> = {
  [routeName in routeNames]: RouteWithProps<AppRoute & {name: routeName}>
}
// export type AppRoutes = RoutesMap<AppRouteName>


// case 6 ++
export type DefineRoutes<RowRoutes extends readonly (ValidRoute & HasValidChildren & RouteWithLazyComp)[]> = 
  RoutesMap<FlatRoutes<RowRoutes[number]>['name']>

export type AppRoutes = DefineRoutes<RoutesOptions>
type _r1 = AppRoutes['Main']['props']
type _r2 = DefineRoutes<RoutesOptions>['home']['props']

type RouteHasProps<R extends AppRouteName> = keyof AppRoutes[R]['props'] extends never ? false : true
// case 7 ++
type _mainRouteHasProps = RouteHasProps<'Main'> // true
type _homeRouteHasProps = RouteHasProps<'home'> // false


type DefineParamsIfRouteHasProps<R extends AppRouteName> = 
  // RouteHasProps<R> extends true ? {params: AppRoutes[R]['props']} : never
  RouteHasProps<R> extends true ? Record<'params', AppRoutes[R]['props']> : never

  
  // case 8
type C<R extends AppRouteName> = AppRoutes[R]['props']
type _c = {params: C<'Main'>}
type _homeParams = DefineParamsIfRouteHasProps<'home'>
type _mainParams = DefineParamsIfRouteHasProps<'Main'>

// case 9 ++
type MakePartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
type withOptionalAge = MakePartial<{name: 'foo', age: 12, city: 12}, 'age' | 'city'>


type OptionalParamsIfRouteHasntProps<T extends {params: any}> = T['params'] extends never ? Omit<T, 'params'> : T


// case 10 ++ (it works in .vue $router.navigate, )
type _homeTypedTo = TypedTo<'home'>
type _mainTypedTo = TypedTo<'Main'>

type nn = true extends boolean ? true : never

