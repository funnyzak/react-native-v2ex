/**
 * Created by leon<silenceace@gmail.com> on 22/04/01.
 */
import { NavigationService, ROUTES } from '@src/navigation'
import { ITheme, SylCommon, useTheme } from '@src/theme'
import { V2exObject } from '@src/types'
import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { RenderHTML } from '../common'
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
        <TopicCardItem
          topic={info}
          showlastReplay={false}
          onPress={() => {
            NavigationService.navigate(ROUTES.WebViewer, {
              url: info.url
            })
          }}
        />
        <RenderHTML
          htmlString={info.content_rendered}
          contentWidth={theme.dimens.WINDOW_WIDTH - theme.spacing.large * 2}
        />
      </View>
    )
  }

  return renderContent()
}

const styles = {
  container: (theme: ITheme): ViewStyle => ({
    paddingVertical: theme.spacing.medium
  })
}

export default TopicInfo
