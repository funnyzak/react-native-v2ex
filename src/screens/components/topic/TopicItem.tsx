import FastImage from 'react-native-fast-image'
import * as React from 'react'
import { View, TouchableOpacity, Text, ImageStyle, ViewStyle, TextStyle } from 'react-native'
import { IState, ITheme, V2exObject } from '@src/types'
import { useTheme } from '@src/theme'

const TopicItem = ({
  topic,
  onRowPress,
  imageStyle,
  infoStyle,
  textStyle,
  viewContainerStyle,
  columnContainerStyle
}: {
  topic: V2exObject.Topic
  onRowPress?: (topic: V2exObject.Topic) => void
  imageStyle?: ImageStyle
  infoStyle?: ViewStyle
  textStyle?: TextStyle
  viewContainerStyle?: ViewStyle
  columnContainerStyle?: ViewStyle
}) => {
  const { theme } = useTheme()

  return (
    <View>
      <TouchableOpacity
        style={[styles.containerStyle(theme), columnContainerStyle]}
        onPress={() => {
          if (!onRowPress) return
          onRowPress(topic)
        }}>
        <Text>{topic.title}.</Text>
      </TouchableOpacity>
    </View>
  )
}

/**
 * @description styles settings
 */
const styles = {
  containerStyle: (theme: ITheme): ViewStyle => ({
    flexDirection: 'row',
    flex: 1,
    backgroundColor: theme.colors.surface
  }),
  infoStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 2
  },
  textStyle: (theme: ITheme) => ({
    padding: theme.spacing.small,
    marginBottom: theme.spacing.medium
  }),
  imageStyle: (theme: ITheme) => ({
    height: theme.dimens.avatarSize,
    margin: theme.spacing.small,
    borderWidth: 1,
    borderColor: theme.colors.border,
    width: null
  })
}

export default TopicItem
