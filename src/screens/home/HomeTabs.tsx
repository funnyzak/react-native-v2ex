import React, { useMemo } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { HomeTabsScreenProps, HOME_NODES as tabs, NODE_TAB_TYPE } from '@src/navigation'
import { useTheme } from '@src/theme'
import { useAppSelector } from '@src/hooks'
import NodeTopicList from '../topic/NodeTopicList'
import { RootState } from '@src/store'

const Tab = createMaterialTopTabNavigator()

const TopicTabList = ({}: HomeTabsScreenProps) => {
  const { theme } = useTheme()
  const isLogged = useAppSelector((state: RootState) => (state.member ? true : false))

  const filterNodes = useMemo(() => tabs.filter((item) => !item.loginRequired || (item.loginRequired && isLogged)), [isLogged])

  return (
    <Tab.Navigator
      initialLayout={{ width: theme.dimens.WINDOW_WIDTH }}
      tabBarPosition="top"
      initialRouteName={`NODE-${tabs[0].name}`}
      style={{
        padding: 0
      }}
      screenOptions={{
        lazy: true,
        tabBarActiveTintColor: theme.colors.tabActiveTintColor,
        tabBarInactiveTintColor: theme.colors.tabInactiveTintColor,
        tabBarScrollEnabled: true,
        swipeEnabled: false,
        tabBarItemStyle: {
          height: 35,
          width: 'auto',
          minHeight: 35,
          padding: 0,
          paddingLeft: 3,
          paddingRight: 3,
          marginLeft: 10,
          marginRight: 10
        },
        tabBarStyle: {
          elevation: 0,
          shadowColor: theme.colors.tabShadowColor,
          shadowOffset: { width: 5, height: 10 }, // change this for more shadow
          shadowOpacity: 0,
          shadowRadius: 6,
          borderBottomWidth: 1,
          borderColor: theme.colors.lightGrey,
          backgroundColor: theme.colors.primary
        },
        tabBarLabelStyle: {
          padding: 0,
          margin: 0,
          fontSize: 14
        },
        tabBarIndicatorStyle: {
          backgroundColor: theme.colors.secondary
        },
        tabBarIndicatorContainerStyle: {
          backgroundColor: theme.colors.primary
        }
      }}>
      {filterNodes.map((item: NODE_TAB_TYPE) => (
        <Tab.Screen
          key={`NODE-${item.name}`}
          name={`NODE-${item.name}`}
          component={NodeTopicList}
          options={{
            title: item.title
          }}
          initialParams={{
            nodeName: item.name
          }}
        />
      ))}
    </Tab.Navigator>
  )
}

export default TopicTabList
