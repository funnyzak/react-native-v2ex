import { Dispatch } from 'redux'

import {
  APP_CACHE_ADD_MEMBER,
  APP_CACHE_ADD_NODE,
  APP_CACHE_RESET,
  APP_CACHE_RESET_MEMBERS,
  APP_CACHE_RESET_NODES
} from '../types'

export const resetCache = (type: 'all' | 'nodes' | 'members') => ({
  type: type === 'nodes' ? APP_CACHE_RESET_NODES : type === 'members' ? APP_CACHE_RESET_MEMBERS : APP_CACHE_RESET
})
