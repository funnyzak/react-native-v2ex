import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'

import { TopicList } from '../components'
import { useTheme, SylCommon } from '@src/theme'
import { IState, V2exObject } from '@src/types'
import { NotFound } from '../components'
import { HistoryScreenProps as ScreenProps } from '@src/navigation/routes'

const History = ({
  route,
  navigation,
  HistoryTopics
}: ScreenProps & {
  HistoryTopics?: V2exObject.Topic[]
}) => {
  const { theme } = useTheme()

  const renderContent = () => {
    if (!HistoryTopics) {
      return <NotFound />
    }
    return <TopicList topics={HistoryTopics} canLoadMoreContent={false} searchIndicator={false} />
  }

  return <View style={[SylCommon.Layout.fill, SylCommon.View.background(theme)]}>{renderContent()}</View>
}

const mapStateToProps = ({ member }: IState.State) => {
  const { HistoryTopics } = member
  return {
    HistoryTopics
  }
}

export default connect(mapStateToProps)(History)
