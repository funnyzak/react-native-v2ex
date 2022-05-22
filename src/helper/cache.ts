/**
 * Created by leon<silenceace@gmail.com> on 22/4/19.
 */

import { V2exObject } from '@src/types'
import { CACHE_EXPIRE_TIME } from '@src/config/constants'

export const memberFromCache = (
  userid: number | string,
  list?: { pullTime: number; info: V2exObject.Member }[],
  cacheExpireTime: number = CACHE_EXPIRE_TIME
) => {
  if (!list || list.length == 0) {
    return undefined
  }
  return (
    list.find(
      (v) =>
        v.pullTime + cacheExpireTime > new Date().getTime() &&
        (typeof userid === 'number' ? v.info.id === userid : v.info.username === userid)
    )?.info ?? undefined
  )
}

export const nodeFromCache = (nodeid: number | string, list?: { pullTime: number; info: V2exObject.Node }[]) => {
  if (!list || list.length == 0) {
    return undefined
  }
  return (
    list.find(
      (v) =>
        v.pullTime + CACHE_EXPIRE_TIME > new Date().getTime() &&
        (typeof nodeid === 'number' ? v.info.id === nodeid : v.info.name === nodeid)
    )?.info ?? undefined
  )
}
