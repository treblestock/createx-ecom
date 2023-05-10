// TODO: make pure js-dom logic body.addEventListener()
// TODO: adapt logic for setup Created
import { ref, type Ref, onMounted, watch, ComputedRef } from "vue"


type PossibleElement = null | HTMLElement
interface SliderLogicOptions {
  HTMLbody: Ref<PossibleElement> | ComputedRef<PossibleElement>
  HTMLpagination: Ref<PossibleElement> | ComputedRef<PossibleElement>
  shift?: boolean
}

interface SliderLogic {
  setSlideActive:() => void,
  setNextSlideActive:() => void,
  setPrevSlideActive:() => void,
  currentShift:() => void,
}
type UninitializedSliderLogic = {
  [Key in keyof SliderLogic]: undefined
}

export default function({HTMLbody, HTMLpagination, shift}: SliderLogicOptions): SliderLogic | UninitializedSliderLogic {
  const sliderLogic = {
    setSlideActive: undefined,
    setNextSlideActive: undefined,
    setPrevSlideActive: undefined,
    currentShift: undefined,
  } as SliderLogic | UninitializedSliderLogic
  

  watch(HTMLbody)
  let activeInd = 0
  let currentShift = ref(0)
  // const bodyItems = [...HTMLbody.value.children] //! mounted defined only (runtime) 
  // const pageElements = [...HTMLpagination.value.children]
  // const maxInd = bodyItems.length - 1

  
  function updateCurrentShift() {
    const bodyItems = [...HTMLbody.value.children]
    let newShift = 0
    for (const bodyItem of bodyItems) {
      if (bodyItem.classList.contains('_active') ) break

      const styles = window.getComputedStyle(bodyItem)
      const parnentStyles = window.getComputedStyle(bodyItem.parentElement)
      
      const delta = Number.parseFloat(styles.width) 
        + Number.parseFloat(styles.marginLeft) 
        + Number.parseFloat(styles.marginRight)
        + (Number.parseFloat(parnentStyles.gap) || 0)
      
      newShift += delta
    }
    currentShift.value = -newShift
  }

  function updateCSSClasses() {
    //* Full usage (beautiful code composition)
    // const bodyItems = [...HTMLbody.value.children]
    // const pageElements = [...HTMLpagination.value.children]
    // const maxInd = bodyItems.length - 1
    
    // pageElements.forEach(page => page.classList.remove('_active') )
    // bodyItems.forEach(item => item.classList.remove('_active') )
    // pageElements[activeInd].classList.add('_active')
    // bodyItems[activeInd].classList.add('_active')


    const bodyItems = [...HTMLbody.value.children]
    bodyItems.forEach(item => item.classList.remove('_active') )
    bodyItems[activeInd].classList.add('_active')
    
    if (!HTMLpagination) return
    const pageElements = [...HTMLpagination.value.children]
    pageElements.forEach(page => page.classList.remove('_active') )
    pageElements[activeInd].classList.add('_active')
  }
  
  function setSlideActive(event) {
    const pageElements = [...HTMLpagination.value.children]
    
    const page = pageElements.find(page => page.contains(event.target) )
    activeInd = [...page.parentElement.children].indexOf(page)
    updateCSSClasses()
    if (shift) updateCurrentShift()
  }
  function setNextSlideActive() {
    const bodyItems = [...HTMLbody.value.children]
    const maxInd = bodyItems.length - 1
    
    activeInd = (activeInd + 1) % (maxInd + 1)
    updateCSSClasses()
    if (shift) updateCurrentShift()
  }
  function setPrevSlideActive() {
    const bodyItems = [...HTMLbody.value.children]
    const maxInd = bodyItems.length - 1
    
    activeInd = (activeInd - 1) >= 0 ? activeInd - 1 : maxInd
    updateCSSClasses()
    if (shift) updateCurrentShift()
  }

  onMounted(() => {
    HTMLBody.value.children[0].classList.add('_active')
  })

  return sliderLogic
}

