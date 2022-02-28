import { APP_HOME_SWITCH_NODE, APP_HOME_NODE_TOPICS, APP_HOME_LOAD_MORE_TOPICS, Action, IState } from '../types'
import { HOME_NODES } from '@src/navigation/tabs'

const INITIAL_STATE: IState.HomeState = {
  nodes: HOME_NODES,
  currentNode: HOME_NODES[0]
}

export default (state: IState.HomeState = INITIAL_STATE, action: Action): IState.HomeState => {
  switch (action.type) {
    case APP_HOME_SWITCH_NODE:
      return { ...state, currentNode: { ...action.payload, loadmore: false, refreshing: true } }
    case APP_HOME_LOAD_MORE_TOPICS:
      return { ...state, currentNode: { ...action.payload, loadmore: true, refreshing: false } }
    case APP_HOME_NODE_TOPICS:
      return { ...state, currentNode: { ...action.payload, loadmore: false, refreshing: false } }
    default:
      return state
  }
}
