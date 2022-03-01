/**
 * Created by leon<silenceace@gmail.com> on 22/2/22.
 */
import AsyncStorage from '@react-native-community/async-storage'
import { Dispatch } from 'redux'
import { MEMBER_PROFILE, APP_AUTH, APP_AUTH_LOADING, APP_LOGOUT, APP_AUTH_ERROR, APP_AUTH_SUCCESS, V2exObject } from '../types'
import { v2exLib } from '@src/v2ex'
import { logError } from '@src/helper/logger'
import NavigationService from '@src/navigation/NavigationService'

export const myProfile = () => async (dispatch: Dispatch) => {
  const _member = await v2exLib.member.mime()

  dispatch({
    type: MEMBER_PROFILE,
    payload: _member
  })
}

export const getToken = () => async (dispatch: Dispatch) => {
  dispatch({
    type: APP_AUTH_SUCCESS,
    payload: {}
  })
}

export const setCurrentToken = (token?: V2exObject.MToken) => ({
  type: APP_AUTH,
  payload: token
})

export const tokenSync = (token?: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: APP_AUTH_LOADING })

    v2exLib.setToken(token)
    const _token = await v2exLib.member.token()

    tokenSyncSuccess(dispatch, _token)
  } catch (e: any) {
    logError(e)
    tokenSyncFail(dispatch, e.message)
  }
}

const tokenSyncFail = (dispatch: Dispatch, message: string) => {
  dispatch(errorMessage(message))
}

const tokenSyncSuccess = async (dispatch: Dispatch, token: V2exObject.MToken) => {
  await AsyncStorage.setItem('memberToken', token.token)

  dispatch(setCurrentToken(token))

  dispatch({ type: APP_AUTH_SUCCESS, payload: token.token })

  dispatch(myProfile() as any)
}

export const errorMessage = (error: string) => ({
  type: APP_AUTH_ERROR,
  payload: error
})

export const logout = () => (dispatch: Dispatch) => {
  dispatch({ type: APP_LOGOUT })
  NavigationService.navigate('SignIn')
  AsyncStorage.setItem('memberToken', '')
  v2exLib.setToken(undefined)
}
