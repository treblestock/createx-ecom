import { defineStore } from "pinia"
import type { Product, RefOrComputed } from "~/types"

type ProductKey = 'categoryMinorClothType' | 'brand' | 'materials' | 'colors' | 'sizes'

function isIntersects(data1: any | any[], data2: any | any[]): boolean {
  const arr1 = Array.isArray(data1) ? data1 : [data1]
  const arr2 = Array.isArray(data2) ? data2 : [data2]

  return !!arr1.find(item => arr2.includes(item))
}






export default defineStore('productFilters', {
  state: () => ({
    initialProducts: [] as Product[],
    allowedValues: {
      categoryMinorClothType: new Set<Product['categoryMinorClothType']>(),
      brand: new Set<Product['brand']>(),
      materials: new Set<Product['materials']>(),
      colors: new Set<Product['colors']>(),
      sizes: new Set<Product['sizes']>(),
    }
  }),
  getters: {
    filteredProducts(): Product[] {
      const productKeysToFilterBy = Object.keys(this.allowedValues)
      console.log('recalculated')
      return productKeysToFilterBy.reduce((items, currentItemKey) => {
        // @ts-ignore
        const filtered = this.applyFilter(items, currentItemKey as ProductKey)

        return filtered
      }, this.initialProducts)
    },
  },
  actions: {
    applyFilter(items: Product[], itemKey: ProductKey): Product[] {
      const pickedValues = this.allowedValues[itemKey]
      if (!pickedValues.size) return items
      
      console.log(itemKey)
      return items.filter(product => {
        let isChosen = false
        pickedValues.forEach(pickedValue => {
          isChosen ||= isIntersects(product[itemKey], pickedValue)
        })
        return isChosen
      })
    },
  },
})