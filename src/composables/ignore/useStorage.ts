import {type WatchSource, watch } from "vue"
function useStorage(itemName: string, value: unknown): unknown | void {
  function _get(itemName: string): unknown {
    const foundData = localStorage.getItem(itemName)
    return foundData ? JSON.parse(foundData) : null
  }
  function _set(itemName: string, value: unknown) {
    return localStorage.setItem(itemName, JSON.stringify(value) )
  }
  function _delete(itemName: string) {
    return localStorage.removeItem(itemName)
  }
  return value 
    ? _set(itemName, value) 
    : value === null 
      ? _delete(itemName)
      : _get(itemName)
}
export default useStorage



export function setAutoCaching(storageKey: string, dep: WatchSource) {
  watch(
    dep,
    newValue => useStorage(storageKey, newValue),
    { deep: true }
  )
}


