export function responsiveLeng(
  lengMinValue, lengMaxValue, sizeUnit, vpMin, vpMax
) {
  vpMin ??= 320
  vpMax ??= 1440
  sizeUnit ??= 'px'

  lengMinValue = +lengMinValue
  lengMaxValue = +lengMaxValue
  vpMin = +vpMin
  vpMax = +vpMax

  const lengMin = lengMinValue + sizeUnit 
  const lengMax = lengMaxValue + sizeUnit

  
  const lengDelta = lengMaxValue - lengMinValue
  const vpDelta = vpMax - vpMin
  const lengPerVp = lengDelta / vpDelta

  const lengDynamic = `(${lengMin} + ${lengPerVp} * (100vw - ${vpMin}${sizeUnit}))`
  return `clamp(${lengMin}, ${lengDynamic}, ${lengMax})`
}

export const rl = responsiveLeng
export const leng = responsiveLeng

export function id(value) {
  return value
}