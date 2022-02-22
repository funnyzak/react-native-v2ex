/**
 * Created by leon<silenceace@gmail.com> on 22/2/22.
 */

import { MEMBER_PROFILE_GET, MEMBER_TOKEN_GET } from './types'

export const getProfile = () => async (dispatch: any) => {
  dispatch({
    type: MEMBER_PROFILE_GET,
    payload: {}
  })
}

export const getToken = () => async (dispatch: any) => {
  dispatch({
    type: MEMBER_TOKEN_GET,
    payload: {}
  })
}
