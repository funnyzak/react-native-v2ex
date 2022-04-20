/**
 * Created by leon<silenceace@gmail.com> on 22/4/19.
 */
import { nodeFromCache } from '@src/helper/cache'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '.'
import { cacheNode } from '../actions'
import { V2exObject } from '../types'
import { RootState } from '@src/store'

export const useNode = ({ nodeid: id }: { nodeid: number | string }) => {
  const nodes = useAppSelector((_state: RootState) => _state.cache.nodes)
  const [info, setInfo] = useState<V2exObject.Node | undefined>(nodeFromCache(id, nodes))

  const dispatch = useAppDispatch()

  useEffect(() => {
    const _info = nodeFromCache(id, nodes)

    if (_info !== undefined) {
      setInfo(_info)
    } else {
      dispatch(cacheNode(id) as any)
    }
  }, [id, info, nodes])

  return {
    node: info
  }
}
