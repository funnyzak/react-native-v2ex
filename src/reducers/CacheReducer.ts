import {
  Action,
  APP_CACHE_ADD_MEMBER,
  APP_CACHE_ADD_NODE,
  APP_CACHE_MEMBER_FOLLOWING,
  APP_CACHE_MEMBER_INTEREST_NODES,
  APP_CACHE_MEMBER_LIKE_TOPICS,
  APP_CACHE_RESET,
  APP_CACHE_RESET_MEMBERS,
  APP_CACHE_RESET_NODES,
  APP_LOGOUT,
  IState,
  MEMBER_PROFILE
} from '../types'

const INITIAL_STATE: IState.CacheState = {
  members: [],
  nodes: [],
  membersFollowing: { 0: undefined },
  membersInterestNodes: { 0: undefined },
  membersLikeTopics: { 0: undefined }
}

export default (state: IState.CacheState = INITIAL_STATE, action: Action): IState.CacheState => {
  switch (action.type) {
    case MEMBER_PROFILE:
      return { ...state, currentSessionMember: action.payload }
    case APP_LOGOUT:
      return { ...state, currentSessionMember: undefined }
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
    case APP_CACHE_MEMBER_INTEREST_NODES:
      state.membersInterestNodes[state.currentSessionMember?.id ?? 0] = action.payload
      return { ...state }
    case APP_CACHE_MEMBER_LIKE_TOPICS:
      state.membersLikeTopics[state.currentSessionMember?.id ?? 0] = action.payload
      return { ...state }
    case APP_CACHE_MEMBER_FOLLOWING:
      state.membersFollowing[state.currentSessionMember?.id ?? 0] = action.payload
      return { ...state }
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
