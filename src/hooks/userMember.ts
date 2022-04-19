/**
 * Created by leon<silenceace@gmail.com> on 22/4/19.
 */
import { memberFromCache } from '@src/helper/cache'
import { RootState } from '@src/store'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '.'
import { cacheMember } from '../actions'
import { V2exObject } from '../types'

export const useMember = ({ userid: id }: { userid: number }) => {
  const members = useAppSelector((_state: RootState) => _state.cache.members)
  const [info, setInfo] = useState<V2exObject.Member | undefined>(memberFromCache(id, members))

  const dispatch = useAppDispatch()

  useEffect(() => {
    const _info = memberFromCache(id, members)

    if (_info !== undefined) {
      setInfo(_info)
    } else {
      dispatch(cacheMember(id) as any)
    }
  }, [id, info, members])

  return {
    member: info
  }
}
