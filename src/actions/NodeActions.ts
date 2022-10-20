/**
 * Created by leon<silenceace@gmail.com> on 22/2/22.
 */

import { Dispatch } from 'redux'
import { ApiLib } from '@src/api'
import { APP_ALL_NODE_INFO } from './types'
import { logError } from '@src/helper/logger'

export const fetchAllNode = () => async (dispatch: Dispatch) => {
  try {
    const nodes = await ApiLib.node.all()

    dispatch({
      type: APP_ALL_NODE_INFO,
      payload: nodes
    })
  } catch (e) {
    logError(e)
  }
}
