/**
 * Created by leon<silenceace@gmail.com> on 22/2/22.
 */
import { NODE_LIST_PULL, NODE_TOPIC_LIST_PULL } from './types'

export const nodeList = () => async (dispatch: any) => {
  dispatch({
    type: NODE_LIST_PULL,
    payload: {}
  })
}

export const nodeTopicList = () => async (dispatch: any) => {
  dispatch({
    type: NODE_TOPIC_LIST_PULL,
    payload: {}
  })
}
