/**
 * Created by leon<silenceace@gmail.com> on 22/2/22.
 */
import { NODE_PULL, NODE_TOPICS } from '@types'

export const nodeList = () => async (dispatch: any) => {
  dispatch({
    type: NODE_PULL,
    payload: {}
  })
}

export const nodeTopicList = () => async (dispatch: any) => {
  dispatch({
    type: NODE_TOPICS,
    payload: {}
  })
}
