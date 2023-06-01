async function applyFetch<T>(refForData: Ref<T[]>, cb: () => Promise<T[]>): Promise<void> {
  const data = await cb()
  refForData.value = data
}
export default function<T>(cb: () => Promise<T[]>): Ref<T[]> {
  const data = ref([])
  applyFetch(data, cb) //? don't know wheteher should be used inside onMounted or other Lifecycle
  return data
}