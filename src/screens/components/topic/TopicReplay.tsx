/**
 * Created by leon<silenceace@gmail.com> on 22/04/28.
 */
import { translate } from '@src/i18n'
import { ITheme, useTheme } from '@src/theme'
import { V2exObject } from '@src/types'
import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { ReplayList } from '.'
import { TabCardContainer } from '../common'

/**
 * TopicReplay props
 */
export interface TopicReplayProps {
  containerStyle?: StyleProp<ViewStyle>

  info: V2exObject.Topic
}

const TopicReplay: React.FC<TopicReplayProps> = ({ containerStyle, info }: TopicReplayProps) => {
  const { theme } = useTheme()

  const renderContent = () => {
    return (
      <TabCardContainer
        containerStyle={[styles.container(theme), containerStyle]}
        icon={theme.assets.images.icons.tabbar.title.comment}
        title={translate('label.latestReplay')}>
        <ReplayList topicId={info.id} />
      </TabCardContainer>
    )
  }

  return renderContent()
}

const styles = {
  container: (theme: ITheme): ViewStyle => ({
    marginTop: theme.spacing.small,
    flex: 1
  })
}

export default TopicReplay
