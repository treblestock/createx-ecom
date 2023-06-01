type UsePaginationOutput = {
  currentInds: ComputedRef<number[]>
  pages: ComputedRef<number[]>
}

function fillArr(from :number, to: number): number[] {
  const finalInds: number[] = []
    for (let i = from; i <= to; i++) {
      finalInds.push(i)
    }
  return finalInds
}


type UsePaginationInput = {
  items: Ref<unknown[]> | ComputedRef<unknown[]>
  limit: Ref<number> | ComputedRef<number>
  currentPage: Ref<number>
}
export default function({items, limit, currentPage}: UsePaginationInput): UsePaginationOutput {
  const pages = computed<number[]>(() => {
    if (!items.value.length) return []
    
    const maxPage = Math.ceil(items.value.length / limit.value)
    return fillArr(1, maxPage)
  })
  const currentInds = computed<number[]>(() => {
    if (!items.value.length) return []

    const startInd = limit.value * (currentPage.value - 1)
    const maxInd = Math.min((limit.value * currentPage.value - 1), items.value.length - 1)
    return fillArr(startInd, maxInd)
  })

  return {
    pages,
    currentInds,
  }
}