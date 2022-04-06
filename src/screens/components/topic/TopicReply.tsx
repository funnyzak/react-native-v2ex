/**
 * Created by leon<silenceace@gmail.com> on 22/04/01.
 */
import React from 'react'
import { View, ViewStyle, TextStyle } from 'react-native'

import { Text, Button, Spinner, Placeholder } from '@src/components'
import { ITheme, SylCommon, useTheme } from '@src/theme'
import { translate } from '@src/i18n'
import { NavigationService, ROUTES } from '@src/navigation'
import { V2exObject } from '@src/types'

/**
 * // TODO: TopicReply
 * TopicReply props
 */
export interface TopicReplyProps {
  /**
   * TopicReply width
   */
  width?: number | string

  /**
   * TopicReply height
   */
  height?: number | string
}

const TopicReply: React.FC<TopicReplyProps> = ({ width, height }: TopicReplyProps) => {
  const renderContent = () => {
    return (
      <View>
        <Text>Hello World, TopicReply.</Text>
      </View>
    )
  }

  return renderContent()
}

const styles = {
  container: (theme: ITheme): ViewStyle => ({
    flex: 1
  })
}

export default TopicReply
