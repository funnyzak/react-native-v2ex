/**
 * Created by leon<silenceace@gmail.com> on 22/2/24.
 */

import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
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

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type Home2ScreenProps = NativeStackScreenProps<RootStackParamList, 'Home2'>
export type LatestTopicsScreenProps = NativeStackScreenProps<RootStackParamList, 'LatestTopics'>
export type HotTopicsScreenProps = NativeStackScreenProps<RootStackParamList, 'HotTopics'>
export type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>
export type NotificationScreenProps = NativeStackScreenProps<RootStackParamList, 'Notification'>
export type NodeListScreenProps = NativeStackScreenProps<RootStackParamList, 'NodeList'>
export type NodeTopicsScreenProps = NativeStackScreenProps<RootStackParamList, 'NodeTopics'>
export type TopicDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'TopicDetail'>
export type AccountHomeScreenProps = NativeStackScreenProps<RootStackParamList, 'AccountHome'>
export type FollowPeopleScreenProps = NativeStackScreenProps<RootStackParamList, 'FollowPeople'>
export type LikeTopicsScreenProps = NativeStackScreenProps<RootStackParamList, 'LikeTopics'>
export type AuthLoadingSwitchScreenProps = NativeStackScreenProps<RootStackParamList, 'AuthLoadingSwitch'>
export type SettingScreenProps = NativeStackScreenProps<RootStackParamList, 'Setting'>
export type LanguageScreenProps = NativeStackScreenProps<RootStackParamList, 'Language'>
export type AboutScreenProps = NativeStackScreenProps<RootStackParamList, 'About'>
export type FeedbackScreenProps = NativeStackScreenProps<RootStackParamList, 'Feedback'>
export type ThemeScreenProps = NativeStackScreenProps<RootStackParamList, 'Theme'>
export type SearchScreenProps = NativeStackScreenProps<RootStackParamList, 'Search'>
