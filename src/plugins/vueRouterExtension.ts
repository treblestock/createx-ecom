import type { App as VueApp } from 'vue'
import type { Router } from 'vue-router'
// import type { TypedTo } from '~/router/types'
import type { AppRouteName, TypedTo } from '~/router/typedRouter'

import { modifyRouteTo } from '~/router/utils'


export const navigateInjectionKey = Symbol('navigate')
export interface Navigate {
  // (to: TypedTo): void
  <N extends AppRouteName>(to: TypedTo<N>): ReturnType<Router['push']>
}

function createNavigate(router: Router) {
  // return function navigate(to: TypedTo) {
  return function navigate<N extends AppRouteName>(to: TypedTo<N>) {
    const modifiedTo = modifyRouteTo(to)
    return router.push(modifiedTo)
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