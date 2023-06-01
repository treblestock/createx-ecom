import { defineStore } from "pinia"
import { type RouteLocationRaw } from "vue-router"


type PossibleRoute = null | RouteLocationRaw

export default defineStore('vueRouter', {
  state: () => ({
    redirects: {
      onSignin: null as PossibleRoute
    }
  }),
  getters: {
    
  },
  actions: {
    onSignin() { // continue navigation aborted before auth
      const lastAbortedRoute = this.redirects.onSignin
      console.log(lastAbortedRoute)
      if (!lastAbortedRoute) return

      this.redirects.onSignin = null
      this.$router.$navigate(lastAbortedRoute)
    },
    onSignout() { // isAuthOnly ? redirect('/') : doNothing()
      const isOnAuthOnlyPage = this.$router.currentRoute.value.meta.isAuthOnly
      if (!isOnAuthOnlyPage) return

      this.$router.$navigate('/')
    },
  },
})