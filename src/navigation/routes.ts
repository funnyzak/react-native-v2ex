/**
 * Created by leon<silenceace@gmail.com> on 22/2/24.
 */

import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ITheme } from '@src/types'

export type RootStackParamList = {
  HotDraw: undefined
  Main: {
    initialRouteName?: string
  }
  HomeTabs: undefined
  Hot: undefined
  Latest: undefined
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
  TermsOfService: undefined
  ChangeLog: undefined
  HowToUse: undefined
}

export type CommonScreenProps = {
  loading: boolean
  error: string | null
  success: string | null
  theme: ITheme
}

export type HotDrawScreenProps = NativeStackScreenProps<RootStackParamList, 'HotDraw'> & CommonScreenProps

export type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'Main'> & CommonScreenProps

export type HotScreenProps = NativeStackScreenProps<RootStackParamList, 'Hot'> & CommonScreenProps

export type LatestScreenProps = NativeStackScreenProps<RootStackParamList, 'Latest'> & CommonScreenProps

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

export type WebViewerScreenProps = NativeStackScreenProps<RootStackParamList, 'WebViewer'> & CommonScreenProps

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

export type TermsOfServiceScreenProps = NativeStackScreenProps<RootStackParamList, 'TermsOfService'> & CommonScreenProps

type k1 = keyof RootStackParamList

export const ROUTES = {
  /**
   * 抽屉->热门
   */
  HotDraw: 'HotDraw',
  /**
   * 导航器
   */
  Main: 'Main',
  /**
   * 热门主题
   */
  Hot: 'Hot',
  /**
   * 最新主题
   */
  Latest: 'Latest',
  /**
   * 首页
   */
  HomeTabs: 'HomeTabs',
  /**
   * 个人信息页
   */
  Profile: 'Profile',
  /**
   * 登录
   */
  SignIn: 'SignIn',
  /**
   * 已读
   */
  History: 'History',
  /**
   * 通知
   */
  Notifications: 'Notifications',
  /**
   * 节点列表
   */
  Nodes: 'Nodes',
  /**
   * 节点话题列表
   */
  NodeTopics: 'NodeTopics',
  /**
   * 话题详情
   */
  TopicDetail: 'TopicDetail',
  /**
   * 我的
   */
  My: 'My',
  /**
   * 关注用户列表
   */
  Following: 'Following',
  /**
   * 喜欢/收藏的话题列表
   */
  FavoriteTopics: 'FavoriteTopics',
  /**
   * 设置
   */
  Setting: 'Setting',
  /**
   * 语言设置
   */
  Language: 'Language',
  /**
   * 关于
   */
  About: 'About',
  /**
   * 反馈
   */
  Feedback: 'Feedback',
  /**
   * 主题设置
   */
  ThemeSetting: 'ThemeSetting',
  /**
   * 搜索
   */
  Search: 'Search',

  /**
   * V2EX统计
   */
  SiteStat: 'SiteStat',

  /**
   * 节点详情
   */
  NodeDetail: 'NodeDetail',

  /**
   * 我的主题
   */
  MyTopics: 'MyTopics',

  /**
   * 缓存设置
   */
  CacheSetting: 'CacheSetting',

  /**
   * URLSchemes
   */
  URLSchemes: 'URLSchemes',

  /**
   * 开源列表
   */
  OpenSourceLicense: 'OpenSourceLicense',

  /**
   * 隐私政策
   */
  PrivacyPolicy: 'PrivacyPolicy',

  /**
   * 服务条款
   */
  TermsOfService: 'TermsOfService',

  /**
   * 更新说明
   */
  ChangeLog: 'ChangeLog',

  /**
   * 关注的节点
   */
  InterestNodes: 'InterestNodes',

  /**
   * 如何使用
   */
  HowToUse: 'HowToUse',

  /**
   * WebUrl
   */
  WebViewer: 'WebViewer'
} as const

// see https://stackoverflow.com/questions/52393730/typescript-string-literal-union-type-from-enum
export type ROUTES = typeof ROUTES[keyof typeof ROUTES]
