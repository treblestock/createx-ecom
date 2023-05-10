import type { App as VueApp } from 'vue'
import type { Router, RouteLocationRaw } from 'vue-router'

import { modifyRouteTo } from '~/router/utils'

export interface Navigate {
  (routeData: RouteLocationRaw): void
}

function createNavigate(router: Router) {
  return function navigate(routeData: RouteLocationRaw) {
    const to = modifyRouteTo(routeData)
    router.push(to)
  }
}
export default (app: VueApp) => {
  const router = app.config.globalProperties.$router
  if (!router) throw new Error('Router wasn\'t passed or undefined in plugins/navigate.js')
  const navigate = createNavigate(router)
  app.config.globalProperties.$navigate = navigate
  app.provide('navigate', navigate)
}