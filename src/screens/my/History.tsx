import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'

import { TopicCardList } from '../components'
import { useTheme, SylCommon } from '@src/theme'
import { IState, V2exObject } from '@src/types'
import { NotFound } from '../components'
import { HistoryScreenProps as ScreenProps } from '@src/navigation/routes'

const History = ({
  route,
  navigation,
  readedTopics
}: ScreenProps & {
  readedTopics?: V2exObject.Topic[]
}) => {
  const { theme } = useTheme()

  const renderContent = () => {
    if (!readedTopics) {
      return <NotFound />
    }
    return <TopicCardList topics={readedTopics} canLoadMoreContent={false} searchIndicator={false} />
  }

  return <View style={[SylCommon.Layout.fill, SylCommon.View.background(theme)]}>{renderContent()}</View>
}

const mapStateToProps = ({ member }: IState.State) => {
  const { readedTopics } = member
  return {
    readedTopics
  }
}

export default connect(mapStateToProps)(History)
