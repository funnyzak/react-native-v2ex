export const parseDate2Ts = (date: string) => {
  return new Date(Date.parse(date.replace(/-/g, '/'))).getTime()
}
