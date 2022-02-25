/**
 * Created by leon<silenceace@gmail.com> on 22/2/22.
 */
import { NODE, NODE_TOPICS } from '@types'

export const nodeList = () => async (dispatch: any) => {
  dispatch({
    type: NODE,
    payload: {}
  })
}

export const nodeTopicList = () => async (dispatch: any) => {
  dispatch({
    type: NODE_TOPICS,
    payload: {}
  })
}
