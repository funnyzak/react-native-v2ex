import { Action, IState, APP_AUTH, MEMBER_PROFILE, APP_LOGOUT, MEMBER_READ_TOPIC } from '../types'
const INITIAL_STATE: IState.MemberState = {
  refreshing: false
}

export default (state: IState.MemberState = INITIAL_STATE, action: Action): IState.MemberState => {
  switch (action.type) {
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
