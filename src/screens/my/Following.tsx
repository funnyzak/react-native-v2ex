/**
 * Created by Leon<silenceace@gmail.com> at 2022-04-01 17:54:02.
 * Last modified at 2022-10-20 18:07:33
 */

import { Placeholder } from '@src/components'
import { translate } from '@src/i18n'
import { FollowingScreenProps as ScreenProps } from '@src/navigation'
import { RootState } from '@src/store'
import { SylCommon, useTheme } from '@src/theme'
import { AppObject } from '@src/types'
import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { NeedLogin, ProfileCardList } from '../components'
const Following = ({
  followPeoples
}: ScreenProps & {
  followPeoples: AppObject.Member[]
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
