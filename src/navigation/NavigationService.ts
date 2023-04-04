/**
 * Created by Leon<silenceace@gmail.com> at 2022-02-23 22:18:36.
 * Last modified at 2022-04-19 22:17:33
 */

import { createNavigationContainerRef, NavigationContainerRefWithCurrent } from '@react-navigation/native'
import { RootStackParamList, ROUTES } from './routes'
let navigationRef = createNavigationContainerRef<RootStackParamList>()
function setTopLevelNavigator(navigatorRef: NavigationContainerRefWithCurrent<RootStackParamList>) {
  navigationRef = navigatorRef
}
function navigate(screen: keyof RootStackParamList, params: any = undefined) {
  navigationRef.navigate(screen, params)
}
function goBack() {
  navigationRef.goBack()
}
function goUserProfile(username: string) {
  navigate(ROUTES.Profile, { username })
}
function goTopicDetail(topicId: string) {
  navigate(ROUTES.TopicDetail, { topicId })
}
function goNodeTopics(nodeName: string, nodeTitle: string) {
  navigate(ROUTES.NodeTopics, { nodeName, nodeTitle })
}
function goNodeDetail(nodeName: string, nodeTitle: string) {
  navigate(ROUTES.NodeDetail, { nodeName, nodeTitle })
}
export type NavigationType = NavigationContainerRefWithCurrent<RootStackParamList>
// add other navigation functions that you need and export them
export default {
  goBack,
  navigate,
  setTopLevelNavigator,
  goTopicDetail,
  goNodeTopics,
  goNodeDetail,
  goUserProfile
}
