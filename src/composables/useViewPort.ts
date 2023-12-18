import { type ComputedRef, type Ref, computed, onUnmounted, ref } from 'vue'

let _vw: Ref<number>
let vw: ComputedRef<number>
let isMobile: ComputedRef<boolean>


export default function(): {vw: Ref<number>, isMobile: ComputedRef<boolean>} {
  _vw ??= ref(document.body.clientWidth)
  vw ??= computed(() => _vw.value)
  isMobile ??= computed(() => vw.value < 400)

  
  const onResize = () => {
    _vw.value = document.body.clientWidth
  }
  
  window.addEventListener('resize', onResize)

  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
    console.log('cleanded')
  })

  return {
    vw,
    isMobile
  }
}