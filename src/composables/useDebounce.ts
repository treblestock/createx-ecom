export default function<F extends (...args: any[]) => any>(f: F, delay: number) {
  let isCooldown = false
  return (...args: Parameters<F>) => {
    if (isCooldown) return
    
    isCooldown = true
    setTimeout( () => isCooldown = false, delay)
    return f(...args)
  }
}