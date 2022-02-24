/**
 * Created by leon<silenceace@gmail.com> on 22/2/22.
 */
import { Dispatch } from 'redux'
import { MEMBER_PROFILE_GET, MEMBER_TOKEN_GET, V2EX_CURRNET_TOKEN, V2exObject } from './types'

export const getProfile = () => async (dispatch: Dispatch) => {
  dispatch({
    type: MEMBER_PROFILE_GET,
    payload: {}
  })
}

export const getToken = () => async (dispatch: Dispatch) => {
  dispatch({
    type: MEMBER_TOKEN_GET,
    payload: {}
  })
}

export const setCurrentToken = (token?: V2exObject.MToken) => ({
  type: V2EX_CURRNET_TOKEN,
  payload: token
})
