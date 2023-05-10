import { inject } from "vue"
import type { Navigate } from "~/plugins/vueRouterExtension"

export default function useNavigate(arg: Parameters<Navigate>['0']): void {
  const navigate = inject('$navigate') as Navigate
  if (!navigate) throw new Error('there is no injection by key "$navigate".\n Probably use VueRouterExtenstionPlugin')
  return navigate(arg)
}