/**
 * Created by leon<silenceace@gmail.com> on 22/2/23.
 */
import { createNavigationContainerRef, NavigationContainerRefWithCurrent } from '@react-navigation/native'
import { RootStackParamList } from './routes'

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

export type NavigationType = NavigationContainerRefWithCurrent<RootStackParamList>

// add other navigation functions that you need and export them
export default {
  goBack,
  navigate,
  setTopLevelNavigator
}
