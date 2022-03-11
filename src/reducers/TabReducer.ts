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
    refreshing: false,
    hasMore: false,
    loadMore: false
  }))
}

export default (state: IState.TabsState = INITIAL_STATE, action: Action): IState.TabsState => {
  const nodeName = action.payload && action.payload.node
  let node = state.list.find((v) => v.nodeTab.name === nodeName)

  if (!node) return state

  switch (action.type) {
    case APP_NODE_NODE_TOPICS:
      node = { ...node, refreshing: false, success: '', error: '', list: action.payload.data }
      break
    case APP_NODE_LOAD_ERROR:
      node = {
        ...node,
        error: action.payload.data,
        success: '',
        list: [],
        refreshing: false,
        loadMore: false,
        hasMore: false
      }
      break
    case APP_NODE_LOAD_MORE_TOPICS:
      node = { ...node, error: '', success: '', refreshing: false, loadMore: true }
      break
    case APP_NODE_TOPICS_REFRESH:
      node = { ...node, error: '', success: '', list: undefined, refreshing: true, hasMore: false, loadMore: false }
      break
    case APP_NODE_TOPICS_LOAD_SUCCESS:
      let newNodeList = (node.refreshing || !node.list ? [] : node.list)
        .concat(action.payload.data)
        .filter((v) => v && v !== null)
      const hasMore =
        node.nodeTab.pager &&
        !(!action.payload.data || action.payload.data.length === null || action.payload.data.length === 0)
      node = {
        ...node,
        error: '',
        success: translate('tips.loadSuccess'),
        list: newNodeList,
        refreshing: false,
        loadMore: false,
        hasMore
      }
      break
    default:
      node = { ...node }
      break
  }

  state.list = state.list.filter((v) => v.nodeTab.name !== nodeName).concat([node])
  return { ...state }
}
