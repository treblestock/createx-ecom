import useStoreVueRouter from '~/stores/VueRouter'


import { defineStore } from "pinia"

export default defineStore('auth', {
  state: () => ({
    isAuth: false,
  }),
  getters: {
    
  },
  actions: {
    signin() {
      this.isAuth = true
      useStoreVueRouter().onSignin()
    },
    signout() {
      this.isAuth = false
      useStoreVueRouter().onSignout()
    },
  },
})