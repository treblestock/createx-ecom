// TODO: make pure js-dom logic body.addEventListener()
import { ref, type Ref, watch, ComputedRef, computed, nextTick, onMounted, onUpdated } from "vue"



type PossibleElement = null | HTMLElement
interface SliderOptions {
  HTMLbody: Ref<PossibleElement> | ComputedRef<PossibleElement>
  HTMLpagination: Ref<PossibleElement> | ComputedRef<PossibleElement>
  activeClass?: string
}


class Slider {
  private HTMLbody: SliderOptions['HTMLbody']
  private HTMLpagination: SliderOptions['HTMLpagination']
  private activeClass: string
  private isInitialized: boolean = false
  private currentInd: Ref<number>
  private currentShift: ComputedRef<number>
  public pagesCount: Ref<number>

  constructor({HTMLbody, HTMLpagination, activeClass = '_active'}: SliderOptions) {
    this.HTMLbody = HTMLbody
    this.HTMLpagination = HTMLpagination
    this.activeClass = activeClass

    this.currentInd = ref(0)
    this.currentShift = computed(() => {
      if (!this.HTMLbody.value) return 0

      const HTMLbodyItems = this.HTMLbody.value.children
      const swipedItems: HTMLElement[] = Array.prototype.slice.call(HTMLbodyItems, 0, this.currentInd.value)

      const bodyGap: number = Number.parseFloat(window.getComputedStyle(this.HTMLbody.value).gap) || 0
      const itemProps = ['width', 'marginRight', 'marginLeft'] as const
      return swipedItems.reduce((shift: number, bodyItem: HTMLElement) => {
        const itemStyles = window.getComputedStyle(bodyItem)
        shift += bodyGap
        itemProps.forEach((prop) => shift += Number.parseFloat(itemStyles[prop]))
        return shift
      }, 0)
    })
    // pages
    this.pagesCount = ref(0)
    onMounted(() => {
      this.updatePagesCount()
    })
    onUpdated(() => {
      this.updatePagesCount()
    })


    watch(
      this.currentShift,
      this.updateView.bind(this)
    )

    watch(
      [HTMLbody, HTMLpagination],
      this.initialize.bind(this)
    )
  }



  private initialize(): void {
    if (!(this.HTMLbody.value && this.HTMLpagination.value) ) {
      this.isInitialized = false
      return
    }
    this.isInitialized = true
    this.setSlide(0)
    this.updateView()
  }
  
  public setSlide(n: number): void {
    if (!this.isInitialized) throw new Error('Can\'t use Slider before DOM Initialized')
    if (!this.HTMLbody.value) return
    this.currentInd.value = n === 0 ? n : n % this.HTMLbody.value.children.length
  }
  public nextSlide(): void {
    if (!this.isInitialized) throw new Error('Can\'t use Slider before DOM Initialized')
    if (!this.HTMLbody.value) return

    const nextSlideInd = this.currentInd.value + 1 % this.HTMLbody.value.children.length
    this.setSlide(nextSlideInd)
  }
  public prevSlide(): void {
    if (!this.isInitialized) throw new Error('Can\'t use Slider before DOM Initialized')
    if (!this.HTMLbody.value) return
    
    const prevSlideInd = this.currentInd.value > 0
      ? this.currentInd.value - 1
      : this.HTMLbody.value.children.length - 1
    
    this.setSlide(prevSlideInd)
  }

  private updatePagesCount(): void {
    this.pagesCount.value =  this.HTMLbody.value?.children.length || 0
    nextTick(() => this.updateView())
  }

  private async updateView(): Promise<void> {
    if (!this.HTMLbody.value) return 
    await nextTick()

    const elementsToUpdateClasses: HTMLCollection[] = []
    if (this.HTMLbody.value.children.length) elementsToUpdateClasses.push(this.HTMLbody.value.children)
    if (this.HTMLpagination.value?.children.length) elementsToUpdateClasses.push(this.HTMLpagination.value.children)
  
    elementsToUpdateClasses.forEach(HTMLcollection => {
      for (const elem of HTMLcollection) {
        elem.classList.remove(this.activeClass)
      }
      HTMLcollection[this.currentInd.value].classList.add(this.activeClass)
    })
    this.HTMLbody.value.style.transform = `translateX(${-this.currentShift.value}px)`
  }
}

export default function({HTMLbody, HTMLpagination, activeClass}: SliderOptions): Slider {
  return new Slider({HTMLbody, HTMLpagination, activeClass})
}




