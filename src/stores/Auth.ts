import { defineStore } from "pinia"
import type { Account } from "~/types"
import useStoreVueRouter from '~/stores/vueRouter'
import { initLocalStorageMockData } from "~/utils/api/initLocalStorage"

import useStoreProfile from '~/stores/profile'
import useLocalStorage from "~/composables/useLocalStorage"



export default defineStore('auth', () => {
  const account = ref<Account | null>(null)
  const isAuth = computed(() => !!account.value)

  function requestSignin() {
    useStoreVueRouter().requestSignin()
  }

  async function signup(email: string, pass: string, fullname: string): Promise<Account | null> {
    const newAccount = await api.signup(email, pass, fullname)
    if (newAccount == null) return null

    account.value = newAccount
    useStoreProfile().onSignin()
    useStoreVueRouter().onSignin()
    return newAccount
  }

  async function signin(email: string, pass: string): Promise<Account | null> {
    const foundAccount = await api.signin(email, pass)
    if (foundAccount == null) return null
    
    account.value = foundAccount
    useStoreProfile().onSignin()
    useStoreVueRouter().onSignin()
    return foundAccount
  }

  async function signout() {
    const isSucceed = await api.signout()
    if (!isSucceed) return 
    account.value = null
    useStoreVueRouter().onSignout()
    useStoreProfile().onSignout()
  }

  async function deleteAccount() {
    if (!account.value) return 
    return api.deleteAccount(account.value.email, account.value.password)
  }
  async function _createTestAccount() {
    localStorage.clear()
    initLocalStorageMockData()
    onRegister()
  }
  async function _deleteAccountClientOnly() {
    const account = useLocalStorage().get('auth.accounts')[0]
    return api.deleteAccount(account.email, account.password)
  }

  async function updateAccount(newAccountData: Partial<Omit<Account, 'id'>>): Promise<Account> {
    const updatedAccount = await api.updateAccount({
      id: account.value?.id as number,
      ...newAccountData,
    })
    account.value = updatedAccount
    return updatedAccount
  }

  // lifecycle hooks
  async function onRegister() {
    const account = useLocalStorage().get('profile.account')
    if (!account) return

    signin(account.email, account.password)
  }

  return {
    account,
    isAuth,
    requestSignin,
    signup,
    signin,
    signout,
    deleteAccount,
    _deleteAccountClientOnly,
    _createTestAccount,
    updateAccount,
    onRegister,
  }
})