import { combineReducers } from 'redux'
import UIReducer from './UIReducer'
import V2exReducer from './V2exReducer'
import MemberReducer from './MemberReducer'

const reducers = combineReducers({
  ui: UIReducer,
  memer: MemberReducer,
  v2ex: V2exReducer
})

export default reducers
