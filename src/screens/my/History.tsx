import { Placeholder } from '@src/components'
import { translate } from '@src/i18n'
import { HistoryScreenProps as ScreenProps } from '@src/navigation/routes'
import { RootState } from '@src/store'
import { SylCommon, useTheme } from '@src/theme'
import { V2exObject } from '@src/types'
import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { TopicCardList } from '../components'

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
      return <Placeholder />
    }
    return <TopicCardList topics={readedTopics} canLoadMoreContent={false} searchIndicator={false} />
  }

  return <View style={[SylCommon.Layout.fill, SylCommon.View.background(theme)]}>{renderContent()}</View>
}

const mapStateToProps = ({ member }: RootState) => {
  const { readedTopics } = member
  return {
    readedTopics
  }
}

export default connect(mapStateToProps)(History)
