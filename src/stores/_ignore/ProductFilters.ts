import { defineStore } from "pinia"
import type { Product, RefOrComputed } from "~/types"


function isIntersects(data1: any | any[], data2: any | any[]): boolean {
  const arr1 = Array.isArray(data1) ? data1 : [data1]
  const arr2 = Array.isArray(data2) ? data2 : [data2]

  return !!arr1.find(item => arr2.includes(item))
}

export default defineStore('productFilters', () => {
  const initialProducts = ref<Product[]>([])

  type ProductKey = keyof Product & keyof typeof allowedValues.value
  const allowedValues = ref({
    categoryMinorClothType: new Set<Product['categoryMinorClothType']>(),
    brand: new Set<Product['brand']>(),
    materials: new Set<Product['materials']>(),
    colors: new Set<Product['colors']>(),
    sizes: new Set<Product['sizes']>(),
  })

  
  const filtredItems = computed(() => {
    const productKeysToFilterBy = Object.keys(allowedValues.value)
    console.log('recalculated')
    return productKeysToFilterBy.reduce((items, currentItemKey) => {
      const filtered = computed(() => 
        applyFilter(items, currentItemKey as ProductKey)
      )

      return filtered
    }, initialProducts).value
  })

  function applyFilter(items: RefOrComputed<Product[]>, itemKey: ProductKey): Product[] {
    const pickedValues = allowedValues.value[itemKey]
    if (!pickedValues.size) return items.value
    
    console.log(itemKey)
    return items.value.filter(product => {
      let isChosen = false
      pickedValues.forEach(pickedValue => {
        isChosen ||= isIntersects(product[itemKey], pickedValue)
      })
      return isChosen
    })
  }


  // const filtredItems = computed<Product[]>(() => {
  //   const productKeysToFilterBy = Object.keys(allowedValues.value) as (ProductKey)[]

  //   const filtered = productKeysToFilterBy.reduce(applyFilter, initialProducts)
  //   return filtered.value
  // })


  // function applyFilter(items: RefOrComputed<Product[]>, itemKey: ProductKey): RefOrComputed<Product[]> {
  //   const pickedValues = allowedValues.value[itemKey]
  //   if (!pickedValues.size) return items
  //   console.log(itemKey)

  //   return computed(() => 
  //     items.value.filter(product => {
  //       let isChosen = false
  //       pickedValues.forEach(pickedValue => {
  //         isChosen ||= isIntersects(product[itemKey] as string, pickedValue)
  //         console.log(product[itemKey])
  //       })
  //       return isChosen
  //     })
  //   )
  // }


  

  // const filteredByCategoryMinorClothType = computed(() => { 
  //   console.log('filteredByCategoryMinorClothType')
  //   return applyFilter(initialProducts, 'categoryMinorClothType', allowedValues.value.categoryMinorClothType)
  // })
  // const filteredByBrand = computed(() => { 
  //   console.log('filteredByBrand')
  //   return applyFilter(filteredByCategoryMinorClothType, 'categoryMinorClothType', allowedValues.value.brand)
  // })
  // const filteredByMaterials = computed(() => { 
  //   console.log('filteredByMaterials')
  //   return applyFilter(filteredByBrand, 'categoryMinorClothType', allowedValues.value.materials)
  // })
  // const filteredByColors = computed(() => { 
  //   console.log('filteredByColors')
  //   return applyFilter(filteredByMaterials, 'categoryMinorClothType', allowedValues.value.colors)
  // })
  // const filteredBySizes = computed(() => { 
  //   console.log('filteredBySizes')
  //   return applyFilter(filteredByColors, 'categoryMinorClothType', allowedValues.value.sizes)
  // })
  // const filtredItems = computed(() => filteredBySizes.value)



  return {
    initialProducts,
    allowedValues,
    filtredItems
  }
})