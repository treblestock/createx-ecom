<script setup lang="ts">
import { type Component } from 'vue'


import Popup from '~/components/global/Popup.vue'
import * as staticPopups from '~/components/widgets/popups/index'

import { installPopupManager } from '~/composables/usePopupManager'

type PopupId = string
const activePopups = ref<Map<Component, PopupId>>(new Map())


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
function showPopup(compNameOrComp: keyof typeof staticPopups | Component) {
  const comp: Component = typeof compNameOrComp === 'string' ? staticPopups[compNameOrComp] : compNameOrComp
  const compId = Math.random() + ''

  activePopups.value.set(markRaw(comp), compId)
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
    <Popup v-for="[comp, compId] in activePopups" :key="compId"
      @close="() => closePopup(comp)"
    >
      <Component :is="comp"></Component>
    </Popup> 
  </div>
</template>

<style scoped>
@import '~css/consts';



</style>~/components/widgets/popups