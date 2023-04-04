/**
 * Created by Leon<silenceace@gmail.com> at 2022-04-20 20:13:53.
 * Last modified at 2022-10-22 19:06:30
 */

import { CACHE_EXPIRE_TIME } from '@src/config/constants'
import { memberFromCache } from '@src/helper/cache'
import { RootState } from '@src/store'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '.'
import { cacheMember } from '../actions'
import { AppObject } from '../types'
export const useMember = ({ userid: id, forcePull = true }: { userid: string | number; forcePull?: boolean }) => {
  const members = useAppSelector((_state: RootState) => _state.cache.members)
  const [info, setInfo] = useState<AppObject.Member | undefined>(memberFromCache(id, members))
  const dispatch = useAppDispatch()
  useEffect(() => {
    const _info = memberFromCache(id, members, forcePull ? 5 * 1000 : CACHE_EXPIRE_TIME)
    if (_info !== undefined) {
      setInfo(_info)
    } else {
      dispatch(cacheMember(id) as any)
    }
  }, [id, info, members]) // eslint-disable-line react-hooks/exhaustive-deps
  return {
    member: info
  }
}
