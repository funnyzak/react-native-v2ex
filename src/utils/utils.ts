/**
 * wait for a given time
 * @param timeout milliseconds
 * @returns
 */
export const wait = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}
