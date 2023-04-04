/**
 * Created by Leon<silenceace@gmail.com> at 2022-02-23 21:38:16.
 * Last modified at 2022-04-19 20:02:26
 */

import { combineReducers } from 'redux'
import UIReducer from './UIReducer'
import AppReducer from './AppReducer'
import MemberReducer from './MemberReducer'
import TabReducer from './TabReducer'
import NotificationReducer from './NotificationReducer'
import SettingReducer from './SettingReducer'
import CacheReducer from './CacheReducer'
const reducers = combineReducers({
  ui: UIReducer,
  member: MemberReducer,
  app: AppReducer,
  tab: TabReducer,
  notification: NotificationReducer,
  setting: SettingReducer,
  cache: CacheReducer
})
export default reducers
