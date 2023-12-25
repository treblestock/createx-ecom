import type { RouteQueryAndHash, RouteRecordRaw } from 'vue-router'
import type { RoutesOptions } from "."
import type { Component } from 'vue'
import type { RequiredKeys, OptionalKeys } from '~/types'
import type { ComponentProps } from '~/types/vue'
import { RouteLocationRaw } from 'vue-router'

// !todo: make nesting routes' props merge support

type RemoveReadonly<T> = {
  - readonly[key in keyof T]: T[key]
}

type FlatRoutes<R> = R extends {readonly children: Readonly<Array<infer C>>} ? R | FlatRoutes<C> : R



type AppRawRoute = FlatRoutes<RoutesOptions[number]>
export type AppRouteName = AppRawRoute['name']
type AppRawRoutesByName = {
  [N in AppRouteName & string as N]: AppRawRoute & {name: N}
}

//* test
// type test_blogRoute = AppRawRoutesByName['blog']['name']

type ResolveRoute<R> = R extends {readonly redirect: {name: infer N extends AppRouteName} } ? ResolveRoute<AppRawRoutesByName[N]> : R

//* test
// type test_resolvedHomeComponent = ResolveRoute<AppRawRoutesByName['defaultLayout']>['component']


type ComponentOrLoader = Component | (() => Promise<{default: Component}>)
type GetComponent<R extends {readonly component: ComponentOrLoader}> = 
  R extends {readonly component: () => Promise<{default: Component}>}
    ? Awaited<ReturnType<R['component']>>['default']
    : R['component']
 

//* test
// import Popup from '~/components/global/Popup.vue'
// type test_PopupSync = typeof Popup
// type test_PopupLoader= typeof import('~/components/global/Popup.vue')
// type test_CompSync = test_PopupSync extends ComponentOrLoader ? test_PopupSync : never
// type test_CompLoader = test_PopupLoader extends ComponentOrLoader ? test_PopupLoader : never

// type test_ProductComponent = GetComponent<ResolveRoute<AppRawRoutesByName['product']>>

type AppRouteProps<R extends {readonly component: ComponentOrLoader}> = 
  RemoveReadonly<ComponentProps<GetComponent<R>>>

//* test
// type test_ProductProps = Props<GetComponent<ResolveRoute<AppRawRoutesByName['product']>>>


// 1)
// type WithComponentAndProps<R extends {readonly component: ComponentOrLoader}> = 
//   Omit<R, 'component' | 'props'> &
//   {component: GetComponent<ResolveRoute<R>>} &
//   {props: AppRouteProps<ResolveRoute<R>>}

// 2)
type WithComponentAndProps<R> = 
  ResolveRoute<R> extends {readonly component: ComponentOrLoader} ?
    Omit<R, 'component' | 'props'> &
    {component: GetComponent<ResolveRoute<R>>} &
    {props: AppRouteProps<ResolveRoute<R>>}
    : never


//* test
// type test_ProductRouteProps = WithComponentAndProps<AppRawRoutesByName['product']>['props']

//* test
// type test_RouteRedirectsRouteWithProps = Readonly<{
//   readonly name: '_test2',
//   readonly redirect: {readonly name: 'product'}
// }>
// type test_RedirectedProps = WithComponentAndProps<test_RouteRedirectsRouteWithProps>["props"]


export type AppRoutes = WithComponentAndProps<AppRawRoute>
export type AppRoutesByName = {
  [N in keyof AppRawRoutesByName & string as N]: WithComponentAndProps<AppRawRoutesByName[N]>
}

//* test
// type test_BlogPostProps = AppRoutesByName['blogPost']['props']



// export type TypedTo<N extends AppRouteName> = RequiredKeys<AppRoutesByName[N]['props']> extends never 
// export type TypedTo<N extends AppRouteName> = {} extends AppRoutesByName[N]['props']
export type TypedTo<N extends AppRouteName> = keyof AppRoutesByName[N]['props'] extends never 
  ? { 
    name: N
    // query?: Record<string, string>
   } | string | RouteQueryAndHash | Omit<RouteLocationRaw, 'name'>
  : RequiredKeys<AppRoutesByName[N]['props']> extends never 
    ? { 
      name: N
      params?: AppRoutesByName[N]['props']
      // query?: Record<string, string>
    } | string | RouteQueryAndHash | Omit<RouteLocationRaw, 'name' | 'params'>
    : { 
      name: N
      params: AppRoutesByName[N]['props']
      // query?: Record<string, string>
    } | string | RouteQueryAndHash | Omit<RouteLocationRaw, 'name' | 'params'>


// const to: TypedTo
//* test
// declare function push<N extends AppRouteName>(to: TypedTo<N>): void
// // case 1: params are forbiden
// push({
//   name: 'home',
// })
// // case 2: params are required
// push({
//   name: 'product',
//   params: {
//     id: 12
//   }
// })
// // case 3: params are optional
// push({
//   name: 'trackOrder',
//   params: {
//     orderId: 'foo'
//   }
// })