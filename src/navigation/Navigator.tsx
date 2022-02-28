import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerToggleButton } from '@react-navigation/drawer'
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'

import { RootStackParamList } from './routes'

import { theme } from '../theme'

import { HelloReactNative } from '../components'
import Hello2 from '../components/home/Hello2'

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

const StackNavigator = createNativeStackNavigator<RootStackParamList>()

function Natigator() {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="Home" component={HelloReactNative} options={{ title: '演示' }} />
      <StackNavigator.Screen name="Home2" component={Hello2} options={{ title: '演示2' }} />
    </StackNavigator.Navigator>
  )
}

export { Natigator }
