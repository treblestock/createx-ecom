<script setup lang="ts">
import type { Component, VNodeProps, AllowedComponentProps } from 'vue'


import Popup from '~/components/global/Popup.vue'
import * as staticPopups from '~/components/widgets/popups/index'

import { installPopupManager } from '~/composables/usePopupManager'


type PopupId = string
type PropsToExclude = keyof VNodeProps | keyof AllowedComponentProps | `on${string}` // internal vue's ones and custom emits
type PopupProps = Omit<InstanceType<typeof Popup>['$props'], PropsToExclude>


const defaultStaticPopupsProps: Partial<Record<keyof typeof staticPopups, PopupProps>> = {
  'Cart': {
    sideRight: true,
    noPadding: true,
    transitionName: 'shift-left'
  }
}
const activePopups = ref<Map<Component, {id: PopupId, props?: PopupProps}>>(new Map())


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
function showPopup(compNameOrComp: keyof typeof staticPopups | Component, popupProps?: PopupProps) {
  const comp: Component = typeof compNameOrComp === 'string' ? staticPopups[compNameOrComp] : compNameOrComp
  popupProps ??= typeof compNameOrComp === 'string' ? defaultStaticPopupsProps[compNameOrComp] : undefined 
    // default static popup Props if there are 
  const compId = Math.random() + ''

  activePopups.value.set(markRaw(comp), {id: compId, props: popupProps})
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
    <Popup v-for="[comp, {id, props}] in activePopups" :key="id"
      @close="() => closePopup(comp)"
      :="props"
    >
      <Component :is="comp"></Component>
    </Popup>
  </div>
</template>

<style scoped>
@import '~css/consts';



</style>