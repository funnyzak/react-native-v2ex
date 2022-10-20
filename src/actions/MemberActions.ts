/**
 * Created by leon<silenceace@gmail.com> on 22/2/22.
 */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEMBER_TOKEN_KEY } from '@src/config/constants'
import { logError } from '@src/helper/logger'
import NavigationService from '@src/navigation/NavigationService'
import { RootState } from '@src/store'
import { v2exLib } from '@src/api'
import { Dispatch } from 'redux'
import {
  APP_AUTH,
  APP_AUTH_ERROR,
  APP_AUTH_LOADING,
  APP_AUTH_SUCCESS,
  APP_LOGOUT,
  MEMBER_INSEREST_NODE,
  MEMBER_PROFILE,
  MEMBER_SATE_SETTING,
  MEMBER_TOPICS,
  MEMBER_UNINTEREST_NODE,
  MEMBER_FOLLOW_PEOPLE,
  MEMBER_UNFOLLOW_PEOPLE,
  MEMBER_LIKE_TOPICS,
  MEMBER_UNLIKE_TOPICS,
  APPDataObject
} from '../types'
import { cacheMemberFollowing, cacheMemberInterestNodes, cacheMemberLikeTopicss } from './CacheAction'

export const myProfile = () => async (dispatch: Dispatch, getState: () => RootState) => {
  const _member = await v2exLib.member.myProfile()

  dispatch({
    type: MEMBER_PROFILE,
    payload: _member
  })

  dispatch({
    type: MEMBER_SATE_SETTING,
    payload: {
      interestNodes: getState().cache.membersInterestNodes[_member.id],
      followPeoples: getState().cache.membersFollowing[_member.id],
      likeTopics: getState().cache.membersLikeTopics[_member.id]
    }
  })
}

export const getToken = () => async (dispatch: Dispatch) => {
  dispatch({
    type: APP_AUTH_SUCCESS,
    payload: {}
  })
}

export const setMyTopics = (topics: APPDataObject.Topic[]) => ({
  type: MEMBER_TOPICS,
  payload: topics
})

export const interestNode = (node: APPDataObject.Node) => async (dispatch: Dispatch, getState: () => RootState) => {
  dispatch({
    type: MEMBER_INSEREST_NODE,
    payload: node
  })
  dispatch(cacheMemberInterestNodes(getState().member.interestNodes))
}

export const unInterestNode = (node: APPDataObject.Node) => async (dispatch: Dispatch, getState: () => RootState) => {
  dispatch({
    type: MEMBER_UNINTEREST_NODE,
    payload: node
  })
  dispatch(cacheMemberInterestNodes(getState().member.interestNodes))
}

export const likeTopic = (topic: APPDataObject.Topic) => async (dispatch: Dispatch, getState: () => RootState) => {
  dispatch({
    type: MEMBER_LIKE_TOPICS,
    payload: topic
  })
  dispatch(cacheMemberLikeTopicss(getState().member.likeTopics))
}

export const unLikeTopic = (topic: APPDataObject.Topic) => async (dispatch: Dispatch, getState: () => RootState) => {
  dispatch({
    type: MEMBER_UNLIKE_TOPICS,
    payload: topic
  })
  dispatch(cacheMemberLikeTopicss(getState().member.likeTopics))
}

export const followPeople = (member: APPDataObject.Member) => async (dispatch: Dispatch, getState: () => RootState) => {
  dispatch({
    type: MEMBER_FOLLOW_PEOPLE,
    payload: member
  })
  dispatch(cacheMemberFollowing(getState().member.followPeoples))
}

export const unFollowPeople =
  (member: APPDataObject.Member) => async (dispatch: Dispatch, getState: () => RootState) => {
    dispatch({
      type: MEMBER_UNFOLLOW_PEOPLE,
      payload: member
    })
    dispatch(cacheMemberFollowing(getState().member.followPeoples))
  }

export const setCurrentToken = (token?: APPDataObject.MToken) => ({
  type: APP_AUTH,
  payload: token
})

export const loginByToken = (token: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: APP_AUTH_LOADING })
    const token_info = await v2exLib.member.token(token)
    dispatch(loginByTokenSuccess(token_info) as any)
  } catch (e: any) {
    logError(e)
    loginByTokenFail(dispatch, e.message)
  }
}

const loginByTokenSuccess = (token: APPDataObject.MToken) => async (dispatch: Dispatch, getState: () => RootState) => {
  await AsyncStorage.setItem(MEMBER_TOKEN_KEY, token.token)

  v2exLib.setToken(token.token)

  dispatch(setCurrentToken(token))

  dispatch({ type: APP_AUTH_SUCCESS, payload: token })

  dispatch(myProfile() as any)
}

const loginByTokenFail = (dispatch: Dispatch, message: string) => {
  AsyncStorage.removeItem(MEMBER_TOKEN_KEY)

  dispatch(errorMessage(message))
}
export const errorMessage = (error: string) => ({
  type: APP_AUTH_ERROR,
  payload: error
})

export const logout = () => (dispatch: Dispatch) => {
  AsyncStorage.setItem(MEMBER_TOKEN_KEY, '')
  v2exLib.setToken(undefined)
  dispatch({ type: APP_LOGOUT })

  NavigationService.navigate('SignIn')
}
