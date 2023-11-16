import { type UnwrapRef } from "vue"

async function applyFetch<T>(refForData: Ref<T>, cb: () => Promise<T>): Promise<void> {
  const data = await cb()
  refForData.value = data
}

// function useFetch<T>(cb: () => Promise<T>): Ref<UnwrapRef<T> | null>
// function useFetch<T>(cb: () => Promise<T>, initialValue: T): Ref<UnwrapRef<T>>
// function useFetch<T>(cb, initialValue) {
//   const data = ref(initialValue || null)
//   cb().then(resolved => {
//     data.value = resolved as UnwrapRef<T>
//   })
//   return data
// }

// todo: type it. Required function overload useFetch(cb, initialValue) | useFetch(cb)
// export default function useFetch<T, I extends T>(cb: () => Promise<T>, initialValue?: I): I extends  undefined
//   ? Ref<UnwrapRef<T> | null> 
//   : Ref<UnwrapRef<T>>
//   {
//   const data = ref<T | null>(initialValue || null)
//   cb().then(resolved => {
//     data.value = resolved as UnwrapRef<T>
//   })
//   //@ts-ignore
//   return data
// }
export default function useFetch<T, I>(cb: () => Promise<T>, initialValue: I): Ref<UnwrapRef<T | I>>  {
  const data = ref<T | I>(initialValue)
  cb().then(resolved => {
    data.value = resolved as UnwrapRef<T | I>
  })
  return data
}