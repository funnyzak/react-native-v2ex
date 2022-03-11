import { NavigationService, ROUTES } from '@src/navigation'
import React from 'react'
import { Pressable, ViewStyle } from 'react-native'
import FastImage, { Source } from 'react-native-fast-image'

interface IProps {
  style?: ViewStyle
  username?: string
  size?: number
  source: Source | number
  onPress?: () => void
}

const AvatarComponent = ({ username, size = 24, source, onPress, style }: IProps) => {
  const _handlePress = () => {
    if (username) {
      NavigationService.navigate(ROUTES.Profile, { username })
    }
    onPress && onPress()
  }

  return (
    <Pressable style={style} onPress={_handlePress}>
      <FastImage
        source={source}
        style={{
          width: size,
          height: size,
          borderRadius: size
        }}
      />
    </Pressable>
  )
}

const avatar = React.memo(AvatarComponent)

export default avatar
