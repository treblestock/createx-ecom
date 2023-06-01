import { type Component, h, defineAsyncComponent, getCurrentInstance } from "vue"
import { assetsIcons } from "~/types"
import useApp from "~/composables/useApp"

const ASSETS_IMG_PATH = '../assets/img/'
const VUE_ICONS_PATH_BASE = '../components/icons/'


export default function(iconName: string): Component {
  const foundAssetsIcon = assetsIcons[iconName as keyof typeof assetsIcons]
  if (foundAssetsIcon) {    
    const iconPath = new URL(`${ASSETS_IMG_PATH + foundAssetsIcon}`, import.meta.url).href
    return () => h('img', {src: iconPath})
  }

  const foundGlobalComp = getCurrentInstance()?.appContext.components[iconName]
  if (foundGlobalComp) return foundGlobalComp

  const iconPath = VUE_ICONS_PATH_BASE + iconName + '.vue'
  const Comp = defineAsyncComponent(() => import(iconPath /* @vite-ignore */) ) //todo: 
  useApp()?.component(iconName, Comp)
  return Comp
}