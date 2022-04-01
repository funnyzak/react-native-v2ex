/**
 * Created by leon<silenceace@gmail.com> on 22/2/24.
 */

import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ITheme } from '@src/types'

export type RootStackParamList = {
  Draw: undefined
  Main: {
    initialRouteName: string
  }
  HomeTabs: undefined
  Nodes: undefined
  Notifications: undefined
  My: undefined
  SignIn: undefined
  NodeTopics: { nodeName: string; nodeTitle: string }
  TopicDetail: { topicId: number }
  Profile: { username: string }
  Following: undefined
  FavoriteTopics: undefined
  Setting: undefined
  Language: undefined
  About: undefined
  Feedback: undefined
  ThemeSetting: undefined
  Search: { query: string }
  History: undefined
  WebViewer: { url: string; title?: string }

  SiteStat: undefined
  InterestNodes: undefined
  NodeDetail: { nodeName: string; nodeTitle: string }
  MyTopics: undefined
  CacheSetting: undefined
  URLSchemes: undefined
  OpenSourceLicense: undefined
  PrivacyPolicy: undefined
  ChangeLog: undefined
  HowToUse: undefined
}

export type CommonScreenProps = {
  loading: boolean
  error: string | null
  success: string | null
  theme: ITheme
}

export type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'Main'> & CommonScreenProps

export type HistoryScreenProps = NativeStackScreenProps<RootStackParamList, 'History'> & CommonScreenProps

export type HomeTabsScreenProps = NativeStackScreenProps<RootStackParamList, 'HomeTabs'> & CommonScreenProps

export type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'> &
  CommonScreenProps & {
    auth: (token: string) => void
  }

export type NotificationsScreenProps = NativeStackScreenProps<RootStackParamList, 'Notifications'> & CommonScreenProps

export type NodesScreenProps = NativeStackScreenProps<RootStackParamList, 'Nodes'> & CommonScreenProps

export type NodeTopicsScreenProps = NativeStackScreenProps<RootStackParamList, 'NodeTopics'> & CommonScreenProps

export type TopicDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'TopicDetail'> & CommonScreenProps

export type MyScreenProps = NativeStackScreenProps<RootStackParamList, 'My'> & CommonScreenProps

export type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'> & CommonScreenProps

export type FollowingScreenProps = NativeStackScreenProps<RootStackParamList, 'Following'> & CommonScreenProps

export type FavoriteTopicsScreenProps = NativeStackScreenProps<RootStackParamList, 'FavoriteTopics'> & CommonScreenProps

export type SettingScreenProps = NativeStackScreenProps<RootStackParamList, 'Setting'> & CommonScreenProps

export type LanguageScreenProps = NativeStackScreenProps<RootStackParamList, 'Language'> & CommonScreenProps

export type AboutScreenProps = NativeStackScreenProps<RootStackParamList, 'About'> & CommonScreenProps

export type FeedbackScreenProps = NativeStackScreenProps<RootStackParamList, 'Feedback'> & CommonScreenProps

export type ThemeSettingScreenProps = NativeStackScreenProps<RootStackParamList, 'ThemeSetting'> & CommonScreenProps

export type SearchScreenProps = NativeStackScreenProps<RootStackParamList, 'Search'> & CommonScreenProps

export type SiteStatScreenProps = NativeStackScreenProps<RootStackParamList, 'SiteStat'> & CommonScreenProps

export type NodeDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'NodeDetail'> & CommonScreenProps

export type MyTopicsScreenProps = NativeStackScreenProps<RootStackParamList, 'MyTopics'> & CommonScreenProps

export type CacheSettingScreenProps = NativeStackScreenProps<RootStackParamList, 'CacheSetting'> & CommonScreenProps

export type URLSchemescreenProps = NativeStackScreenProps<RootStackParamList, 'URLSchemes'> & CommonScreenProps

export type OpenSourceLicenseScreenProps = NativeStackScreenProps<RootStackParamList, 'OpenSourceLicense'> &
  CommonScreenProps

export type PrivacyPolicyScreenProps = NativeStackScreenProps<RootStackParamList, 'PrivacyPolicy'> & CommonScreenProps

export type InterestNodesScreenProps = NativeStackScreenProps<RootStackParamList, 'InterestNodes'> & CommonScreenProps

export type ChangeLogScreenProps = NativeStackScreenProps<RootStackParamList, 'ChangeLog'> & CommonScreenProps

export type HowToUseScreenProps = NativeStackScreenProps<RootStackParamList, 'HowToUse'> & CommonScreenProps

type k1 = keyof RootStackParamList

export const ROUTES = {
  /**
   * @description 抽屉
   */
  Draw: 'Draw',
  /**
   * @description 导航器
   */
  Main: 'Main',
  /**
   * @description 首页
   */
  HomeTabs: 'HomeTabs',
  /**
   * @description 个人信息页
   */
  Profile: 'Profile',
  /**
   * @description 最新话题
   */
  LatestTopics: 'LatestTopics',
  /**
   * @description 热门
   */
  HotTopics: 'HotTopics',
  /**
   * @description 登录
   */
  SignIn: 'SignIn',
  /**
   * @description 已读
   */
  History: 'History',
  /**
   * @description 通知
   */
  Notifications: 'Notifications',
  /**
   * @description 节点列表
   */
  Nodes: 'Nodes',
  /**
   * @description 节点话题列表
   */
  NodeTopics: 'NodeTopics',
  /**
   * @description 话题详情
   */
  TopicDetail: 'TopicDetail',
  /**
   * @description 我的
   */
  My: 'My',
  /**
   * @description 关注用户列表
   */
  Following: 'Following',
  /**
   * @description 喜欢/收藏的话题列表
   */
  FavoriteTopics: 'FavoriteTopics',
  /**
   * @description 设置
   */
  Setting: 'Setting',
  /**
   * @description 语言设置
   */
  Language: 'Language',
  /**
   * @description 关于
   */
  About: 'About',
  /**
   * @description 反馈
   */
  Feedback: 'Feedback',
  /**
   * @description 主题设置
   */
  ThemeSetting: 'ThemeSetting',
  /**
   * @description 搜索
   */
  Search: 'Search',

  /**
   * @description V2EX统计
   */
  SiteStat: 'SiteStat',

  /**
   * @description 节点详情
   */
  NodeDetail: 'NodeDetail',

  /**
   * @description 我的主题
   */
  MyTopics: 'MyTopics',

  /**
   * @description 缓存设置
   */
  CacheSetting: 'CacheSetting',

  /**
   * @description URLSchemes
   */
  URLSchemes: 'URLSchemes',

  /**
   * @description 开源列表
   */
  OpenSourceLicense: 'OpenSourceLicense',

  /**
   * @description 隐私政策
   */
  PrivacyPolicy: 'PrivacyPolicy',

  /**
   * @description 更新说明
   */
  ChangeLog: 'ChangeLog',

  /**
   * @description 关注的节点
   */
  InterestNodes: 'InterestNodes',

  /**
   * @description 如何使用
   */
  HowToUse: 'HowToUse',

  /**
   * @description WebUrl
   */
  WebViewer: 'WebViewer'
} as const

// see https://stackoverflow.com/questions/52393730/typescript-string-literal-union-type-from-enum
export type ROUTES = typeof ROUTES[keyof typeof ROUTES]
