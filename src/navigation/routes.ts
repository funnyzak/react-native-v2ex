/**
 * Created by leon<silenceace@gmail.com> on 22/2/24.
 */

import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Draw: undefined
  Main: undefined
  Home: undefined
  LatestTopics: undefined
  HotTopics: undefined
  SignIn: undefined
  Notification: undefined
  NodeList: undefined
  NodeTopics: undefined
  TopicDetail: { topicId: string }
  AccountHome: undefined
  FollowPeople: undefined
  LikeTopics: undefined
  Setting: undefined
  Language: undefined
  About: undefined
  Feedback: undefined
  Theme: undefined
  Search: undefined
}

export type CommonScreenProps = {
  loading: boolean
  error: string | null
  success: string | null
}

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'> & CommonScreenProps

export type LatestTopicsScreenProps = NativeStackScreenProps<RootStackParamList, 'LatestTopics'> & CommonScreenProps

export type HotTopicsScreenProps = NativeStackScreenProps<RootStackParamList, 'HotTopics'> & CommonScreenProps

export type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'> &
  CommonScreenProps & {
    auth: (token: string) => void
  }

export type NotificationScreenProps = NativeStackScreenProps<RootStackParamList, 'Notification'> & CommonScreenProps

export type NodeListScreenProps = NativeStackScreenProps<RootStackParamList, 'NodeList'> & CommonScreenProps

export type NodeTopicsScreenProps = NativeStackScreenProps<RootStackParamList, 'NodeTopics'> & CommonScreenProps

export type TopicDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'TopicDetail'> & CommonScreenProps

export type AccountHomeScreenProps = NativeStackScreenProps<RootStackParamList, 'AccountHome'> & CommonScreenProps

export type FollowPeopleScreenProps = NativeStackScreenProps<RootStackParamList, 'FollowPeople'> & CommonScreenProps

export type LikeTopicsScreenProps = NativeStackScreenProps<RootStackParamList, 'LikeTopics'> & CommonScreenProps

export type SettingScreenProps = NativeStackScreenProps<RootStackParamList, 'Setting'> & CommonScreenProps

export type LanguageScreenProps = NativeStackScreenProps<RootStackParamList, 'Language'> & CommonScreenProps

export type AboutScreenProps = NativeStackScreenProps<RootStackParamList, 'About'> & CommonScreenProps

export type FeedbackScreenProps = NativeStackScreenProps<RootStackParamList, 'Feedback'> & CommonScreenProps

export type ThemeScreenProps = NativeStackScreenProps<RootStackParamList, 'Theme'> & CommonScreenProps

export type SearchScreenProps = NativeStackScreenProps<RootStackParamList, 'Search'> & CommonScreenProps

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
  Home: 'Home',
  /**
   * @description 最新话题
   */
  LatestTopics: 'LatestTopics',
  // 热门
  HotTopics: 'HotTopics',
  /**
   * @description 登录
   */
  SignIn: 'SignIn',
  /**
   * @description 通知
   */
  Notification: 'Notification',
  /**
   * @description 节点列表
   */
  NodeList: 'NodeList',
  /**
   * @description 节点话题
   */
  NodeTopics: 'NodeTopics',
  /**
   * @description 话题详情
   */
  TopicDetail: 'TopicDetail',
  /**
   * @description 我的
   */
  AccountHome: 'AccountHome',
  /**
   * @description 关注用户列表
   */
  FollowPeople: 'FollowPeople',
  /**
   * @description 喜欢的话题列表
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
  Search: 'Search'
} as const

// see https://stackoverflow.com/questions/52393730/typescript-string-literal-union-type-from-enum
export type ROUTES = typeof ROUTES[keyof typeof ROUTES]
