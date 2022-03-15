/**
 * Created by leon<silenceace@gmail.com> on 22/2/21.
 */

import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  NavigationContainer,
  NavigationState,
  NavigationContainerRefWithCurrent,
  PartialState,
  Route
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Image, StatusBar, TextStyle } from 'react-native'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import SplashScreen from 'react-native-splash-screen'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import zhCN from 'dayjs/locale/zh-cn'
import enUS from 'dayjs/locale/en'

import { translate, changeLocale, LanguageTagType } from '@src/i18n'
import { useAppSelector } from '@src/hooks'
import { ITheme, useTheme } from '@src/theme'
import * as Screens from '@src/screens'
import { useUnRead } from '@src/hooks/useUnRead'
import { ROUTES, RootStackParamList, MainScreenProps } from './routes'
import { store, RootState } from '@src/store'
import NavigationService from './NavigationService'
import { ToastProvider } from '@src/components/toast'
import { wait } from '@src/utils/utils'

/**
 * dayjs
 */
dayjs.extend(relativeTime)

const MainNavigator = createBottomTabNavigator()

const defaultHeaderSetting = (theme: ITheme) => ({
  headerStyle: {
    shadowColor: 'transparent', // this covers iOS
    shadowOpacity: 0, // remove shadow on iOS
    elevation: 0, // remove shadow on Android,
    backgroundColor: theme.colors.primary,
    height: theme.dimens.headerHeight,
    borderBottomWidth: 0
  },
  headerTitleStyle: {
    ...(theme.typography.titleTextSemiBold as any),
    alignSelf: 'center'
  },
  headerBackTitle: undefined,
  headerTintColor: theme.colors.appbarTint,
  headerBackTitleVisible: false
})

const renderIcon = (focused: boolean, activeIcon: any, inactiveIcon: any): Element => {
  const icon = focused ? activeIcon : inactiveIcon
  return <Image source={icon} />
}

const resetLocales = (locale: LanguageTagType) => {
  changeLocale(locale)
  dayjs.locale(locale === 'zh' ? zhCN : enUS)
}

const badgeStyles = {
  badge: (theme: ITheme): TextStyle => ({
    height: theme.dimens.badgeSize,
    fontSize: theme.dimens.badgeSize - 6,
    fontWeight: 'bold',
    borderRadius: theme.dimens.badgeSize
  })
}

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

const defaultTabBarSetting = (theme: ITheme) => ({
  headerShown: false,
  tabBarActiveTintColor: theme.colors.tabBarIconActive,
  tabBarInactiveTintColor: theme.colors.tabBarIconInactive,
  tabBarStyle: {
    backgroundColor: theme.colors.tabBarBackground
  }
})

const MainAppNavigator = ({ navigation, route }: MainScreenProps) => {
  const { unread } = useUnRead()
  const { languageTag } = useAppSelector((state: RootState) => state.setting)
  const { theme } = useTheme()

  useEffect(() => {
    resetLocales(languageTag)
  }, [languageTag])

  return (
    <MainNavigator.Navigator>
      <MainNavigator.Screen
        name={ROUTES.HomeTabs}
        component={Screens.HomeTopTabListScreen}
        options={{
          title: translate(`router.${ROUTES.HomeTabs}`),
          ...defaultTabBarSetting(theme),
          tabBarIcon: ({ focused }) =>
            renderIcon(focused, theme.assets.images.icons.home, theme.assets.images.icons.homeInactive)
        }}
      />
      <MainNavigator.Screen
        name={ROUTES.Node}
        component={Screens.NodeScreen}
        options={{
          title: translate(`router.${ROUTES.Node}`),
          ...defaultTabBarSetting(theme),
          tabBarIcon: ({ focused }) =>
            renderIcon(focused, theme.assets.images.icons.discovery, theme.assets.images.icons.discoveryInactive)
        }}
      />
      <MainNavigator.Screen
        name={ROUTES.Notification}
        component={Screens.NotificationScreen}
        options={{
          title: translate(`router.${ROUTES.Notification}`),
          ...defaultTabBarSetting(theme),
          tabBarIcon: ({ focused }) =>
            renderIcon(focused, theme.assets.images.icons.notification, theme.assets.images.icons.notificationInactive),
          tabBarBadge: unread > 0 ? unread : undefined,
          tabBarBadgeStyle: badgeStyles.badge(theme)
        }}
      />
      <MainNavigator.Screen
        name={ROUTES.My}
        component={Screens.MyScreen}
        options={{
          title: translate(`router.${ROUTES.My}`),
          ...defaultTabBarSetting(theme),
          tabBarIcon: ({ focused }) =>
            renderIcon(focused, theme.assets.images.icons.profile, theme.assets.images.icons.profileInactive)
        }}
      />
    </MainNavigator.Navigator>
  )
}

const StackNavigator = createNativeStackNavigator<RootStackParamList>()

export const AppNavigationContainer = () => {
  const { token } = useAppSelector((state: RootState) => state.member)
  const { languageTag } = useAppSelector((state: RootState) => state.setting)

  const { theme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  if (!mounted) {
    resetLocales((store.getState() as any).setting.languageTag)
  }

  useEffect(() => {
    setMounted(true)
    wait(1000, () => {
      SplashScreen.hide()
    })
  }, [])

  useEffect(() => {
    resetLocales(languageTag)
  }, [languageTag])

  return (
    <SafeAreaProvider>
      <ToastProvider>
        <NavigationContainer
          ref={(navigatorRef: NavigationContainerRefWithCurrent<RootStackParamList>) => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}>
          <StatusBar
            backgroundColor={theme.colors.primary}
            barStyle={theme.name === 'dark' ? 'light-content' : 'dark-content'}
          />
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
                  ...defaultHeaderSetting(theme),
                  headerShadowVisible: ![ROUTES.HomeTabs, ROUTES.My].includes(
                    getFocusedRouteNameFromRoute(route) ?? (ROUTES.Node as any)
                  ),
                  headerTitle: getHeaderTitle(route)
                })}
                initialParams={{
                  initialRouteName: ROUTES.My
                }}
              />
            )}
            <StackNavigator.Screen
              name={ROUTES.NodeTopics}
              component={Screens.NodeTopicListScreen}
              options={{
                title: translate(`router.${ROUTES.NodeTopics}`),
                ...defaultHeaderSetting(theme),
                headerShown: true
              }}
            />
            <StackNavigator.Screen
              name={ROUTES.TopicDetail}
              component={Screens.TopicDetailScreen}
              options={{
                title: translate(`router.${ROUTES.TopicDetail}`),
                ...defaultHeaderSetting(theme),
                headerShown: true
              }}
            />
            <StackNavigator.Screen
              name={ROUTES.Profile}
              component={Screens.ProfileScreen}
              options={{
                title: translate(`router.${ROUTES.Profile}`),
                ...defaultHeaderSetting(theme),
                headerShown: true
              }}
            />
            <StackNavigator.Screen
              name={ROUTES.FollowPeople}
              component={Screens.FollowPeopleScreen}
              options={{
                title: translate(`router.${ROUTES.FollowPeople}`),
                ...defaultHeaderSetting(theme),
                headerShown: true
              }}
            />
            <StackNavigator.Screen
              name={ROUTES.LikeTopics}
              component={Screens.LikeTopicsScreen}
              options={{
                title: translate(`router.${ROUTES.LikeTopics}`),
                ...defaultHeaderSetting(theme),
                headerShown: true
              }}
            />
            <StackNavigator.Screen
              name={ROUTES.Setting}
              component={Screens.SettingScreen}
              options={{
                title: translate(`router.${ROUTES.Setting}`),
                ...defaultHeaderSetting(theme),
                headerShown: true
              }}
            />
            <StackNavigator.Screen
              name={ROUTES.Language}
              component={Screens.LanguageScreen}
              options={{
                title: translate(`router.${ROUTES.Language}`),
                ...defaultHeaderSetting(theme),
                headerShown: true
              }}
            />
            <StackNavigator.Screen
              name={ROUTES.About}
              component={Screens.AboutScreen}
              options={{
                title: translate(`router.${ROUTES.About}`),
                ...defaultHeaderSetting(theme),
                headerShown: true
              }}
            />
            <StackNavigator.Screen
              name={ROUTES.Feedback}
              component={Screens.FeedbackScreen}
              options={{
                title: translate(`router.${ROUTES.Feedback}`),
                ...defaultHeaderSetting(theme),
                headerShown: true
              }}
            />
            <StackNavigator.Screen
              name={ROUTES.Theme}
              component={Screens.ThemeScreen}
              options={{
                title: translate(`router.${ROUTES.Theme}`),
                ...defaultHeaderSetting(theme),
                headerShown: true
              }}
            />
            <StackNavigator.Screen
              name={ROUTES.Search}
              component={Screens.SearchScreen}
              options={{
                title: translate(`router.${ROUTES.Search}`),
                ...defaultHeaderSetting(theme),
                headerShown: true
              }}
            />
            <StackNavigator.Screen
              name={ROUTES.Readed}
              component={Screens.ReadedScreen}
              options={{
                title: translate(`router.${ROUTES.Readed}`),
                ...defaultHeaderSetting(theme),
                headerShown: true
              }}
            />
          </StackNavigator.Navigator>
        </NavigationContainer>
      </ToastProvider>
    </SafeAreaProvider>
  )
}
