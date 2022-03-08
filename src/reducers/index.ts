import { combineReducers } from 'redux'
import UIReducer from './UIReducer'
import AppReducer from './AppReducer'
import MemberReducer from './MemberReducer'
import TabReducer from './TabReducer'
import NotificationReducer from './NotificationReducer'
import SettingReducer from './SettingReducer'

const reducers = combineReducers({
  ui: UIReducer,
  member: MemberReducer,
  app: AppReducer,
  tab: TabReducer,
  notification: NotificationReducer,
  setting: SettingReducer
})

export default reducers
