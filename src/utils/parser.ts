/**
 * Created by Leon<silenceace@gmail.com> at 2022-02-24 18:12:41.
 * Last modified at 2022-02-24 18:12:41
 */

export const parseDate2Ts = (date: string) => {
  return new Date(Date.parse(date.replace(/-/g, '/'))).getTime()
}
