/**
 * Created by leon<silenceace@gmail.com> on 22/2/22.
 */

export const APP_INIT = 'v2ex_init'
export const APP_LATEST_VERSION = 'v2ex_latest_version'
export const APP_SITE_INFO = 'v2ex_site_info'
export const APP_INIT_ERROR = 'v2ex_init_error'

export const SETTING_LOCALES = 'v2ex_locales'

export const NOTIFICATION_LATEST = 'notification'
export const NOTIFICATION_REMOVE = 'notification_remove'

export const MEMBER_PROFILE = 'profile'
export const MEMBER_FOLLOW_PEOPLE = 'follow_people'
export const MEMBER_LIKE_TOPICS = 'like_topics'
export const MEMBER_TOKEN = 'member_token'

export const NODE_PULL = 'node'
export const NODE_TOPICS = 'node_topic_list'

export const FEEDBACK = 'feedback'

export const TOPIC_GET = 'topic_get'
export const TOPIC_REPLIES = 'topic_replies'

export const APP_AUTH = 'v2ex_auth'
export const APP_LOGOUT = 'v2ex_logout'
export const APP_LOGIN_SUCCESS = 'v2ex_login_success'
export const APP_AUTH_ERROR = 'v2ex_auth_error'

export const ActionTypes = {
  APP_INIT,
  APP_LATEST_VERSION,
  APP_SITE_INFO,
  APP_INIT_ERROR,
  SETTING_LOCALES,
  NOTIFICATION_LIST_PULL: NOTIFICATION_LATEST,
  NOTIFICATION_REMOVE,
  MEMBER_PROFILE_PULL: MEMBER_PROFILE,
  MEMBER_FOLLOW_PEOPLE_PULL: MEMBER_FOLLOW_PEOPLE,
  MEMBER_LIKE_TOPICS_PULL: MEMBER_LIKE_TOPICS,
  MEMBER_TOKEN_REFRESHING: MEMBER_TOKEN,
  NODE_PULL,
  NODE_TOPIC_LIST_PULL: NODE_TOPICS,
  FEEDBACK,
  TOPIC_GET,
  TOPIC_REPLIES_PULL: TOPIC_REPLIES,
  APP_AUTH,
  APP_LOGOUT,
  APP_LOGIN_SUCCESS,
  APP_AUTH_ERROR
}

// see https://stackoverflow.com/questions/52393730/typescript-string-literal-union-type-from-enum
export type ActionTypes = typeof ActionTypes[keyof typeof ActionTypes]

/**
 * @description Action Entity
 */
export interface Action {
  type: ActionTypes
  payload: any
}
