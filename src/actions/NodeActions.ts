/**
 * Created by leon<silenceace@gmail.com> on 22/2/22.
 */

import { Dispatch } from 'redux'
import { v2exLib } from '@src/v2ex'
import { APP_ALL_NODE_INFO } from './types'
import { logError } from '@src/helper/logger'

export const fetchAllNode = () => async (dispatch: Dispatch) => {
  try {
    const nodes = await v2exLib.node.all()

    dispatch({
      type: APP_ALL_NODE_INFO,
      payload: nodes
    })
  } catch (e) {
    logError(e)
  }
}
