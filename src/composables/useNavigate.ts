// import { inject } from "vue"
// import type { Navigate } from "~/plugins/vueRouterExtension"
// import { navigateInjectionKey } from "~/plugins/vueRouterExtension"
import router from '~/router'
import type { AppRouteName, TypedTo } from '~/router/typedRouter'

// export default function useNavigate(arg: Parameters<Navigate>['0']): void {
export default function useNavigate<N extends AppRouteName>(to: TypedTo<N>) {
  // const navigate = inject(navigateInjectionKey) as Navigate
  // if (!navigate) throw new Error('there is no injection by key "navigate".\n Probably VueRouterExtenstionPlugin hasn\'t activated')
  return router.$navigate(to)
}