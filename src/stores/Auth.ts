import { defineStore } from "pinia"
import useStoreVueRouter from '~/stores/vueRouter'



export default defineStore('auth', {
  state: () => ({
    email: '' as string,
    fullname: '' as string
  }),
  getters: {
    isAuth(): boolean {
      return this.email !== '' && this.fullname !== ''
    },
  },
  actions: {
    requestSignin() {
      useStoreVueRouter().requestSignin()
    },

    async signup(email: string, pass: string, fullname: string) {
      const res = await api.signup(email, pass, fullname)
      if (typeof res !== 'string') {
        throw new Error(`Failed to sign up. \nGot: ${res}`)
      }
      this.email = email
      this.fullname = fullname
      useStoreVueRouter().onSignin()
    },
    async signin(email: string, pass: string) {
      const res = await api.signin(email, pass)

      if (typeof ref !== 'string') {
        throw new Error(`Failed to sign in\nGot: ${res}`)
      }
      this.fetchUserProfile()
      useStoreVueRouter().onSignin()
    },
    async signout() {
      localStorage.removeItem('accessToken')
      this.email = ''
      this.fullname = ''
      useStoreVueRouter().onSignout()
    },

    async fetchUserProfile() {
      const res = await api.getUserProfile()

      if ('error' in res) {
        throw new Error(`Failed to fetch user's profile. \nGot: ${res}`)
      }
      this.email = res.email
      this.fullname = res.fullname

    }
  },
  async onRegister() {
    const accessToken = localStorage.getItem('accessToken')
    if (!accessToken) {
      return useStoreVueRouter().requestSignin()
    }
    
  },
})