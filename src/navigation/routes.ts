/**
 * Created by leon<silenceace@gmail.com> on 22/2/24.
 */

export const NAVIGATION_HOME_PATH = 'home'

export const NAVIGATION_LATEST_PATH = 'latest_topics'
export const NAVIGATION_HOT_PATH = 'hot_topics'

export const NAVIGATION_SIGNIN_PATH = 'sign_in'

export const NAVIGATION_NOTIFICATION_PATH = 'notifications'

export const NAVIGATION_NODE_LIST_PATH = 'node_list'
export const NAVIGATION_NODE_TOPICS_PATH = 'node_topics'

export const NAVIGATION_TOPIC_PATH = 'topic_detail'

export const NAVIGATION_ACCOUNT_HOME_PATH = 'account_home'
export const NAVIGATION_FOLLOW_PEOPLE_PATH = 'follow_people'
export const NAVIGATION_LIKE_TOPICS_PATH = 'like_topics'
export const NAVIGATION_AUTH_LOADING_SWITCH = 'navigation_auth_loading_switch'

export const NAVIGATION_SETTING_PATH = 'setting_home'
export const NAVIGATION_LANGUAGE_PATH = 'language_setting'
export const NAVIGATION_ABOUT_PATH = 'about_us'
export const NAVIGATION_FEEDBACK_PATH = 'feedback_and_suggestion'
export const NAVIGATION_THEME_PATH = 'theme_setting'

export const NAVIGATION_SEARCH_PATH = 'search'

export const ROUTES = {
  NAVIGATION_HOME_PATH,
  NAVIGATION_LATEST_PATH,
  NAVIGATION_HOT_PATH,
  NAVIGATION_SIGNIN_PATH,
  NAVIGATION_NOTIFICATION_PATH,
  NAVIGATION_NODE_LIST_PATH,
  NAVIGATION_NODE_TOPICS_PATH,
  NAVIGATION_TOPIC_PATH,
  NAVIGATION_ACCOUNT_HOME_PATH,
  NAVIGATION_FOLLOW_PEOPLE_PATH,
  NAVIGATION_LIKE_TOPICS_PATH,
  NAVIGATION_AUTH_LOADING_SWITCH,
  NAVIGATION_SETTING_PATH,
  NAVIGATION_LANGUAGE_PATH,
  NAVIGATION_ABOUT_PATH,
  NAVIGATION_FEEDBACK_PATH,
  NAVIGATION_THEME_PATH,
  NAVIGATION_SEARCH_PATH
} as const

// see https://stackoverflow.com/questions/52393730/typescript-string-literal-union-type-from-enum
export type ROUTES = typeof ROUTES[keyof typeof ROUTES]
