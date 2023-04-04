/**
 * Created by Leon<silenceace@gmail.com> at 2022-04-17 23:12:51.
 * Last modified at 2022-04-18 18:34:00
 */

import { InterestNodesScreenProps as ScreenProps, NODE_TABS } from '@src/navigation'
import { SylCommon, useTheme } from '@src/theme'
import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { FetchTopicCardList } from '../components'
const LatestTopics = ({ route, navigation }: ScreenProps) => {
  const { theme } = useTheme()
  return (
    <View style={[SylCommon.Layout.fill, { backgroundColor: theme.colors.background }]}>
      <FetchTopicCardList displayStyle="full" nodeName={NODE_TABS.LATEST} />
    </View>
  )
}
export default connect()(LatestTopics)
