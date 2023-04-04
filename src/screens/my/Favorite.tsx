/**
 * Created by Leon<silenceace@gmail.com> at 2022-04-01 17:54:02.
 * Last modified at 2022-10-20 18:07:33
 */

import { Placeholder } from '@src/components'
import { FavoriteTopicsScreenProps as ScreenProps } from '@src/navigation'
import { RootState } from '@src/store'
import { SylCommon, useTheme } from '@src/theme'
import { AppObject } from '@src/types'
import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { NeedLogin, TopicCardList } from '../components'
const FavoriteTopics = ({
  likeTopics
}: ScreenProps & {
  likeTopics: AppObject.Topic[]
}) => {
  const { theme } = useTheme()
  const renderContent = () => {
    if (!likeTopics) {
      return <Placeholder />
    }
    return (
      <NeedLogin>
        <TopicCardList topics={[...likeTopics].reverse()} canLoadMoreContent={false} searchIndicator={false} />
      </NeedLogin>
    )
  }
  return <View style={[SylCommon.Layout.fill, SylCommon.View.background(theme)]}>{renderContent()}</View>
}
const mapStateToProps = ({ member }: RootState) => {
  const { likeTopics } = member
  return {
    likeTopics
  }
}
export default connect(mapStateToProps)(FavoriteTopics)
