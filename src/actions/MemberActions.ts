/**
 * Created by leon<silenceace@gmail.com> on 22/2/22.
 */
import { Dispatch } from 'redux'
import { MEMBER_PROFILE, MEMBER_TOKEN, V2exObject } from '../types'

export const getProfile = () => async (dispatch: Dispatch) => {
  dispatch({
    type: MEMBER_PROFILE,
    payload: {}
  })
}

export const getToken = () => async (dispatch: Dispatch) => {
  dispatch({
    type: MEMBER_TOKEN,
    payload: {}
  })
}

export const setCurrentToken = (token?: V2exObject.MToken) => ({
  type: MEMBER_TOKEN,
  payload: token
})
