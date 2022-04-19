/**
 * Created by leon<silenceace@gmail.com> on 22/4/19.
 */
import { nodeFromCache } from '@src/helper/cache'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '.'
import { cacheMember as cacheNode } from '../actions'
import { V2exObject } from '../types'
import { RootState } from '@src/store'

export const useNode = ({ nodeid: id }: { nodeid: number }) => {
  const nodes = useAppSelector((_state: RootState) => _state.cache.nodes)
  const [info, setInfo] = useState<V2exObject.Node | undefined>(nodeFromCache(id, nodes))

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (info === undefined) {
      const _info = nodeFromCache(id, nodes)
      if (_info === undefined) {
        dispatch(cacheNode(id) as any)
      } else {
        setInfo(_info)
      }
    }
  }, [id, info, nodes])

  return {
    member: info
  }
}
