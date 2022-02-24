export function typedKeys<T>(o: T): (keyof T)[] {
  // type cast should be safe because that's what really Object.keys() does
  return Object.keys(o) as (keyof T)[]
}

/**
 * accept a url string and return a params map
 * @param url - string
 * @returns params - Map<string, string>
 */
export function getUrlParams(url: string) {
  const regex = /[?&]([^=#]+)=([^&#]*)/g
  const params = new Map<string, string>()
  let match

  while ((match = regex.exec(url))) {
    params.set(match[1], match[2])
  }

  return params
}
