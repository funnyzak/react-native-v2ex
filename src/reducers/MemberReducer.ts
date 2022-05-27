import InterestNodes from '@src/screens/node/InterestNodes'
import {
  Action,
  IState,
  APP_AUTH,
  MEMBER_PROFILE,
  APP_LOGOUT,
  MEMBER_READ_TOPIC,
  MEMBER_TOPICS,
  MEMBER_INSEREST_NODE,
  MEMBER_UNINTEREST_NODE,
  MEMBER_SATE_SETTING
} from '../types'
const INITIAL_STATE: IState.MemberState = {
  refreshing: false,
  interestNodes: []
}

export default (state: IState.MemberState = INITIAL_STATE, action: Action): IState.MemberState => {
  switch (action.type) {
    case MEMBER_INSEREST_NODE:
      return {
        ...state,
        interestNodes: state.interestNodes.concat(
          state.interestNodes && state.interestNodes.findIndex((v) => v.id === action.payload.id) >= 0
            ? []
            : action.payload
        )
      }
    case MEMBER_UNINTEREST_NODE:
      return {
        ...state,
        interestNodes: state.interestNodes.filter((v) => v.id !== action.payload.id)
      }
    case MEMBER_SATE_SETTING:
      return { ...state, ...action.payload }
    case MEMBER_TOPICS:
      return { ...state, topics: action.payload }
    case APP_AUTH:
      return { ...state, token: action.payload }
    case APP_LOGOUT:
      return { ...INITIAL_STATE }
    case MEMBER_PROFILE:
      return { ...state, profile: action.payload }
    case MEMBER_READ_TOPIC:
      const readed_topics = (state.readedTopics ?? []).find((t) => t.id === action.payload.id)
        ? state.readedTopics
        : [action.payload].concat(state.readedTopics || [])
      return { ...state, readedTopics: readed_topics }
    default:
      return state
  }
}
