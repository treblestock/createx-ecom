const monthMap = [
  'January', 'February', 'March',
  'April', 'May', 'June',
  'July', 'August', 'September',
  'October', 'Novemmbar', 'December',
] as const
const timeInMs = {
  second: 1000,
  minute: 1000 * 60,
  hour:   1000 * 60 * 60,
  date:   1000 * 60 * 60 * 24,
  month:  1000 * 60 * 60 * 24 * 30,
  year:   1000 * 60 * 60 * 24 * 365,
} as const

interface DateLike {
  year: number,
  month: typeof monthMap[number],
  date: number,
}

function separateDate(date: Date): DateLike {
  return {
    date: date.getDate(),
    month: monthMap[date.getMonth()],
    year: date.getFullYear(),
  }
}

// JSON-dateParser
const r: RegExp = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ // (1)
const r2: RegExp = /("|^)\d{4}-\d{2}-\d{2}/ // (2)
const isDate = (str: string) => r.exec(str)

const parseDateHandler = (key: string, value: any): any => 
  isDate(value) ? new Date(value) : value

// toJSDate 
const toJSDate = (dateObj: DateLike): Date =>
  new Date(dateObj.year, monthMap.indexOf(dateObj.month), dateObj.date )
  

// duration

const getDuration = (dateA: Date | DateLike, dateB: Date | DateLike, period: keyof typeof timeInMs = 'month'): number => {
  dateA = dateA instanceof Date ? dateA : toJSDate(dateA)
  dateB = dateB instanceof Date ? dateB : toJSDate(dateB)
  const time = Math.abs(+dateB - +dateA)
  return time / timeInMs[period]
}

var toTimeInSec = (time: number) => (time / 1000).toFixed(1) + ' sec'


function dateToHumanCase(data: string | Date | DateLike): string {
  let date
  if (typeof data === 'string') {
    date = separateDate(new Date(data))
  } else if (data instanceof Date) {
    date = separateDate(data)
  }

  return `${date?.month} ${date?.date}, ${date?.year}`
} 


export {
  parseDateHandler,
  toJSDate,
  getDuration,

  toTimeInSec,
  dateToHumanCase,
}