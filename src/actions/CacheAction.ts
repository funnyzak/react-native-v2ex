/**
 * Created by leon<silenceace@gmail.com> on 22/4/19.
 */
import { logError } from '@src/helper/logger'
import { AppDispatch } from '@src/store'
import { v2exLib } from '@src/v2ex'

import {
  APP_CACHE_ADD_MEMBER,
  APP_CACHE_ADD_NODE,
  APP_CACHE_MEMBER_FOLLOWING,
  APP_CACHE_MEMBER_INTEREST_NODES,
  APP_CACHE_MEMBER_LIKE_TOPICS,
  APP_CACHE_RESET,
  APP_CACHE_RESET_MEMBERS,
  APP_CACHE_RESET_NODES,
  V2exObject
} from '../types'

export const cacheMember = (userid: string | number) => async (dispatch: AppDispatch) => {
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

export const cacheNode = (nodeid: string | number) => async (dispatch: AppDispatch) => {
  try {
    const node = await v2exLib.node.get(nodeid, undefined)
    return dispatch({
      type: APP_CACHE_ADD_NODE,
      payload: node
    })
  } catch (e: any) {
    logError(e)
  }
}

export const cacheMemberFollowing = (members: V2exObject.Member[] | undefined) => ({
  type: APP_CACHE_MEMBER_FOLLOWING,
  payload: members
})

export const cacheMemberInterestNodes = (nodes: V2exObject.Node[] | undefined) => ({
  type: APP_CACHE_MEMBER_INTEREST_NODES,
  payload: nodes
})

export const cacheMemberLikeTopicss = (topics: V2exObject.Topic[] | undefined) => ({
  type: APP_CACHE_MEMBER_LIKE_TOPICS,
  payload: topics
})

export const resetCache = (type: 'all' | 'nodes' | 'members') => ({
  type: type === 'nodes' ? APP_CACHE_RESET_NODES : type === 'members' ? APP_CACHE_RESET_MEMBERS : APP_CACHE_RESET
})
