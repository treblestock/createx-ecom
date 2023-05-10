export { default as AppLink } from './AppLink.vue'
export { default as Img } from './Img.vue'
export { default as AppLinkBtn } from './AppLinkBtn.vue'
export { default as Btn } from './Btn.vue'
export { default as Input } from './Input.vue'
// export { default as Icon } from './Icon.vue'
export { default as ArrowRight } from './ArrowRight.vue'
export { default as ArrowLeft } from './ArrowLeft.vue'
export { default as Popup } from './Popup.vue'
export { default as NavTabs } from './NavTabs.vue'
export { default as Slider } from './Slider.vue'
export { default as Spoiler } from './Spoiler.vue'
export { default as WithSpoiler } from './WithSpoiler.vue'



// @ts-ignore
declare module 'vue' {
  export interface GlobalComponents {
    Img: typeof import('./Img.vue')['default']
    AppLink: typeof import('./AppLink.vue')['default']
    AppLinkBtn: typeof import('./AppLinkBtn.vue')['default']
    Btn: typeof import('./Btn.vue')['default']
    Input: typeof import('./Input.vue')['default']
    // Icon: typeof import('./Icon.vue')['default']
    ArrowRight: typeof import('./ArrowRight.vue')['default']
    ArrowLeft: typeof import('./ArrowLeft.vue')['default']
    Popup: typeof import('./Popup.vue')['default']
    NavTabs: typeof import('./NavTabs.vue')['default']
    Slider: typeof import('./Slider.vue')['default']
    Spoiler: typeof import('./Spoiler.vue')['default']
    WithSpoiler: typeof import('./WithSpoiler.vue')['default']
  }
}