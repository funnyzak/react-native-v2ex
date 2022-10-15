/**
 * Created by leon<silenceace@gmail.com> on 22/05/22.
 */
import { NavigationService, ROUTES } from '@src/navigation'
import { useTheme } from '@src/theme'
import { ITheme } from '@src/types'
import React from 'react'
import { Alert, GestureResponderEvent, StyleProp, View, ViewStyle } from 'react-native'
import RenderHtml, { MixedStyleRecord } from 'react-native-render-html'

const RenderHTML = ({
  htmlString,
  containerStyle,
  contentWidth
}: {
  containerStyle?: StyleProp<ViewStyle>
  htmlString?: string
  contentWidth?: number
}) => {
  const { theme } = useTheme()
  const source = {
    html: htmlString ?? ''
  }

  return (
    <View style={containerStyle}>
      <RenderHtml
        tagsStyles={contentTagsStyles(theme)}
        source={source}
        contentWidth={contentWidth}
        renderersProps={renderersProps}
      />
    </View>
  )
}

const contentTagsStyles = (theme: ITheme): MixedStyleRecord => {
  return {
    body: {
      color: theme.colors.bodyText
    },
    div: {
      color: theme.colors.bodyText
    },
    p: {
      color: theme.colors.bodyText
    },
    a: {
      textDecorationLine: 'none',
      color: theme.colors.secondary
    }
  }
}

const renderersProps = {
  a: {
    onPress: (event: GestureResponderEvent, href: string) => {
      if (href.startsWith('http')) {
        NavigationService.navigate(ROUTES.WebViewer, {
          url: href
        })
        return
      }

      const regexp = /about:\/{3}([\w]+)\/(\w+)/
      const match = href.match(regexp)
      const type = match && match.length > 1 ? match[1] : ''

      if (type === 't' && match && match[2] !== null) {
        NavigationService.navigate(ROUTES.TopicDetail, { topicId: match[2] })
      } else if (type === 'member' && match && match[2] !== null) {
        NavigationService.navigate(ROUTES.Profile, { username: match[2] })
      } else if (type === 'go' && match && match[2] !== null) {
        NavigationService.navigate(ROUTES.NodeDetail, {
          nodeName: match[2]
        })
      }
    }
  }
}

export default RenderHTML
