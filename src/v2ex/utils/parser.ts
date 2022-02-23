export const parseDate2Ts = (date) => {
  return new Date(Date.parse(date.replace(/-/g, '/'))).getTime()
}
