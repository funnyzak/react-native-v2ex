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
  Node: undefined
  Notification: undefined
  My: undefined
  SignIn: undefined
  NodeTopics: { nodeName: string; nodeTitle: string }
  TopicDetail: { topicId: number }
  Profile: { username: string }
  FollowPeople: undefined
  LikeTopics: undefined
  Setting: undefined
  Language: undefined
  About: undefined
  Feedback: undefined
  Theme: undefined
  Search: { query: string }
  Readed: undefined
  WebLink: { url: string; title?: string }

  SiteStat: undefined
  LikeNodes: undefined
  NodeDetail: { nodeName: string; nodeTitle: string }
  MyTopics: undefined
  CacheSetting: undefined
  UrlSchemes: undefined
  OpenSourceLicense: undefined
  Privacy: undefined
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

export type ReadedScreenProps = NativeStackScreenProps<RootStackParamList, 'Readed'> & CommonScreenProps

export type HomeTabsScreenProps = NativeStackScreenProps<RootStackParamList, 'HomeTabs'> & CommonScreenProps

export type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'> &
  CommonScreenProps & {
    auth: (token: string) => void
  }

export type NotificationScreenProps = NativeStackScreenProps<RootStackParamList, 'Notification'> & CommonScreenProps

export type NodeScreenProps = NativeStackScreenProps<RootStackParamList, 'Node'> & CommonScreenProps

export type NodeTopicsScreenProps = NativeStackScreenProps<RootStackParamList, 'NodeTopics'> & CommonScreenProps

export type TopicDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'TopicDetail'> & CommonScreenProps

export type MyScreenProps = NativeStackScreenProps<RootStackParamList, 'My'> & CommonScreenProps

export type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'> & CommonScreenProps

export type FollowPeopleScreenProps = NativeStackScreenProps<RootStackParamList, 'FollowPeople'> & CommonScreenProps

export type LikeTopicsScreenProps = NativeStackScreenProps<RootStackParamList, 'LikeTopics'> & CommonScreenProps

export type SettingScreenProps = NativeStackScreenProps<RootStackParamList, 'Setting'> & CommonScreenProps

export type LanguageScreenProps = NativeStackScreenProps<RootStackParamList, 'Language'> & CommonScreenProps

export type AboutScreenProps = NativeStackScreenProps<RootStackParamList, 'About'> & CommonScreenProps

export type FeedbackScreenProps = NativeStackScreenProps<RootStackParamList, 'Feedback'> & CommonScreenProps

export type ThemeScreenProps = NativeStackScreenProps<RootStackParamList, 'Theme'> & CommonScreenProps

export type SearchScreenProps = NativeStackScreenProps<RootStackParamList, 'Search'> & CommonScreenProps

export type SiteStatScreenProps = NativeStackScreenProps<RootStackParamList, 'SiteStat'> & CommonScreenProps

export type NodeDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'NodeDetail'> & CommonScreenProps

export type MyTopicsScreenProps = NativeStackScreenProps<RootStackParamList, 'MyTopics'> & CommonScreenProps

export type CacheSettingScreenProps = NativeStackScreenProps<RootStackParamList, 'CacheSetting'> & CommonScreenProps

export type UrlSchemesScreenProps = NativeStackScreenProps<RootStackParamList, 'UrlSchemes'> & CommonScreenProps

export type OpenSourceLicenseScreenProps = NativeStackScreenProps<RootStackParamList, 'OpenSourceLicense'> &
  CommonScreenProps

export type PrivacyScreenProps = NativeStackScreenProps<RootStackParamList, 'Privacy'> & CommonScreenProps

export type LikeNodesScreenProps = NativeStackScreenProps<RootStackParamList, 'LikeNodes'> & CommonScreenProps

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
   * @description 个人主页
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
  Readed: 'Readed',
  /**
   * @description 通知
   */
  Notification: 'Notification',
  /**
   * @description 节点列表
   */
  Node: 'Node',
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
  FollowPeople: 'FollowPeople',
  /**
   * @description 喜欢/收藏的话题列表
   */
  LikeTopics: 'LikeTopics',
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
  Theme: 'Theme',
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
  UrlSchemes: 'UrlSchemes',

  /**
   * @description 开源列表
   */
  OpenSourceLicense: 'OpenSourceLicense',

  /**
   * @description 隐私政策
   */
  Privacy: 'Privacy',

  /**
   * @description 更新说明
   */
  ChangeLog: 'ChangeLog',

  /**
   * @description 关注的节点
   */
  LikeNodes: 'LikeNodes',

  /**
   * @description 如何使用
   */
  HowToUse: 'HowToUse',

  /**
   * @description WebUrl
   */
  WebLink: 'WebLink'
} as const

// see https://stackoverflow.com/questions/52393730/typescript-string-literal-union-type-from-enum
export type ROUTES = typeof ROUTES[keyof typeof ROUTES]
