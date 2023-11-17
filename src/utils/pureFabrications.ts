export async function sleep(delay: number = 1000): Promise<void> {
  return await new Promise((res) => {
    setTimeout(() => {
      res()
    }, delay)
  })
}
export function debounce(fn: (...args: any) => any, delay: number): () => void {
  let prevRun = NaN
  return function() {
    const now = Date.now()
    if (now - prevRun < delay) return
    
    fn() 
    prevRun = now
  }
}