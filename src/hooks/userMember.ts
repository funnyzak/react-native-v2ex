/**
 * Created by leon<silenceace@gmail.com> on 22/4/19.
 */
import { memberFromCache } from '@src/helper/cache'
import { RootState } from '@src/store'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '.'
import { cacheMember } from '../actions'
import { V2exObject } from '../types'

export const useMember = ({ userid }: { userid: number }) => {
  const members = useAppSelector((_state: RootState) => _state.cache.members)
  const [info, setInfo] = useState<V2exObject.Member | undefined>(memberFromCache(userid, members))

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (info === undefined) {
      const _info = memberFromCache(userid, members)
      if (_info === undefined) {
        dispatch(cacheMember(userid) as any)
      } else {
        setInfo(_info)
      }
    }
  }, [userid, info, members])

  return {
    member: info
  }
}
