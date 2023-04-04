/**
 * Created by Leon<silenceace@gmail.com> at 2022-02-24 18:12:41.
 * Last modified at 2022-02-24 18:12:41
 */

export function typedKeys<T>(o: T): (keyof T)[] {
  // type cast should be safe because that's what really Object.keys() does
  return Object.keys(o) as (keyof T)[]
}
export function getUrlParams(url: string) {
  const regex = /[?&]([^=#]+)=([^&#]*)/g
  const params = new Map<string, string>()
  let match
  while ((match = regex.exec(url))) {
    params.set(match[1], match[2])
  }
  return params
}
