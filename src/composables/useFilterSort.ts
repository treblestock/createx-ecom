type valueof<T> = T[keyof T]

type Filters<T> = {
  [key in keyof T & string]?: (value: T[key]) => boolean
}
type Sorts<T> = {
  [key in keyof T & string]?: 'asc' | 'desc' | ((valueA: T[key], valueB: T[key]) => number)
}

type UseFilterSortInput<T, F extends Filters<T>, S extends Sorts<T>> = {
  items: Ref<T[]> | ComputedRef<T[]>,
  filterBy?: F
  sortBy?: S
}


type FilterFlags<F extends Filters<any> > = {
  [key in keyof F & string as `isActive${Capitalize<key>}Filter`]: Ref<boolean>
}
type InternalFilterFlags<F extends Filters<any> > = {
  [key in keyof F]: Ref<boolean>
}
type SortFlags<S extends Sorts<any>> = {
  [key in keyof S & string as `isActive${Capitalize<key>}Sort`]: Ref<boolean>
}
type InternalSortFlags<S extends Sorts<any> > = {
  [key in keyof S]: Ref<boolean>
}

type UseFilterSortOutput<T, F extends Filters<T>, S extends Sorts<T>> = FilterFlags<F> & SortFlags<S> & {
  items: ComputedRef<T[]>,
}


// // Debug
// //+
// type _item = {
//   name: string
//   birthday: number
// }
// //+
// type _filters = {
//   name: (name: string) => boolean
// }
// type _sorts = {
//   birthday: (a: number, b: number) => number
// }
// type _sortHandler = valueof<_sorts>
// //+
// type _filterFlags = FilterFlags<_filters>
// type _internalFilterFlags = InternalFilterFlags<_filters>
// type _sortFlags = SortFlags<_sorts>
// type _internalSortFlags = InternalSortFlags<_sorts>


// //+
// type _input = UseFilterSortInput<_item, _filters, _sorts >
// declare const input: _input

// //+
// type _output = UseFilterSortOutput<_item, _filters, _sorts >
// declare const out: _output
// //




const ascSort = <T = string | number>(a: T, b: T) => a > b ? 1 : -1
const descSort = <T = string | number>(a: T, b: T) => a > b ? -1 : 1

// utils
function getSortHandler(optyion: 'asc'): typeof ascSort
function getSortHandler(optyion: 'desc'): typeof descSort
function getSortHandler<A, B>(option: (a: A, b: B) => number ): (a: A, b: B) => number
function getSortHandler<S extends Sorts<any>>(option: valueof<S> ): ((valueA: any, valueB: any) => number) {
  return typeof option === 'function'
    ? option
    : option === 'asc'
      ? ascSort
      : descSort
}


function createSortFilterFlags<F extends Filters<any>, S extends Sorts<any>>(filterKeys: (keyof F)[], sortKeys: (keyof S)[]): {
  outputFilterAndSortFlags: FilterFlags<F> & SortFlags<S>
  filterFlags: InternalFilterFlags<F>
  sortFlags: InternalSortFlags<S>
} {
  const outputFilterAndSortFlags = {} as FilterFlags<F> & SortFlags<S>

  const filterFlags: InternalFilterFlags<F> = filterKeys.reduce((filterFlags, itemKeyToFilterBy) => {
    filterFlags[itemKeyToFilterBy] = ref(true)
    // @ts-ignore
    outputFilterAndSortFlags[`isActive${capitalize(itemKeyToFilterBy)}Filter`] = filterFlags[itemKeyToFilterBy]
    return filterFlags
  }, {} as InternalFilterFlags<F>)

  const sortFlags: InternalSortFlags<S> = sortKeys.reduce((sortFlags, itemKeyToSortBy) => {
    sortFlags[itemKeyToSortBy] = ref(true)
    // @ts-ignore
    outputFilterAndSortFlags[`isActive${capitalize(itemKeyToSortBy)}Sort`] = sortFlags[itemKeyToSortBy]
    return sortFlags
  }, {} as InternalSortFlags<S>)


  return {
    outputFilterAndSortFlags,
    filterFlags,
    sortFlags,
  }
} 

const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1)

export default function<T extends {}, F extends Filters<T> | {}, S extends Sorts<T> | {}>(
  {items, filterBy, sortBy}: UseFilterSortInput<T, F, S>): UseFilterSortOutput<T, F, S> {
  
  const filterKeys = Object.keys(filterBy || {}) as (keyof F & string)[]
  const sortKeys = Object.keys(sortBy || {}) as (keyof S & string)[]
  
  const {
    outputFilterAndSortFlags,
    filterFlags,
    sortFlags,
  // } = createSortFilterFlags<F, S>(filterBy, sortBy)
  } = createSortFilterFlags<F, S>(filterKeys, sortKeys)
  // } = createSortFilterFlags({name: (name: string) => true}, {birthday: (a: number, b: number) => 1})
  



  const filteredAndSortedItems = computed<T[]>(() => {
    const filtered = filterKeys.reduce((filtered, itemKeyToFilterBy) => {
      return filterFlags[itemKeyToFilterBy].value 
      // @ts-ignore
        ? filtered.filter(item => filterBy[itemKeyToFilterBy](item[itemKeyToFilterBy]) )
        : filtered
    }, items.value)

    const sorted = sortKeys.reduce((sort, itemKeyToSortBy) => {
      return sortFlags[itemKeyToSortBy].value 
      // @ts-ignore
        ? sort.sort(item => getSortHandler<S>(sortBy[itemKeyToSortBy])(item[itemKeyToSortBy]) )
        : sort
    }, filtered)

    return sorted
  })


  return {
    items: filteredAndSortedItems,
    ...outputFilterAndSortFlags
  }
}