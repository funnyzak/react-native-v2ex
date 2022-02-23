/**
 * Created by leon<silenceace@gmail.com> on 22/2/22.
 */
export const V2EX_INIT = 'v2ex_init'
export const V2EX_INIT_ERROR = 'v2ex_init_error'
export const V2EX_STORE_CONFIG = 'v2ex_store_config'
export const V2EX_LOCALES = 'v2ex_locales'

export const NOTIFICATION_LIST_PULL = 'notification_pull'
export const NOTIFICATION_REMOVE = 'notification_pull'

export const MEMBER_PROFILE_GET = 'profile_get'
export const MEMBER_TOKEN_GET = 'token_get'

export const NODE_LIST_PULL = 'node_list_pull'
export const NODE_TOPIC_LIST_PULL = 'node_topic_list_pull'

export const TOPIC_GET = 'topic_get'
export const TOPIC_REPLIES_PULL = 'topic_replies_pull'

export const NAVIGATION_GO_TO_SCREEN = 'navigation_go_to_screen'

export const V2EX_AUTH = 'v2ex_auth'

export const V2EX_LOGOUT = 'v2ex_logout'

export const V2EX_LOGIN_SUCCESS = 'v2ex_login_success'
export const V2EX_AUTH_ERROR = 'v2ex_auth_error'

export const V2EX_CURRNET_TOKEN = 'v2ex_current_token'
export const V2EX_CURRNET_PROFILE = 'v2ex_current_profile'

export interface StoreAction {
  type: string
  payload: any
}

export * from './../reducers/types'

export * from './../v2ex/types'
