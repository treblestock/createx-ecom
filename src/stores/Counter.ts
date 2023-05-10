import { defineStore } from "pinia"


export const useStoreCounter = defineStore('Counter', {
  state: () => ({
    count: 12
  }),
  getters: {
    doubleCount(): number {
      return this.count * 2
    },
    tripleCount(): number {
      return this.count * 2
    },
  },
  actions: {
    inc(int = 1) {
      this.count += int
    },
  },
  onRegister() {
    
  },
  isToCacheState: true,
})

