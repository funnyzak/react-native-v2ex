import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Placeholder } from '@src/components'
import { translate } from '@src/i18n'
import { HOME_NODES as tabs, InterestNodesScreenProps as ScreenProps } from '@src/navigation'
import { RootState } from '@src/store'
import { SylCommon, useTheme } from '@src/theme'
import { AppObject } from '@src/types'
import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { NeedLogin } from '../components'
import { NodeTopicListScreen } from '../topic'

const Tab = createMaterialTopTabNavigator()

const InterestNodes = ({
  route,
  navigation,
  likeNodes
}: ScreenProps & {
  likeNodes: AppObject.Node[]
}) => {
  const { theme } = useTheme()
  return (
    <View style={SylCommon.Layout.fill}>
      <NeedLogin>
        {!likeNodes || likeNodes.length === 0 ? (
          <Placeholder displayType="text" placeholderText={translate('placeholder.noInterestNodes')} />
        ) : (
          <Tab.Navigator
            initialLayout={{ width: theme.dimens.WINDOW_WIDTH }}
            tabBarPosition="top"
            initialRouteName={`NODE-${tabs[0].name}`}
            sceneContainerStyle={[
              {
                backgroundColor: theme.colors.background
              }
            ]}
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
                borderBottomWidth: 0,
                borderColor: theme.colors.lightGrey,
                backgroundColor: theme.colors.tabBarBackground
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
                backgroundColor: theme.colors.tabBarBackground
              }
            }}>
            {likeNodes.map((item: AppObject.Node) => (
              <Tab.Screen
                key={`NODE-${item.name}`}
                name={`NODE-${item.name}`}
                component={NodeTopicListScreen}
                options={{
                  title: item.title
                }}
                initialParams={{
                  nodeName: item.name,
                  nodeTitle: item.title
                }}
              />
            ))}
          </Tab.Navigator>
        )}
      </NeedLogin>
    </View>
  )
}

const mapStateToProps = ({ member: { interestNodes } }: RootState) => {
  return { likeNodes: interestNodes }
}

export default connect(mapStateToProps)(InterestNodes)
