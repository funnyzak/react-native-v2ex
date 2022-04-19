/**
 * Created by leon<silenceace@gmail.com> on 22/2/24.
 */

/**
 * 缓存时间
 */
export const CACHE_EXPIRE_TIME = 1000 * 60 * 60 * 24 * 7 // 7 days

/**
 * 日期格式化规则
 */
export const DATE_FORMAT = 'DD/MM/YYYY'

/**
 * 用户授权缓存key
 */
export const MEMBER_TOKEN_KEY = 'memberToken'

/**
 * 特殊节点名称
 */
export const SPECIAL_NODE_NAME_MAP = {
  LATEST: 'latest',
  HOT: 'hot'
}

export const REPO_NAME = 'funnyzak/react-native-v2ex'
/**
 * 项目地址
 */
export const REPO_GITHUB_URL = `https://github.com/${REPO_NAME}`

/**
 * 帮助文档
 */
export const HELP_PAGE_LINK = 'https://yycc.dev/2022/03/17/react-native-v2ex/'

/**
 * 最新发布
 */
export const RELEASE_NOTES_LINK = `${REPO_GITHUB_URL}/releases`

declare type openSourceInfoType = {
  name: string
  repoUrl: string
}

/**
 * URLSchemes
 */
export const URLSchemeList = {
  OpenApp: 'v2hub://run'
}

/**
 * 使用开源列表
 */
export const OPENSOURCE_LIST: Array<openSourceInfoType> = [
  {
    name: 'lodash',
    repoUrl: 'https://github.com/lodash/lodash'
  },
  {
    name: 'redux',
    repoUrl: 'https://github.com/reduxjs/redux'
  },
  {
    name: 'react-native-render-html',
    repoUrl: 'https://github.com/meliorence/react-native-render-html'
  },
  {
    name: 'react-navigation',
    repoUrl: 'https://github.com/react-navigation/react-navigation'
  },
  {
    name: 'react-devtools',
    repoUrl: 'https://github.com/facebook/react-devtools'
  },
  {
    name: '@redux-devtools/extension',
    repoUrl: 'https://github.com/zalmoxisus/redux-devtools-extension'
  },
  {
    name: 'react-native-webview',
    repoUrl: 'https://github.com/react-native-webview/react-native-webview'
  },
  {
    name: 'async-storage',
    repoUrl: 'https://github.com/react-native-async-storage/async-storage'
  },
  {
    name: 'react-native-fast-image',
    repoUrl: 'https://github.com/DylanVann/react-native-fast-image'
  },
  {
    name: 'react-native-reanimated',
    repoUrl: 'https://github.com/software-mansion/react-native-reanimated'
  },
  {
    name: 'prettier',
    repoUrl: 'https://github.com/prettier/prettier'
  },
  {
    name: 'react-native-localize',
    repoUrl: 'https://github.com/zoontek/react-native-localize'
  },
  {
    name: 'react-native-device-info',
    repoUrl: 'https://github.com/react-native-device-info/react-native-device-info'
  },
  {
    name: 'react-native-skeleton-placeholder',
    repoUrl: 'https://github.com/chramos/react-native-skeleton-placeholder'
  }
]
