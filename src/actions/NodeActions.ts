/**
 * Created by Leon<silenceace@gmail.com> at 2022-02-22 19:58:57.
 * Last modified at 2022-10-20 17:37:56
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
