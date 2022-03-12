/**
 * wait for a given time
 * @param timeout milliseconds
 * @returns
 */
export const wait = (timeout: number, callback?: () => void) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      callback && callback()
      resolve(true)
    }, timeout)
  })
}
