import { inject } from "vue"
import type { Navigate } from "~/plugins/vueRouterExtension"
import { navigateInjectionKey } from "~/plugins/vueRouterExtension"

export default function useNavigate(arg: Parameters<Navigate>['0']): void {
  const navigate = inject(navigateInjectionKey) as Navigate
  if (!navigate) throw new Error('there is no injection by key "navigate".\n Probably VueRouterExtenstionPlugin hasn\'t activated')
  return navigate(arg)
}