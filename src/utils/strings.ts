const doesIncludeWords = (str: string, substr: string) => {
  str = str.toLowerCase()
  substr = substr.toLowerCase()
  const substrWords = substr.split(' ').filter(item => item != ' ' && item != '')
  const regexCond = substrWords.reduce((reg, word) => reg += `(${word}.*)` , '.*')
  const r = new RegExp(regexCond)

  return r.exec(str)
}

function toHumanCase(camelCase: string): string {
  // @ts-ignore
  return camelCase.replaceAll(/[A-Z]/g, match => ' ' + match.toLowerCase() )
}

function humanToKebab(humanCase: string): string {
  return humanCase.split(' ').map(word => word.toLowerCase()).join('-')
} 

export {
  doesIncludeWords,
  toHumanCase,
  humanToKebab,
}