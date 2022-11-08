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

/**
 * compareVersion('1.11.0', '1.9.9')
// 1 新版本 0相同版本 -1低版本
 */
export function compareVersion(_v1: string, _v2: string) {
  const v1 = _v1.split('.')
  const v2 = _v2.split('.')
  const len = Math.max(v1.length, v2.length)

  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i], 10)
    const num2 = parseInt(v2[i], 10)

    if (num1 > num2) {
      return 1
    }
    if (num1 < num2) {
      return -1
    }
  }

  return 0
}
