<script setup lang="ts">
import { type Component } from 'vue'


import Popup from '~/components/global/Popup.vue'
import * as staticPopups from '~/components/popups/index.ts'

import { installPopupManager } from '~/composables/usePopupManager'


// 

const popupId = Symbol('popupId')
type PopupId = string

const activePopups = ref<Map<PopupId, Component>>(new Map())

function setPopupId<C extends Component>(comp: C): C & {[popupId]: string}  {
  //@ts-ignore
  const compName: string = comp?.__name || Math.random() + ''
  //@ts-ignore
  const compWithId: C & {[popupId]: string} = comp
  compWithId[popupId] = compName
  return compWithId
}
function getPopupId(compOrPopupId: PopupId | Component): PopupId | null {
  // @ts-ignore
  const id = typeof compOrPopupId === 'string' ? compOrPopupId : compOrPopupId[popupId]
  if (!id) return null
  return id
}


// test
// import Btn from '../global/Btn.vue';
onMounted(() => {
  // showPopup('AuthPopup')
  // showPopup(Btn)
  // setTimeout( () => closePopup('AuthPopup'), 2000)
  
})



// ===

// public
function showPopup(compNameOrComp: keyof typeof staticPopups | Component) {
  const comp: Component = typeof compNameOrComp === 'string' ? staticPopups[compNameOrComp] : compNameOrComp
  const compWithPopupId = setPopupId(comp)
  const id = getPopupId(compWithPopupId) as string
  activePopups.value.set(id, markRaw(compWithPopupId))
}

function closePopup(compNameOrComp: Component | keyof typeof staticPopups) {
  const id = getPopupId(compNameOrComp)
  if (!id || !activePopups.value.has(id)) {
    console.warn(`PopupManager.vue: Tried to close popup with non-existing popupId.\n Provided data: (${compNameOrComp})`)
  } else {
    activePopups.value.delete(id)
  }
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
    <Popup v-for="[compId, comp] in activePopups" :key="compId"
      :slotId="compId"
      @close="((slotId: keyof typeof staticPopups) => closePopup(slotId))"
    >
      <Component :is="comp"></Component>
    </Popup> 
  </div>
</template>

<style scoped>
@import '~css/consts';



</style>