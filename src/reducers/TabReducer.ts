import {
  APP_NODE_NODE_TOPICS,
  APP_NODE_LOAD_ERROR,
  APP_NODE_LOAD_MORE_TOPICS,
  APP_NODE_TOPICS_REFRESH,
  APP_NODE_TOPICS_LOAD_SUCCESS,
  Action,
  IState
} from '../types'
import { HOME_NODES } from '@src/navigation/tabs'
import { translate } from '@src/i18n'

const INITIAL_STATE: IState.TabsState = {
  list: HOME_NODES.map((node) => ({
    error: null,
    success: null,
    nodeTab: node,
    refreshing: false
  }))
}

export default (state: IState.TabsState = INITIAL_STATE, action: Action): IState.TabsState => {
  const nodeName = action.payload && action.payload.node
  let node = state.list.find((v) => v.nodeTab.name === nodeName)

  if (!node) return state

  switch (action.type) {
    case APP_NODE_NODE_TOPICS:
      node = { ...node, refreshing: false, success: '', error: '', list: action.payload.data }
    case APP_NODE_LOAD_ERROR:
      node = { ...node, error: action.payload.data, success: '', refreshing: false }
    case APP_NODE_LOAD_MORE_TOPICS:
      node = { ...node, error: '', success: '', refreshing: true }
    case APP_NODE_TOPICS_REFRESH:
      node = { ...node, error: '', success: '', list: undefined, refreshing: true }
    case APP_NODE_TOPICS_LOAD_SUCCESS:
      node = {
        ...node,
        error: '',
        success: translate('tips.loadSuccess'),
        list: (!node.list || node.list === null ? [] : node.list).concat(action.payload.data),
        refreshing: false
      }
    default:
      node = { ...node }
  }

  state.list = state.list.filter((v) => v.nodeTab.name !== nodeName).concat([node])
  return { ...state }
}
