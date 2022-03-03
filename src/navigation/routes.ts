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
  AuthLoadingSwitch: undefined
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

export type AuthLoadingSwitchScreenProps = NativeStackScreenProps<RootStackParamList, 'AuthLoadingSwitch'> & CommonScreenProps

export type SettingScreenProps = NativeStackScreenProps<RootStackParamList, 'Setting'> & CommonScreenProps

export type LanguageScreenProps = NativeStackScreenProps<RootStackParamList, 'Language'> & CommonScreenProps

export type AboutScreenProps = NativeStackScreenProps<RootStackParamList, 'About'> & CommonScreenProps

export type FeedbackScreenProps = NativeStackScreenProps<RootStackParamList, 'Feedback'> & CommonScreenProps

export type ThemeScreenProps = NativeStackScreenProps<RootStackParamList, 'Theme'> & CommonScreenProps

export type SearchScreenProps = NativeStackScreenProps<RootStackParamList, 'Search'> & CommonScreenProps
