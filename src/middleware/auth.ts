import useAuthStore from '~/stores/auth'
import useVueRouterStore from '~/stores/vueRouter'
import type { NavigationGuard } from 'vue-router'


declare module 'vue-router' {
  interface RouteMeta {
    isAuthOnly?: boolean
  }
}



export default ((to, from, next) => {
  const isAuthRequired = to.meta.isAuthOnly
  const isAuth = useAuthStore().isAuth
  
  if (isAuthRequired && !isAuth) {
    const routerStore = useVueRouterStore()
    routerStore.redirects.onSignin = to
    routerStore.requestSignin()
    next(from)
  }
  else next()
}) as NavigationGuard