import { Dispatch } from 'redux'
import _ from 'lodash'
import { v2exLib } from '@src/v2ex'
import { v2exOptions } from '@src/config/v2ex'
import { APP_INIT, APP_INIT_ERROR, IState } from '@types'
import { logError } from '@src/helper/logger'

export const initV2ex = () => {
  v2exLib.setOptions(v2exOptions)

  return async (dispatch: Dispatch, _getState: () => IState.AppState) => {
    try {
      v2exLib.init()
      dispatch({ type: APP_INIT, payload: v2exLib })
    } catch (error: any) {
      logError(error)
      dispatch({
        type: APP_INIT_ERROR,
        payload: { errorMessage: error.message }
      })
    }
  }
}
