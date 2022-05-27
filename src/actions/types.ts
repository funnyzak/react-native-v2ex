/**
 * Created by leon<silenceace@gmail.com> on 22/2/22.
 */

export const APP_INIT = 'v2ex_init'
export const APP_LATEST_VERSION = 'v2ex_latest_version'
export const APP_SITE_INFO = 'v2ex_site_info'
export const APP_ALL_NODE_INFO = 'v2ex_all_node_info'
export const APP_SITE_STAT = 'v2ex_site_stat'
export const APP_INIT_ERROR = 'v2ex_init_error'

export const APP_SETTING_LOCALES = 'v2ex_locales'
export const APP_SETTING_THEME = 'v2ex_theme'

export const APP_NOTIFICATION_PULL = 'notification_pull'
export const APP_NOTIFICATION_LATEST = 'notification'
export const APP_NOTIFICATION_REMOVE = 'notification_remove'

export const MEMBER_PROFILE = 'profile'

export const MEMBER_FOLLOW_PEOPLE = 'member_follow_people'
export const MEMBER_UNFOLLOW_PEOPLE = 'member_unfollow_people'

export const MEMBER_LIKE_TOPICS = 'member_like_topics'
export const MEMBER_UNLIKE_TOPICS = 'member_unlike_topics'

export const MEMBER_READ_TOPIC = 'read_topic'
export const MEMBER_TOPICS = 'member_topics'

export const MEMBER_INSEREST_NODE = 'member_interest_node'
export const MEMBER_UNINTEREST_NODE = 'member_uninterest_node'
export const MEMBER_SATE_SETTING = 'member_state_setting'

export const FEEDBACKING = 'feedbacking'
export const FEEDBACK_DONE = 'feedback_done'

export const TOPIC_GET = 'topic_get'
export const TOPIC_REPLIES = 'topic_replies'

export const APP_AUTH_LOADING = 'v2ex_auth_loading'
export const APP_AUTH = 'member_token'
export const APP_LOGOUT = 'v2ex_logout'
export const APP_AUTH_SUCCESS = 'v2ex_auth_success'
export const APP_AUTH_ERROR = 'v2ex_auth_error'
export const APP_AUTH_RESET = 'v2ex_auth_reset'

export const APP_NODE_LOAD_MORE_TOPICS = 'v2ex_node_load_more_topics'
export const APP_NODE_NODE_TOPICS = 'v2ex_node_node_topics'
export const APP_NODE_TOPICS_REFRESH = 'v2ex_node_loading'
export const APP_NODE_TOPICS_LOAD_SUCCESS = 'v2ex_node_success'
export const APP_NODE_LOAD_ERROR = 'v2ex_node_error'

export const APP_CACHE_ADD_MEMBER = 'v2ex_cache_add_member'
export const APP_CACHE_ADD_NODE = 'v2ex_cache_add_node'

export const APP_CACHE_MEMBER_INTEREST_NODES = 'v2ex_cache_member_interest_nodes'
export const APP_CACHE_MEMBER_FOLLOWING = 'v2ex_cache_member_following'
export const APP_CACHE_MEMBER_LIKE_TOPICS = 'v2ex_cache_member_like_topics'

export const APP_CACHE_RESET_MEMBERS = 'v2ex_cache_reset_member'
export const APP_CACHE_RESET_NODES = 'v2ex_cache_reset_node'
export const APP_CACHE_RESET = 'v2ex_cache_reset'

export const ActionTypes = {
  MEMBER_INSEREST_NODE,
  APP_CACHE_MEMBER_INTEREST_NODES,
  APP_CACHE_MEMBER_LIKE_TOPICS,
  MEMBER_UNINTEREST_NODE,
  APP_CACHE_MEMBER_FOLLOWING,
  MEMBER_TOPICS,
  MEMBER_SATE_SETTING,
  APP_CACHE_RESET,
  APP_CACHE_RESET_MEMBERS,
  APP_CACHE_RESET_NODES,
  APP_CACHE_ADD_MEMBER,
  APP_CACHE_ADD_NODE,
  APP_INIT,
  APP_NODE_LOAD_ERROR,
  APP_NODE_TOPICS_LOAD_SUCCESS,
  APP_NODE_TOPICS_REFRESH,
  APP_LATEST_VERSION,
  APP_SITE_INFO,
  MEMBER_READ_TOPIC,
  APP_ALL_NODE_INFO,
  APP_INIT_ERROR,
  APP_NODE_NODE_TOPICS,
  APP_NODE_LOAD_MORE_TOPICS,
  APP_NOTIFICATION_PULL,
  APP_SETTING_LOCALES,
  APP_NOTIFICATION_LATEST,
  APP_SETTING_THEME,
  APP_NOTIFICATION_REMOVE,
  MEMBER_PROFILE,
  APP_AUTH_LOADING,
  APP_AUTH_RESET,
  MEMBER_FOLLOW_PEOPLE,
  MEMBER_UNFOLLOW_PEOPLE,
  MEMBER_LIKE_TOPICS,
  MEMBER_UNLIKE_TOPICS,
  APP_AUTH,
  FEEDBACKING,
  TOPIC_GET,
  APP_SITE_STAT,
  TOPIC_REPLIES,
  FEEDBACK_DONE,
  APP_LOGOUT,
  APP_AUTH_SUCCESS,
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
