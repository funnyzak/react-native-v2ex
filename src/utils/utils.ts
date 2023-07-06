/**
 * Created by Leon<silenceace@gmail.com> at 2022-03-05 17:28:05.
 * Last modified at 2022-11-08 23:49:23
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

export function truncateString(
  str: string,
  length: number,
  placeholder = '...',
  placeholderPosition: 'start' | 'end' | 'middle' = 'end'
) {
  if (!str) return str
  if (str.length <= length) {
    return str
  }
  const placeholderLength = placeholder.length
  let truncated = ''
  if (placeholderPosition === 'end') {
    truncated = str.slice(0, length - placeholderLength) + placeholder
  } else if (placeholderPosition === 'start') {
    truncated = placeholder + str.slice(str.length - length + placeholderLength, str.length)
  } else if (placeholderPosition === 'middle') {
    const startLength = Math.floor((length - placeholderLength) / 2)
    const endLength = length - startLength - placeholderLength
    truncated = str.slice(0, startLength) + placeholder + str.slice(str.length - endLength, str.length)
  }
  return truncated
}
export function randomString(length: number) {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
  let _randomString = ''
  for (let i = 0; i < length; i++) {
    const rnum = Math.floor(Math.random() * chars.length)
    _randomString += chars.substring(rnum, rnum + 1)
  }
  return _randomString
}
export const isDayTime = () => {
  const hours = new Date().getHours()
  return hours > 6 && hours < 20
}
export function findMin<T>(array: T[], compareFn: (a: T) => number): T | undefined {
  if (array.length === 0) {
    return undefined
  }
  let minIndex = 0
  for (let i = 1; i < array.length; i++) {
    if (compareFn(array[i]) < compareFn(array[minIndex])) {
      minIndex = i
    }
  }
  return array[minIndex]
}
export function findMax<T>(array: T[], compareFn: (a: T) => number): T | undefined {
  if (array.length === 0) {
    return undefined
  }
  let maxIndex = 0
  for (let i = 1; i < array.length; i++) {
    if (compareFn(array[i]) > compareFn(array[maxIndex])) {
      maxIndex = i
    }
  }
  return array[maxIndex]
}
export function isJsonString(str: string) {
  try {
    if (typeof JSON.parse(str) === 'object') {
      return true
    }
  } catch (e) {
    return false
  }
  return false
}
export function getTimestampSecond(_date: Date = new Date()) {
  return Math.floor(_date.getTime() / 1000)
}
export function dateOrMillisecondToSecondTimestamp(dateOrMillisecond: Date | number) {
  if (dateOrMillisecond instanceof Date) {
    return getTimestampSecond(dateOrMillisecond)
  }
  return Math.floor(dateOrMillisecond / 1000)
}

export function runWithouthError(fn: Function) {
  try {
    fn()
  } catch (error) {
    console.log('runWithouthError error:', error)
  }
}

export function runAsyncWithouthError(fn: Function, finallyFn?: Function) {
  return async () => {
    try {
      await fn()
      finallyFn && finallyFn()
    } catch (error) {
      console.log('runAsyncWithouthError error:', error)
      finallyFn && finallyFn()
    }
  }
}
