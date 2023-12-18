import type { Product } from "~/types"



type useProductFiltersOutput = {
  items: ComputedRef<Product[]>
  categorySex: Ref<Set<Product['categorySex']>>
  categoryMinorClothType: Ref<Set<Product['categoryMinorClothType']>>
  brand: Ref<Set<Product['brand']>>
  materials: Ref<Set<Product['materials'][number]>>
  colors: Ref<Set<Product['colors'][number]>>
  sizes: Ref<Set<Product['sizes'][number]>>
  resetFilters: () => void
}
type WhiteLists = Omit<useProductFiltersOutput, 'items' | 'resetFilters'>
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
    categorySex: ref(new Set<Product['categorySex']>()),
    categoryMinorClothType: ref(new Set<Product['categoryMinorClothType']>()),
    brand: ref(new Set<Product['brand']>()),
    materials: ref(new Set<Product['materials'][number]>()),
    colors: ref(new Set<Product['colors'][number]>()),
    sizes: ref(new Set<Product['sizes'][number]>()),
  }

  function resetFilters() {
    whiteLists.categorySex.value.clear()
    whiteLists.categoryMinorClothType.value.clear()
    whiteLists.brand.value.clear()
    whiteLists.materials.value.clear()
    whiteLists.colors.value.clear()
    whiteLists.sizes.value.clear()
  }

  
  const filtredItems = computed<Product[]>(() => {
    const productKeysToFilterBy = Object.keys(whiteLists) as ProductKey[]
    
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
    resetFilters,
  }
}