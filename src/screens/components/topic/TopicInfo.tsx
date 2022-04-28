/**
 * Created by leon<silenceace@gmail.com> on 22/04/01.
 */
import RenderHtml from 'react-native-render-html'

import { Avatar, Text } from '@src/components'
import { translate } from '@src/i18n'
import { NavigationService, ROUTES } from '@src/navigation'
import { ITheme, SylCommon, useTheme } from '@src/theme'
import { V2exObject } from '@src/types'
import dayjs from 'dayjs'
import React, { useMemo } from 'react'
import { Image, StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native'
import { TextWithIconPress } from '../common'
import TopicCardItem from './TopicCardItem'

/**
 * TopicInfo props
 */
export interface TopicInfoProps {
  /**
   * container style
   */
  containerStyle?: StyleProp<ViewStyle>

  /**
   * TopicInfo width
   */
  info: V2exObject.Topic
}

const TopicInfo: React.FC<TopicInfoProps> = ({ containerStyle, info }: TopicInfoProps) => {
  const { theme } = useTheme()

  const renderContent = () => {
    return (
      <View style={[SylCommon.Card.container(theme), styles.container(theme), containerStyle]}>
        <TopicCardItem topic={info} />
        <RenderHtml
          source={{
            html: `<div style="color:${theme.colors.bodyText}">${info.content_rendered}</div>` || '<p></p>'
          }}
          contentWidth={theme.dimens.WINDOW_WIDTH - theme.spacing.large * 2}
        />
      </View>
    )
  }

  return renderContent()
}

const styles = {
  container: (theme: ITheme): ViewStyle => ({
    paddingTop: theme.spacing.medium
  })
}

export default TopicInfo
