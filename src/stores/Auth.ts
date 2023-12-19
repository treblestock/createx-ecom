import { defineStore } from "pinia"
import useStoreVueRouter from '~/stores/vueRouter'

import useStoreProfile from '~/stores/profile'



export default defineStore('auth', {
  state: () => ({
    _isAuth: false
  }),
  getters: {
    isAuth(): boolean {
      return this._isAuth
    },
  },
  actions: {
    requestSignin() {
      useStoreVueRouter().requestSignin()
    },
    async signup(email: string, pass: string, fullname: string) {
      const res = await api.signup(email, fullname, pass)
      if (typeof res !== 'string') {
      throw new Error(`Failed to sign up. \nGot: ${res}`)
      }
      useStoreProfile().fetchUserProfile()
      useStoreVueRouter().onSignin()
    },
    async signin(email: string, pass: string) {
      const res = await api.signin(email, pass)

      if (typeof ref !== 'string') {
        throw new Error(`Failed to sign in\nGot: ${res}`)
      }
      useStoreProfile().fetchUserProfile()
      useStoreVueRouter().onSignin()
    },
    async signout() {
      localStorage.removeItem('accessToken')
      this._isAuth = false
      useStoreVueRouter().onSignout()
    },
  },
  async onRegister() {
    localStorage.setItem('accessToken', '__')
    const accessToken = localStorage.getItem('accessToken')
    if (!accessToken) {
      return useStoreVueRouter().requestSignin()
    }
    this._isAuth = true
    useStoreProfile().fetchUserProfile()
  },
})