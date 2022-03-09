/**
 * Created by leon<silenceace@gmail.com> on 22/2/21.
 */

import React, { useEffect } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationState, PartialState, Route } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Image, StyleSheet } from 'react-native'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

import { translate, changeLocale } from '@src/i18n'
import { useAppSelector } from '@src/hooks'
import { themes } from '@src/theme'
import * as Screens from '@src/screens'
import { useUnRead } from '@src/hooks/useUnRead'
import { ROUTES, RootStackParamList, MainScreenProps } from './routes'
import { store } from '@src/store'

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
  const routeName = getFocusedRouteNameFromRoute(route) ?? ROUTES.HomeTabs
  switch (routeName) {
    case ROUTES.HomeTabs:
      return translate(`router.${ROUTES.HomeTabs}`)
    case ROUTES.Node:
      return translate(`router.${ROUTES.Node}`)
    case ROUTES.Notification:
      return translate(`router.${ROUTES.Notification}`)
    case ROUTES.My:
      return translate(`router.${ROUTES.My}`)
  }
}

const defaultTabBarSetting = {
  headerShown: false,
  tabBarActiveTintColor: theme.colors.tabBarIconActive,
  tabBarInactiveTintColor: theme.colors.tabBarIconInactive
}

const MainAppNavigator = ({ navigation, route }: MainScreenProps) => {
  const { unread } = useUnRead()

  return (
    <MainNavigator.Navigator>
      <MainNavigator.Screen
        name={ROUTES.HomeTabs}
        component={Screens.HomeTopTabListScreen}
        options={{
          title: translate(`router.${ROUTES.HomeTabs}`),
          ...defaultTabBarSetting,
          tabBarIcon: ({ focused }) => renderIcon(focused, theme.assets.images.icons.home, theme.assets.images.icons.homeInactive)
        }}
      />
      <MainNavigator.Screen
        name={ROUTES.Node}
        component={Screens.NodeScreen}
        options={{
          title: translate(`router.${ROUTES.Node}`),
          ...defaultTabBarSetting,
          tabBarIcon: ({ focused }) => renderIcon(focused, theme.assets.images.icons.discovery, theme.assets.images.icons.discoveryInactive)
        }}
      />
      <MainNavigator.Screen
        name={ROUTES.Notification}
        component={Screens.NotificationScreen}
        options={{
          title: translate(`router.${ROUTES.Notification}`),
          ...defaultTabBarSetting,
          tabBarIcon: ({ focused }) => renderIcon(focused, theme.assets.images.icons.notification, theme.assets.images.icons.notificationInactive),
          tabBarBadge: unread > 0 ? unread : undefined,
          tabBarBadgeStyle: badgeStyles.badge
        }}
      />
      <MainNavigator.Screen
        name={ROUTES.My}
        component={Screens.MyScreen}
        options={{
          title: translate(`router.${ROUTES.My}`),
          ...defaultTabBarSetting,
          tabBarIcon: ({ focused }) => renderIcon(focused, theme.assets.images.icons.profile, theme.assets.images.icons.profileInactive)
        }}
      />
    </MainNavigator.Navigator>
  )
}

const DrawNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Draw">
      <Drawer.Screen
        name="Draw"
        component={Screens.DrawScreen}
        options={{
          title: translate(`router.${ROUTES.Draw}`),
          headerShown: false
        }}
      />
      <Drawer.Screen
        name={ROUTES.About}
        component={Screens.AboutScreen}
        options={{
          title: translate(`router.${ROUTES.About}`),
          headerShown: false
        }}
      />
      <Drawer.Screen
        name={ROUTES.Feedback}
        component={Screens.FeedbackScreen}
        options={{
          title: translate(`router.${ROUTES.Feedback}`),
          headerShown: false
        }}
      />
      <Drawer.Screen
        name={ROUTES.Theme}
        component={Screens.ThemeScreen}
        options={{
          title: translate(`router.${ROUTES.Theme}`),
          headerShown: false
        }}
      />
    </Drawer.Navigator>
  )
}

const StackNavigator = createNativeStackNavigator<RootStackParamList>()

function Natigator() {
  const { token } = useAppSelector((state: any) => state.member)
  changeLocale((store.getState() as any).setting.languageTag)

  return (
    <StackNavigator.Navigator initialRouteName={ROUTES.SignIn}>
      {!token ? (
        <StackNavigator.Screen
          name={ROUTES.SignIn}
          component={Screens.SignInScreen}
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
          initialParams={{
            initialRouteName: ROUTES.My
          }}
        />
      )}
      <StackNavigator.Screen
        name={ROUTES.LatestTopics}
        component={Screens.LatestTopicListScreen}
        options={{
          title: translate(`router.${ROUTES.LatestTopics}`),
          headerShown: true
        }}
      />
      <StackNavigator.Screen
        name={ROUTES.HotTopics}
        component={Screens.HotTopicListScreen}
        options={{
          title: translate(`router.${ROUTES.HotTopics}`),
          headerShown: true
        }}
      />
      <StackNavigator.Screen
        name={ROUTES.NodeTopics}
        component={Screens.NodeTopicListScreen}
        options={{
          title: translate(`router.${ROUTES.NodeTopics}`),
          headerShown: true
        }}
      />
      <StackNavigator.Screen
        name={ROUTES.TopicDetail}
        component={Screens.TopicDetailScreen}
        options={{
          title: translate(`router.${ROUTES.TopicDetail}`),
          headerShown: true
        }}
      />
      <StackNavigator.Screen
        name={ROUTES.Profile}
        component={Screens.ProfileScreen}
        options={{
          title: translate(`router.${ROUTES.Profile}`),
          headerShown: true
        }}
      />
      <StackNavigator.Screen
        name={ROUTES.FollowPeople}
        component={Screens.FollowPeopleScreen}
        options={{
          title: translate(`router.${ROUTES.FollowPeople}`),
          headerShown: true
        }}
      />
      <StackNavigator.Screen
        name={ROUTES.LikeTopics}
        component={Screens.LikeTopicsScreen}
        options={{
          title: translate(`router.${ROUTES.LikeTopics}`),
          headerShown: true
        }}
      />
      <StackNavigator.Screen
        name={ROUTES.Setting}
        component={Screens.SettingScreen}
        options={{
          title: translate(`router.${ROUTES.Setting}`),
          headerShown: true
        }}
      />
      <StackNavigator.Screen
        name={ROUTES.Language}
        component={Screens.LanguageScreen}
        options={{
          title: translate(`router.${ROUTES.Language}`),
          headerShown: true
        }}
      />
      <StackNavigator.Screen
        name={ROUTES.About}
        component={Screens.AboutScreen}
        options={{
          title: translate(`router.${ROUTES.About}`),
          headerShown: true
        }}
      />
      <StackNavigator.Screen
        name={ROUTES.Feedback}
        component={Screens.FeedbackScreen}
        options={{
          title: translate(`router.${ROUTES.Feedback}`),
          headerShown: true
        }}
      />
      <StackNavigator.Screen
        name={ROUTES.Theme}
        component={Screens.ThemeScreen}
        options={{
          title: translate(`router.${ROUTES.Theme}`),
          headerShown: true
        }}
      />
      <StackNavigator.Screen
        name={ROUTES.Search}
        component={Screens.SearchScreen}
        options={{
          title: translate(`router.${ROUTES.Search}`),
          headerShown: true
        }}
      />
      <StackNavigator.Screen
        name={ROUTES.Readed}
        component={Screens.ReadedScreen}
        options={{
          title: translate(`router.${ROUTES.Readed}`),
          headerShown: true
        }}
      />
    </StackNavigator.Navigator>
  )
}

export { Natigator }
