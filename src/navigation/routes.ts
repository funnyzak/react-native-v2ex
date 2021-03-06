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
   * ??????->??????
   */
  HotDraw: 'HotDraw',
  /**
   * ?????????
   */
  Main: 'Main',
  /**
   * ????????????
   */
  Hot: 'Hot',
  /**
   * ????????????
   */
  Latest: 'Latest',
  /**
   * ??????
   */
  HomeTabs: 'HomeTabs',
  /**
   * ???????????????
   */
  Profile: 'Profile',
  /**
   * ??????
   */
  SignIn: 'SignIn',
  /**
   * ??????
   */
  History: 'History',
  /**
   * ??????
   */
  Notifications: 'Notifications',
  /**
   * ????????????
   */
  Nodes: 'Nodes',
  /**
   * ??????????????????
   */
  NodeTopics: 'NodeTopics',
  /**
   * ????????????
   */
  TopicDetail: 'TopicDetail',
  /**
   * ??????
   */
  My: 'My',
  /**
   * ??????????????????
   */
  Following: 'Following',
  /**
   * ??????/?????????????????????
   */
  FavoriteTopics: 'FavoriteTopics',
  /**
   * ??????
   */
  Setting: 'Setting',
  /**
   * ????????????
   */
  Language: 'Language',
  /**
   * ??????
   */
  About: 'About',
  /**
   * ??????
   */
  Feedback: 'Feedback',
  /**
   * ????????????
   */
  ThemeSetting: 'ThemeSetting',
  /**
   * ??????
   */
  Search: 'Search',

  /**
   * V2EX??????
   */
  SiteStat: 'SiteStat',

  /**
   * ????????????
   */
  NodeDetail: 'NodeDetail',

  /**
   * ????????????
   */
  MyTopics: 'MyTopics',

  /**
   * ????????????
   */
  CacheSetting: 'CacheSetting',

  /**
   * URLSchemes
   */
  URLSchemes: 'URLSchemes',

  /**
   * ????????????
   */
  OpenSourceLicense: 'OpenSourceLicense',

  /**
   * ????????????
   */
  PrivacyPolicy: 'PrivacyPolicy',

  /**
   * ????????????
   */
  TermsOfService: 'TermsOfService',

  /**
   * ????????????
   */
  ChangeLog: 'ChangeLog',

  /**
   * ???????????????
   */
  InterestNodes: 'InterestNodes',

  /**
   * ????????????
   */
  HowToUse: 'HowToUse',

  /**
   * WebUrl
   */
  WebViewer: 'WebViewer'
} as const

// see https://stackoverflow.com/questions/52393730/typescript-string-literal-union-type-from-enum
export type ROUTES = typeof ROUTES[keyof typeof ROUTES]
