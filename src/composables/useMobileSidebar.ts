type Api = {
  isOpen: Ref<boolean> | ComputedRef<boolean>
  doesExist: Ref<boolean>
  open: () => void
  close: () => void
  toggle: () => void
}

// let api: Api
let componentApi: Omit<Api, 'doesExist'>
let composableApi: Api 


let doesExist: Ref<boolean>
export default function(): Api {
  doesExist ??= ref(false)
  
  composableApi ??= {
    doesExist: doesExist,
    isOpen: computed(() => doesExist.value ? componentApi.isOpen.value : false),
    open() {
      if (!composableApi.doesExist.value) {
        return console.warn(`useMobileSidebar.ts: cannot use mobile sidebar api as sidebar doesn't exist`)
      }
      componentApi.open()
    },
    close() {
      if (!composableApi.doesExist.value) {
        return console.warn(`useMobileSidebar.ts: cannot use mobile sidebar api as sidebar doesn't exist`)
      }
      componentApi.close()
    },
    toggle() {
      if (!composableApi.doesExist.value) {
        return console.warn(`useMobileSidebar.ts: cannot use mobile sidebar api as sidebar doesn't exist`)
      }
      componentApi.toggle()
    },
  }
  return composableApi
}


export function provideApi(apiToProvide: Omit<Api, 'doesExist'>) {
  componentApi = apiToProvide
  doesExist ??= ref(false)
  doesExist.value = true

  onBeforeUnmount(() => {
    doesExist.value = false
  })
}



/*
  Burger.vue
  -----

  const {
    doesExist,
    isOpen,

    open,
    close,
    toggle
  } = useMobileSidebar()

  <>
    v-if=doesExist
    _active: isOpen
    @click=toggle
  <>

  MobileSidebar.vue
  -----
  


*/ 