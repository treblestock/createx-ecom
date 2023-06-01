import type { Product, RefOrComputed } from "~/types"



type useProductFiltersOutput = {
  items: ComputedRef<Product[]>
  categoryMinorClothType: Ref<Set<Product['categoryMinorClothType']>>
  brand: Ref<Set<Product['brand']>>
  materials: Ref<Set<Product['materials'][number]>>
  colors: Ref<Set<Product['colors'][number]>>
  sizes: Ref<Set<Product['sizes'][number]>>
}
type WhiteLists = Omit<useProductFiltersOutput, 'items'>
type ProductKey = keyof WhiteLists

function isIntersects(data1: any | any[], data2: any | any[]): boolean {
  const arr1 = Array.isArray(data1) ? data1 : [data1]
  const arr2 = Array.isArray(data2) ? data2 : [data2]

  return !!arr1.find(item => arr2.includes(item))
}

function applyFilter(
  items: Ref<Product[]> | ComputedRef<Product[]>, 
  whiteLists: WhiteLists, 
  itemKey: ProductKey): Product[] {

  const pickedValues = whiteLists[itemKey].value
  if (!pickedValues.size) return items.value
  
  console.log(itemKey)
  return items.value.filter(product => {
    let isChosen = false
    pickedValues.forEach((pickedValue: any) => {
      isChosen ||= isIntersects(product[itemKey], pickedValue)
    })
    return isChosen
  })
}

export default function(initialItems: Ref<Product[]> | ComputedRef<Product[]>): useProductFiltersOutput {
  const whiteLists = {
    categoryMinorClothType: ref(new Set<Product['categoryMinorClothType']>()),
    brand: ref(new Set<Product['brand']>()),
    materials: ref(new Set<Product['materials'][number]>()),
    colors: ref(new Set<Product['colors'][number]>()),
    sizes: ref(new Set<Product['sizes'][number]>()),
  }

  
  const filtredItems = computed<Product[]>(() => {
    const productKeysToFilterBy = Object.keys(whiteLists) as ProductKey[]
    
    setTimeout( () => console.log({filtredItems: filtredItems.value.length}), 0)
    return productKeysToFilterBy.reduce((items, currentItemKey) => {
      const filtered = computed(() => 
        applyFilter(items, whiteLists, currentItemKey)
      )

      return filtered
    }, initialItems).value
  })


  

  return {
    items: filtredItems,
    ...whiteLists,
  }
}