/**
 * Created by leon<silenceace@gmail.com> on 22/2/24.
 */

import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Draw: undefined
  BottomTab: undefined
  Home: undefined
  Home2: undefined
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

export type HomeScreenNatigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type Home2ScreenNatigationProps = NativeStackScreenProps<RootStackParamList, 'Home2'>
export type LatestTopicsScreenNatigationProps = NativeStackScreenProps<RootStackParamList, 'LatestTopics'>
export type HotTopicsScreenNatigationProps = NativeStackScreenProps<RootStackParamList, 'HotTopics'>
export type SignInScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>
export type NotificationScreenNatigationProps = NativeStackScreenProps<RootStackParamList, 'Notification'>
export type NodeListScreenNatigationProps = NativeStackScreenProps<RootStackParamList, 'NodeList'>
export type NodeTopicsScreenNatigationProps = NativeStackScreenProps<RootStackParamList, 'NodeTopics'>
export type TopicDetailScreenNatigationProps = NativeStackScreenProps<RootStackParamList, 'TopicDetail'>
export type AccountHomeScreenNatigationProps = NativeStackScreenProps<RootStackParamList, 'AccountHome'>
export type FollowPeopleScreenNatigationProps = NativeStackScreenProps<RootStackParamList, 'FollowPeople'>
export type LikeTopicsScreenNatigationProps = NativeStackScreenProps<RootStackParamList, 'LikeTopics'>
export type AuthLoadingSwitchScreenNatigationProps = NativeStackScreenProps<RootStackParamList, 'AuthLoadingSwitch'>
export type SettingScreenNatigationProps = NativeStackScreenProps<RootStackParamList, 'Setting'>
export type LanguageScreenNatigationProps = NativeStackScreenProps<RootStackParamList, 'Language'>
export type AboutScreenNatigationProps = NativeStackScreenProps<RootStackParamList, 'About'>
export type FeedbackScreenNatigationProps = NativeStackScreenProps<RootStackParamList, 'Feedback'>
export type ThemeScreenNatigationProps = NativeStackScreenProps<RootStackParamList, 'Theme'>
export type SearchScreenNatigationProps = NativeStackScreenProps<RootStackParamList, 'Search'>

export type SignInScreenProps = SignInScreenNavigationProps & {
  loading: boolean
  error: string | null
  success: string | null
  auth: (token: string) => void
}
