/**
 * Created by leon<silenceace@gmail.com> on 22/04/07.
 */
import { Placeholder } from '@src/components'
import { translate } from '@src/i18n'
import { FollowingScreenProps as ScreenProps } from '@src/navigation'
import { RootState } from '@src/store'
import { SylCommon, useTheme } from '@src/theme'
import { V2exObject } from '@src/types'
import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { NeedLogin, ProfileCardList } from '../components'

const Following = ({
  followPeoples
}: ScreenProps & {
  followPeoples: V2exObject.Member[]
}) => {
  const { theme } = useTheme()
  const renderContent = () => {
    if (!followPeoples || followPeoples.length === 0) {
      return <Placeholder placeholderText={translate('placeholder.noFollow')} />
    }
    return (
      <NeedLogin>
        <ProfileCardList members={[...followPeoples].reverse()} canLoadMoreContent={false} searchIndicator={false} />
      </NeedLogin>
    )
  }

  return <View style={[SylCommon.Layout.fill, SylCommon.View.background(theme)]}>{renderContent()}</View>
}

const mapStateToProps = ({ member: { followPeoples } }: RootState) => {
  return {
    followPeoples
  }
}

export default connect(mapStateToProps)(Following)
