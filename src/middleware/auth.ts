import useAuthStore from '~/stores/Auth'
import useVueRouterStore from '~/stores/VueRouter'
import type { NavigationGuard } from 'vue-router'
export default ((to, from) => {
  const isAuthRequired = to.meta.isAuthOnly
  const isAuth = useAuthStore().isAuth

  if (isAuthRequired && !isAuth) {
    const routerStore = useVueRouterStore()
    routerStore.redirects.onSignin = to.fullPath
    return '/'
  }
}) as NavigationGuard