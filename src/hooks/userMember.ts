/**
 * Created by leon<silenceace@gmail.com> on 22/4/19.
 */
import { useEffect, useState } from 'react'
import { V2exObject, IState } from '../types'
import { cacheMember } from '../actions'
import { useAppSelector, useAppDispatch } from '.'
import { memberFromCache } from '@src/helper/cache'

export const useMember = ({ userid }: { userid: number }) => {
  const members = useAppSelector((_state: IState.State) => _state.cache.members)
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
