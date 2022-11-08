import { CheckUpdate } from '@src/components'
import { InterestNodesScreenProps as ScreenProps, NODE_TABS } from '@src/navigation'
import { SylCommon, useTheme } from '@src/theme'
import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { FetchTopicCardList } from '../components'

const HotTopics = ({ route, navigation }: ScreenProps) => {
  const { theme } = useTheme()
  return (
    <View style={SylCommon.Layout.fill}>
      <FetchTopicCardList displayStyle="full" nodeName={NODE_TABS.HOT} />
      <CheckUpdate />
    </View>
  )
}

export default connect()(HotTopics)
