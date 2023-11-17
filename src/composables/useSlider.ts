//todo: make useSlider() without any SliderWindow.vue component
/*
  /assets
    /css
      /null
      /global
      /
    /fonts
    /img
      /icons
  /puglic
  /types
  /api
  /tests
  /utils
  /composables
  /components
    /global
      ...
      /lazy
    /features // small things with logic and functionality
    /sections // widgets - big page blocks
      /forms
      /popups
  /pages
  /stores
  /plugins
    /pinia
    ...
*/ 






import SliderWindow from '~/components/global/lazy/SliderWindow.vue'

export default function(): {
  setSlide(slideIndex: number): boolean
  prevSlide(): void
  nextSlide(): void
  activeInd: Ref<number>
  SliderWindow: typeof SliderWindow
  setItemsCount: (n: number) => void
} {
  const activeInd = ref(0)
  const maxItemsInd = ref(0)

  function setItemsCount(n: number) {
    maxItemsInd.value = n - 1
  }

  function setSlide(n: number): boolean {
    if (n < 0 || n > maxItemsInd.value) return false
    activeInd.value = n
    return true
  } 

  function nextSlide() {
    setSlide(activeInd.value + 1) || setSlide(0)
  }
  function prevSlide() {
    setSlide(activeInd.value - 1) || setSlide(maxItemsInd.value)
  }

  return {
    setSlide,
    prevSlide,
    nextSlide,
    activeInd,
    SliderWindow,
    setItemsCount,
  }
}