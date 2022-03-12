/**
 * Created by leon<silenceace@gmail.com> on 22/2/22.
 */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Dispatch } from 'redux'
import {
  MEMBER_PROFILE,
  APP_AUTH,
  APP_AUTH_LOADING,
  APP_LOGOUT,
  APP_AUTH_ERROR,
  APP_AUTH_SUCCESS,
  V2exObject
} from '../types'
import { v2exLib } from '@src/v2ex'
import { logError } from '@src/helper/logger'
import NavigationService from '@src/navigation/NavigationService'
import { MEMBER_TOKEN_KEY } from '@src/config/constants'

export const myProfile = () => async (dispatch: Dispatch) => {
  const _member = await v2exLib.member.myProfile()

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

export const loginByToken = (token: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: APP_AUTH_LOADING })
    const token_info = await v2exLib.member.token(token)
    loginByTokenSuccess(dispatch, token_info)
  } catch (e: any) {
    logError(e)
    loginByTokenFail(dispatch, e.message)
  }
}

const loginByTokenSuccess = async (dispatch: Dispatch, token: V2exObject.MToken) => {
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
