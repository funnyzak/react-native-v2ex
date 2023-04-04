/**
 * Created by Leon<silenceace@gmail.com> at 2022-04-19 20:43:45.
 * Last modified at 2022-10-20 18:07:33
 */

import { nodeFromCache } from '@src/helper/cache'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '.'
import { cacheNode } from '../actions'
import { AppObject } from '../types'
import { RootState } from '@src/store'
export const useNode = ({ nodeid: id }: { nodeid: number | string }) => {
  const nodes = useAppSelector((_state: RootState) => _state.cache.nodes)
  const [info, setInfo] = useState<AppObject.Node | undefined>(nodeFromCache(id, nodes))
  const dispatch = useAppDispatch()
  useEffect(() => {
    const _info = nodeFromCache(id, nodes)
    if (_info !== undefined) {
      setInfo(_info)
    } else {
      dispatch(cacheNode(id) as any)
    }
  }, [id, info, nodes]) // eslint-disable-line react-hooks/exhaustive-deps
  return {
    node: info
  }
}
