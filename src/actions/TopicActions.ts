/**
 * Created by leon<silenceace@gmail.com> on 22/2/22.
 */

import { Dispatch } from 'redux'
import { v2exLib } from '@src/v2ex'
import { logError } from '@src/helper/logger'

import {
  TOPIC_GET,
  TOPIC_REPLIES,
  APP_HOME_ERROR,
  APP_HOME_REFRESH,
  APP_HOME_LOAD_MORE_TOPICS,
  APP_HOME_SWITCH_NODE,
  APP_HOME_SUCCESS,
  V2exObject
} from '@src/types'
import { NODE_TAB_TYPE } from '@src/navigation'
import { SPECIAL_NODE_NAME_MAP } from '@src/config/constants'

export const switchHomeTab = (tab: NODE_TAB_TYPE) => {
  return async (dispath: Dispatch) => {
    dispath({ type: APP_HOME_SWITCH_NODE, payload: tab })
    dispath(getHomeTopics(tab.name, 1) as any)
  }
}

/**
 * 获取首页主题列表
 * @param nodeName 节点name
 * @param page 获取页数
 * @returns
 */
export const getHomeTopics =
  (nodeName: string, page: number = 1) =>
  async (dispatch: Dispatch) => {
    const specialNode = Object.values(SPECIAL_NODE_NAME_MAP).includes(nodeName)
    const refreshing = page === 1 || specialNode
    const loadmore = !refreshing && page > 1

    if (refreshing) {
      dispatch({
        type: APP_HOME_REFRESH,
        payload: {}
      })
    } else if (loadmore) {
      dispatch({
        type: APP_HOME_LOAD_MORE_TOPICS,
        payload: {}
      })
    }

    try {
      let _topics: V2exObject.Topic[] = []
      if (specialNode) {
        if (nodeName === SPECIAL_NODE_NAME_MAP.HOT) {
          _topics = await v2exLib.topic.hotTopics()
        } else if (nodeName === SPECIAL_NODE_NAME_MAP.LATEST) {
          _topics = await v2exLib.topic.latestTopics()
        }
      } else {
        _topics = await v2exLib.topic.topicsByNode(nodeName, page)
      }

      dispatch({
        type: APP_HOME_SUCCESS,
        payload: _topics
      })
    } catch (error) {
      logError(error)
      dispatch({
        type: APP_HOME_ERROR,
        payload: error
      })
    }
  }

export const topicGet = (topicId: string) => async (dispatch: Dispatch) => {
  dispatch({
    type: TOPIC_GET,
    payload: {}
  })
}

export const topicReplies = (topicId: string, pager: number) => async (dispatch: Dispatch) => {
  dispatch({
    type: TOPIC_REPLIES,
    payload: {}
  })
}
