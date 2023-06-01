import type { App as VueApp } from 'vue'
import type { Router, RouteLocationRaw } from 'vue-router'

import { modifyRouteTo } from '~/router/utils'

export const navigateInjectionKey = Symbol('navigate')
export interface Navigate {
  (to: RouteLocationRaw): void
}

function createNavigate(router: Router) {
  return function navigate(to: RouteLocationRaw) {
    const serializedTo = modifyRouteTo(to)
    router.push(serializedTo)
  }
}

declare module 'vue-router' {
  export interface Router {
    $navigate: Navigate
  }
}

export default (app: VueApp) => {
  const router = app.config.globalProperties.$router
  if (!router) throw new Error('Router wasn\'t passed or undefined in plugins/navigate.js')

  const navigate = createNavigate(router)
  router.$navigate = navigate
  app.config.globalProperties.$navigate = navigate
  app.provide(navigateInjectionKey, navigate)
}