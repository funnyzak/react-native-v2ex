import React, { useMemo } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { HomeScreenProps, HOME_NODES as tabs, NODE_TAB_TYPE } from '@src/navigation'
import { useTheme } from '@src/theme'
import { useAppSelector } from '@src/hooks'
import NodeTopicList from '../topic/NodeTopicList'

const Tab = createMaterialTopTabNavigator()

const TopicTabList = ({}: HomeScreenProps) => {
  const { theme } = useTheme()
  const isLogged = useAppSelector((state: any) => (state.member ? true : false))

  const filterNodes = useMemo(() => tabs.filter((item) => !item.loginRequired || (item.loginRequired && isLogged)), [isLogged])

  return (
    <Tab.Navigator
      initialLayout={{ width: theme.dimens.WINDOW_WIDTH }}
      tabBarPosition="top"
      initialRouteName="NODE-R2"
      style={{
        padding: 0
      }}
      screenOptions={{
        lazy: true,
        tabBarActiveTintColor: theme.colors.tabActiveTintColor,
        tabBarInactiveTintColor: theme.colors.tabInactiveTintColor,
        tabBarScrollEnabled: true,
        tabBarItemStyle: {
          height: 35,
          width: 70,
          minHeight: 35,
          padding: 0
        },
        tabBarStyle: {
          elevation: 0,
          shadowColor: theme.colors.tabShadowColor,
          shadowOffset: { width: 5, height: 10 }, // change this for more shadow
          shadowOpacity: 0.3,
          shadowRadius: 6,
          borderBottomWidth: 1,
          borderColor: theme.colors.lightGrey,
          backgroundColor: theme.colors.lightGrey
        },
        tabBarLabelStyle: {
          padding: 0,
          margin: 0,
          fontSize: 14
        },
        tabBarIndicatorStyle: {
          backgroundColor: theme.colors.lightGrey
        },
        tabBarIndicatorContainerStyle: {}
      }}>
      {filterNodes.map((item: NODE_TAB_TYPE) => (
        <Tab.Screen
          key={`NODE-${item.name}`}
          name={`NODE-${item.name}`}
          component={NodeTopicList}
          options={{
            title: item.title
          }}
        />
      ))}
    </Tab.Navigator>
  )
}

export default TopicTabList
