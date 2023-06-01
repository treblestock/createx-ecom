export { default as AppLink } from './AppLink.vue'
export { default as Img } from './Img.vue'
export { default as AppLinkBtn } from './AppLinkBtn.vue'
// Form
export { default as Btn } from './Btn.vue'
export { default as Input } from './Input.vue'
export { default as InputNumber } from './InputNumber.vue'
export { default as PasswordInput } from './PasswordInput.vue'
export { default as Radio } from './Radio.vue'
export { default as RadioBtn } from './RadioBtn.vue'
export { default as Checkbox } from './Checkbox.vue'
export { default as CheckboxBtn } from './CheckboxBtn.vue'
export { default as Select } from './Select.vue'
export { default as SelectGroup } from './SelectGroup.vue'
export { default as InputGroup } from './InputGroup.vue'
export { default as InputNumberGroup } from './InputNumberGroup.vue'
export { default as RadioGroup } from './RadioGroup.vue'
export { default as CheckboxGroup } from './CheckboxGroup.vue'
export { default as PasswordGroup } from './PasswordGroup.vue'
// 
export { default as Popup } from './Popup.vue'
export { default as NavTabs } from './NavTabs.vue'
export { default as Slider } from './Slider.vue'
export { default as Spoiler } from './Spoiler.vue'
export { default as WithSpoiler } from './WithSpoiler.vue'
// Icons
export { default as IconRounded } from './IconRounded.vue'
export { default as Icon } from './Icon.vue'
export { default as ArrowRight } from './ArrowRight.vue'
export { default as ArrowLeft } from './ArrowLeft.vue'


export interface AppGlobalComponents {
  Img: typeof import('./Img.vue')['default']
  AppLink: typeof import('./AppLink.vue')['default']
  AppLinkBtn: typeof import('./AppLinkBtn.vue')['default']
  // from
  Btn: typeof import('./Btn.vue')['default']
  Input: typeof import('./Input.vue')['default']
  InputNumber: typeof import('./InputNumber.vue')['default']
  PasswordInput: typeof import('./PasswordInput.vue')['default']
  Radio: typeof import('./Radio.vue')['default']
  RadioBtn: typeof import('./RadioBtn.vue')['default']
  Checkbox: typeof import('./Checkbox.vue')['default']
  CheckboxBtn: typeof import('./CheckboxBtn.vue')['default']
  Select: typeof import('./Select.vue')['default']
  SelectGroup: typeof import('./SelectGroup.vue')['default']
  InputGroup: typeof import('./InputGroup.vue')['default']
  InputNumberGroup: typeof import('./InputNumberGroup.vue')['default']
  RadioGroup: typeof import('./RadioGroup.vue')['default']
  CheckboxGroup: typeof import('./CheckboxGroup.vue')['default']
  PasswordGroup: typeof import('./PasswordGroup.vue')['default']
  // 
  Popup: typeof import('./Popup.vue')['default']
  NavTabs: typeof import('./NavTabs.vue')['default']
  Slider: typeof import('./Slider.vue')['default']
  Spoiler: typeof import('./Spoiler.vue')['default']
  WithSpoiler: typeof import('./WithSpoiler.vue')['default']
  // icons
  IconRounded: typeof import('./IconRounded.vue')['default']
  Icon: typeof import('./Icon.vue')['default']
  ArrowRight: typeof import('./ArrowRight.vue')['default']
  ArrowLeft: typeof import('./ArrowLeft.vue')['default']
}

declare module 'vue' {
  export interface GlobalComponents extends AppGlobalComponents {}
}