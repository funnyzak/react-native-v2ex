import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerToggleButton } from '@react-navigation/drawer'
import { Image, StyleSheet } from 'react-native'
import { translate } from '@src/i18n'

import { RootStackParamList } from './routes'
import { theme } from '../theme'
import { HomeScreen, NodeScreen, NotificationScreen, AccountScreen, DrawScreen } from '../components'
import { useUnRead } from '@src/hooks/useUnRead'

const Drawer = createDrawerNavigator()
const BottomTab = createBottomTabNavigator()

const defaultHeader = {
  headerStyle: {
    backgroundColor: theme.colors.primary
  },
  headerTitleStyle: {
    ...theme.typography.titleTextSemiBold,
    alignSelf: 'center'
  },
  headerBackTitle: null,
  headerTintColor: theme.colors.appbarTint,
  headerBackTitleVisible: false
}

const renderIcon = (focused: boolean, activeIcon: any, inactiveIcon: any): Element => {
  const icon = focused ? activeIcon : inactiveIcon
  return <Image source={icon} />
}

const badgeSize = 18
const badgeStyles = StyleSheet.create({
  badge: {
    height: badgeSize,
    fontSize: badgeSize - 6,
    fontWeight: 'bold',
    borderRadius: badgeSize
  }
})

const MainAppNavigator = () => {
  const { unread } = useUnRead()
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: translate('router.home'),
          headerShown: false,
          tabBarIcon: ({ focused }) => renderIcon(focused, theme.assets.images.icons.home, theme.assets.images.icons.homeInactive)
        }}
      />
      <BottomTab.Screen
        name="Node"
        component={NodeScreen}
        options={{
          title: translate('router.node'),
          headerShown: false,
          tabBarIcon: ({ focused }) => renderIcon(focused, theme.assets.images.icons.discovery, theme.assets.images.icons.discoveryInactive)
        }}
      />
      <BottomTab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: translate('router.notification'),
          headerShown: false,
          tabBarIcon: ({ focused }) => renderIcon(focused, theme.assets.images.icons.notification, theme.assets.images.icons.notificationInactive),
          tabBarBadge: unread > 0 ? unread : undefined,
          tabBarBadgeStyle: badgeStyles.badge
        }}
      />
      <BottomTab.Screen
        name="AccountHome"
        component={AccountScreen}
        options={{
          title: translate('router.mine'),
          headerShown: false,
          tabBarIcon: ({ focused }) => renderIcon(focused, theme.assets.images.icons.profile, theme.assets.images.icons.profileInactive)
        }}
      />
    </BottomTab.Navigator>
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
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="BottomTab" component={MainAppNavigator} options={{ title: '首页', headerShown: false }} />
    </StackNavigator.Navigator>
  )
}

export { Natigator }
