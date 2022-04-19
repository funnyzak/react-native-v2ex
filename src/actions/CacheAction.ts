import { logError } from '@src/helper/logger'
import { v2exLib } from '@src/v2ex'
import { Dispatch } from 'redux'

import {
  APP_CACHE_ADD_MEMBER,
  APP_CACHE_ADD_NODE,
  APP_CACHE_RESET,
  APP_CACHE_RESET_MEMBERS,
  APP_CACHE_RESET_NODES
} from '../types'

export const addMember = (userid: string | number) => async (dispatch: Dispatch) => {
  try {
    const member = await v2exLib.member.profile(userid)
    dispatch({
      type: APP_CACHE_ADD_MEMBER,
      payload: member
    })
  } catch (e: any) {
    logError(e)
  }
}

export const addNode = (nodeid: string | number) => async (dispatch: Dispatch) => {
  try {
    const node = await v2exLib.node.get(nodeid, undefined)
    dispatch({
      type: APP_CACHE_ADD_NODE,
      payload: node
    })
  } catch (e: any) {
    logError(e)
  }
}

export const resetCache = (type: 'all' | 'nodes' | 'members') => ({
  type: type === 'nodes' ? APP_CACHE_RESET_NODES : type === 'members' ? APP_CACHE_RESET_MEMBERS : APP_CACHE_RESET
})
