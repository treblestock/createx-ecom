import { type ComputedRef, type Ref, computed, onUnmounted, ref } from 'vue'

let isCalced: boolean = false
let res: null | Res = null 

interface Res {
  vw: Ref,
  isMobile: ComputedRef,
}

export default function(): Res {
  if (isCalced) return res as Res 

  const vw = ref(document.body.clientWidth)
  const isMobile = computed(() => vw.value < 400)
  
  const onResize = () => {
    vw.value = document.body.clientWidth
  }
  window.addEventListener('resize', onResize)
  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
    console.log('cleanded')
    isCalced = false
  })
  
  res = {
    vw,
    isMobile,
  } as Res
  isCalced = true

  return res
}