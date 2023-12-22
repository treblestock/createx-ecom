export interface LocalStorageRecords {} 

const api = {
  get<K extends keyof LocalStorageRecords & string>(key: K): LocalStorageRecords[K] {
    const json = localStorage.getItem(key) as string
    const value = JSON.parse(json) as LocalStorageRecords[K]
    return value
  },
  set<K extends keyof LocalStorageRecords & string, V extends LocalStorageRecords[K]>(
    key: K, value: V
  ): void {
    return localStorage.setItem(key, JSON.stringify(value))
  },
  delete<K extends keyof LocalStorageRecords & string>(key: K): void {
    return localStorage.removeItem(key)
  },
}

export default function() {
  return api
}