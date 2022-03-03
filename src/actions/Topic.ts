/**
 * Created by leon<silenceace@gmail.com> on 22/2/22.
 */

import { TOPIC_GET, TOPIC_REPLIES } from './types'

export const topicGet = () => async (dispatch: any) => {
  dispatch({
    type: TOPIC_GET,
    payload: {}
  })
}

export const topicReplies = () => async (dispatch: any) => {
  dispatch({
    type: TOPIC_REPLIES,
    payload: {}
  })
}
