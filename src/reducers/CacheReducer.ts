import {
  Action,
  APP_CACHE_ADD_MEMBER,
  APP_CACHE_ADD_NODE,
  APP_CACHE_RESET,
  APP_CACHE_RESET_MEMBERS,
  APP_CACHE_RESET_NODES,
  IState
} from '../types'

const INITIAL_STATE: IState.CacheState = {
  members: [],
  nodes: []
}

export default (state: IState.CacheState = INITIAL_STATE, action: Action): IState.CacheState => {
  switch (action.type) {
    case APP_CACHE_ADD_MEMBER:
      const members = state.members
        .filter((v) => v.info.id !== action.payload.id)
        .concat([{ pullTime: new Date().getTime(), info: action.payload }])
      return { ...state, members }
    case APP_CACHE_ADD_NODE:
      const nodes = state.nodes
        .filter((v) => v.info.name !== action.payload.name)
        .concat([{ pullTime: new Date().getTime(), info: action.payload }])
      return { ...state, nodes }
    case APP_CACHE_RESET_MEMBERS:
      return { ...state, members: [] }
    case APP_CACHE_RESET_NODES:
      return { ...state, nodes: [] }
    case APP_CACHE_RESET:
      return { ...INITIAL_STATE }
    default:
      return state
  }
}
