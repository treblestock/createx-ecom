<script setup lang="ts">
import type { Component, VNodeProps, AllowedComponentProps } from 'vue'
// import type { ComponentProps } from '~/types/vue'


import Popup from '~/components/global/Popup.vue'
import * as staticPopups from '~/components/widgets/popups/index'

import { installPopupManager } from '~/composables/usePopupManager'


type PopupId = string
// type PropsToExclude = keyof VNodeProps | keyof AllowedComponentProps | `on${string}` // internal vue's ones and custom emits
// type PopupProps = Omit<InstanceType<typeof Popup>['$props'], PropsToExclude>
type PopupProps = ComponentProps<typeof Popup>

type Comp = new (...args: any) => any
// type ComponentProps<C extends Component> = C extends new (...args: any) => any
type ComponentProps<C> = C extends new (...args: any) => any
  ? Omit<InstanceType<C>['$props'], keyof VNodeProps | keyof AllowedComponentProps>
  : never

type ResolveComponent<C extends keyof typeof staticPopups | Component> = 
  C extends keyof typeof staticPopups ? typeof staticPopups[C] : C

  
const defaultStaticPopupsProps: Partial<Record<keyof typeof staticPopups, PopupProps>> = {
  'Cart': {
    sideRight: true,
    noPadding: true,
    transitionName: 'shift-left'
  }
}
type ActivePopupData = {
  id: PopupId
  popupProps?: PopupProps
  componentProps?: any
}
const activePopups = ref<Map<Component, ActivePopupData>>(new Map())


// test
// import Btn from '~/components/global/Btn.vue';
// onMounted(() => {
//   showPopup('Signin')
//   console.log('here')
//   showPopup(Btn)
//   setTimeout( () => closePopup('Signin'), 2000)
// })



// ===

// public
function showPopup<C extends keyof typeof staticPopups | Component>(
    compNameOrComp: C, 
    popupProps?: PopupProps,
    componentProps?: ComponentProps<ResolveComponent<C>>
  ) {
  const comp: Component = typeof compNameOrComp === 'string' 
    ? staticPopups[compNameOrComp as keyof typeof staticPopups] 
    : compNameOrComp as Component
  popupProps ??= typeof compNameOrComp === 'string' ? defaultStaticPopupsProps[compNameOrComp] : undefined 
    // default static popup Props if there are 
  const compId = Math.random() + ''

  activePopups.value.set(markRaw(comp), {
    id: compId, 
    popupProps,
    componentProps,
  })
}

function closePopup(compNameOrComp: Component | keyof typeof staticPopups) {
  const comp: Component = typeof compNameOrComp === 'string' ? staticPopups[compNameOrComp] : compNameOrComp
  if (!activePopups.value.has(comp)) {
    console.warn(`[PopupManage.vue]: tried to close non-existing by key: ${compNameOrComp}`)
    return
  } 

  activePopups.value.delete(comp)
}


// provide public api
const router = useRouter()
router.$showPopup = showPopup
router.$closePopup = closePopup
installPopupManager() 

defineExpose({
  showPopup,
  closePopup,
})

provide('showPopup', showPopup)
provide('closePopup', closePopup)





</script>

<template>
  <div>
    <Popup v-for="[comp, {id, popupProps, componentProps}] in activePopups" :key="id"
      @close="() => closePopup(comp)"
      :="popupProps"
    >
      <Component :is="comp" :="componentProps"></Component>
    </Popup>
  </div>
</template>

<style scoped>
@import '~css/consts';



</style>