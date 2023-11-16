// foramting and so on
export * from './date'
export * from './strings'
export * from './api'


export async function sleep(delay: number = 1000): Promise<void> {
  return await new Promise((res) => {
    setTimeout(() => {
      res()
    }, delay)
  })
}
