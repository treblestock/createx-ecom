import type { Component, InstaceType } from "vue"
import PopupManager from "~/components/features/PopupManager.vue"
import type { Router } from "vue-router" 

type PopupManager = InstanceType<typeof PopupManager>
type PopupManagerAPI = Pick<PopupManager, 'showPopup' | 'closePopup'>


declare module 'vue-router' {
  interface Router {
    $showPopup: PopupManagerAPI['showPopup']
    $closePopup: PopupManagerAPI['closePopup']
  }
}

// installation
let _isPopupManagerInstalled = false
let api: PopupManagerAPI

function isPopupManagerInstalled() {
  return _isPopupManagerInstalled
}

export function installPopupManager() {
  _isPopupManagerInstalled = true
  const router = useRouter()
  api = {
    showPopup: router.$showPopup,
    closePopup: router.$closePopup
  }
}
// ===

export default function(): PopupManagerAPI {
  if (!isPopupManagerInstalled()) throw new Error(`usePopupManager.ts: usePopupManager() before setPopupManger(PopupManager) )`)
  return api
}