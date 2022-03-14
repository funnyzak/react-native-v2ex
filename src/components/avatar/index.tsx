import { NavigationService, ROUTES } from '@src/navigation'
import React from 'react'
import { Image, Pressable, ViewStyle } from 'react-native'
import { useTheme } from '@src/theme'
import FastImage, { Source } from 'react-native-fast-image'

interface IProps {
  style?: ViewStyle
  username?: string
  size?: number
  source?: Source | number
  onPress?: () => void
}

const AvatarComponent = ({ username, size = 24, source, onPress, style }: IProps) => {
  const { theme } = useTheme()

  const _handlePress = () => {
    if (username) {
      NavigationService.navigate(ROUTES.Profile, { username })
    }
    onPress && onPress()
  }

  return (
    <Pressable style={style} onPress={_handlePress}>
      {source ? (
        <FastImage source={source} style={styles.avatar(size)} />
      ) : (
        <Image source={theme.assets.images.icons.profile} style={styles.avatar(size)} />
      )}
    </Pressable>
  )
}

const avatar = React.memo(AvatarComponent)

const styles = {
  avatar: (size: number) => ({
    width: size,
    height: size,
    borderRadius: size
  })
}

export default avatar
