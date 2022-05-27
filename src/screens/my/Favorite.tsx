/**
 * Created by leon<silenceace@gmail.com> on 22/05/27.
 */
import { Placeholder } from '@src/components'
import { FavoriteTopicsScreenProps as ScreenProps } from '@src/navigation'
import { RootState } from '@src/store'
import { SylCommon, useTheme } from '@src/theme'
import { V2exObject } from '@src/types'
import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { NeedLogin, TopicCardList } from '../components'

const FavoriteTopics = ({
  likeTopics
}: ScreenProps & {
  likeTopics: V2exObject.Topic[]
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
