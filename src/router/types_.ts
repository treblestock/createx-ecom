import type { RouteRecordRaw } from "vue-router"
import type { RoutesOptions } from "."



type ArrayToUnion<A> = A extends Array<infer I> ? I : never


type arr = [1, 2]
type res = ArrayToUnion<arr>

// type RouteOption = {
//   readonly [prop in keyof RouteRecordRaw]?: RouteRecordRaw[prop]
// } & {readonly children?: readonly RouteOption[]}
type RouteOption = {
  readonly name: string,
  readonly component?: Component | {default: () => Promise<Component>}
  readonly redirect?: string | {name: string}
  readonly children?: RouteOption[]
}
type FlatRoutes<R extends RouteOption> = R | R extends {readonly children: Array<infer C>} ? ArrayToUnion<R['children']> : never

type r = FlatRoutes<RoutesOptions['0']>