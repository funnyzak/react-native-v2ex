import _ from 'lodash'
import { APP_AUTH, FEEDBACKING, FEEDBACK_DONE, Action, IState } from '@types'

const INITIAL_STATE: IState.UIState = {
  login: {
    tokenGeneratedLink: 'https://v2ex.com/settings/tokens'
  },
  feedback: {
    processing: false
  }
}

export default (state: IState.UIState, action: Action): IState.UIState => {
  switch (action.type) {
    case APP_AUTH:
      return _.merge(INITIAL_STATE, state, { token: action.payload })
    case FEEDBACKING:
      return _.merge(INITIAL_STATE, state, { feedback: { processing: true } })
    case FEEDBACK_DONE:
      return _.merge(INITIAL_STATE, state, { feedback: { processing: false, message: undefined } })
    default:
      return state
  }
}
