/**
 * Created by leon<silenceace@gmail.com> on 22/2/21.
 */

import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationState, PartialState, Route } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Image, StyleSheet } from 'react-native'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

import { translate } from '@src/i18n'
import { useAppSelector } from '@src/hooks'
import { themes } from '@src/theme'
import { HomeScreen, DrawScreen, NodeScreen, NotificationScreen, AccountScreen, SignInScreen } from '@src/screens'
import { useUnRead } from '@src/hooks/useUnRead'
import { ROUTES, RootStackParamList } from './routes'

const theme = themes.light
const Drawer = createDrawerNavigator()
const MainNavigator = createBottomTabNavigator()

const defaultHeaderSetting = {
  headerStyle: {
    shadowOpacity: 0, // remove shadow on iOS
    elevation: 0, // remove shadow on Android,
    backgroundColor: theme.colors.primary,
    height: theme.dimens.headerHeight
  },
  headerTitleStyle: {
    ...(theme.typography.titleTextSemiBold as any),
    alignSelf: 'center'
  },
  headerBackTitle: undefined,
  headerTintColor: theme.colors.appbarTint,
  headerBackTitleVisible: false
}

const renderIcon = (focused: boolean, activeIcon: any, inactiveIcon: any): Element => {
  const icon = focused ? activeIcon : inactiveIcon
  return <Image source={icon} />
}

const badgeStyles = StyleSheet.create({
  badge: {
    height: theme.dimens.badgeSize,
    fontSize: theme.dimens.badgeSize - 6,
    fontWeight: 'bold',
    borderRadius: theme.dimens.badgeSize
  }
})

const getHeaderTitle = (
  route: Partial<Route<string>> & {
    state?: PartialState<NavigationState>
  }
) => {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? ROUTES.Home
  switch (routeName) {
    case ROUTES.Home:
      return translate(`router.${ROUTES.Home}`)
    case ROUTES.NodeList:
      return translate(`router.${ROUTES.NodeList}`)
    case ROUTES.Notification:
      return translate(`router.${ROUTES.Notification}`)
    case ROUTES.AccountHome:
      return translate(`router.${ROUTES.AccountHome}`)
  }
}

const MainAppNavigator = () => {
  const { unread } = useUnRead()
  return (
    <MainNavigator.Navigator>
      <MainNavigator.Screen
        name={ROUTES.Home}
        component={HomeScreen}
        options={{
          title: translate(`router.${ROUTES.Home}`),
          headerShown: false,
          tabBarIcon: ({ focused }) => renderIcon(focused, theme.assets.images.icons.home, theme.assets.images.icons.homeInactive)
        }}
      />
      <MainNavigator.Screen
        name={ROUTES.NodeList}
        component={NodeScreen}
        options={{
          title: translate(`router.${ROUTES.NodeList}`),
          headerShown: false,
          tabBarIcon: ({ focused }) => renderIcon(focused, theme.assets.images.icons.discovery, theme.assets.images.icons.discoveryInactive)
        }}
      />
      <MainNavigator.Screen
        name={ROUTES.Notification}
        component={NotificationScreen}
        options={{
          title: translate(`router.${ROUTES.Notification}`),
          headerShown: false,
          tabBarIcon: ({ focused }) => renderIcon(focused, theme.assets.images.icons.notification, theme.assets.images.icons.notificationInactive),
          tabBarBadge: unread > 0 ? unread : undefined,
          tabBarBadgeStyle: badgeStyles.badge
        }}
      />
      <MainNavigator.Screen
        name={ROUTES.AccountHome}
        component={AccountScreen}
        options={{
          title: translate(`router.${ROUTES.AccountHome}`),
          headerShown: false,
          tabBarIcon: ({ focused }) => renderIcon(focused, theme.assets.images.icons.profile, theme.assets.images.icons.profileInactive)
        }}
      />
    </MainNavigator.Navigator>
  )
}

const DrawNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Draw">
      <Drawer.Screen name="Draw" component={DrawScreen} options={{ title: '导航器', headerShown: false }} />
      <Drawer.Screen name="AuthLoadingSwitch" component={MainAppNavigator} options={{ title: '最新', headerShown: false }} />
      <Drawer.Screen name="TopicDetail" component={MainAppNavigator} options={{ title: '热点', headerShown: false }} />
      <Drawer.Screen name="Language" component={MainAppNavigator} options={{ title: '关于', headerShown: false }} />
    </Drawer.Navigator>
  )
}

const StackNavigator = createNativeStackNavigator<RootStackParamList>()

function Natigator() {
  const { token } = useAppSelector((state: any) => state.member)

  return (
    <StackNavigator.Navigator initialRouteName={ROUTES.SignIn}>
      {!token ? (
        <StackNavigator.Screen
          name={ROUTES.SignIn}
          component={SignInScreen}
          options={{
            title: translate(`router.${ROUTES.SignIn}`),
            animationTypeForReplace: !token ? 'pop' : 'push'
          }}
        />
      ) : (
        <StackNavigator.Screen
          name={ROUTES.Main}
          component={MainAppNavigator}
          options={({ route }) => ({
            ...defaultHeaderSetting,
            headerTitle: getHeaderTitle(route)
          })}
        />
      )}
    </StackNavigator.Navigator>
  )
}

export { Natigator }
