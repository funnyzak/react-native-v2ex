import { NavigationService, ROUTES } from '@src/navigation'
import { ITheme, useTheme } from '@src/theme'
import React, { useCallback, useRef } from 'react'
import { Animated, Image, Pressable, ViewStyle } from 'react-native'
import FastImage, { Source } from 'react-native-fast-image'

interface IProps {
  style?: ViewStyle
  username?: string
  size?: number
  source?: Source
  onPress?: () => void
}
/**
 * Usernames avatar component
 * @param { username, size = 24, source, onPress, style }
 * @returns
 */
const AvatarComponent = ({ username, size = 24, source, onPress, style }: IProps) => {
  const { theme } = useTheme()
  const avatarImageScaleValue = useRef(new Animated.Value(0)).current

  const _handlePress = useCallback(() => {
    if (username) {
      NavigationService.navigate(ROUTES.Profile, { username })
    }
    onPress && onPress()
  }, [username, onPress])

  const onAvatarImageLoadEnd = () => {
    Animated.timing(avatarImageScaleValue, {
      toValue: 1,
      duration: 300,
      delay: 5,
      useNativeDriver: true
    }).start()
  }

  return (
    <Pressable style={style} onPress={_handlePress}>
      {source ? (
        <Animated.View style={{ opacity: avatarImageScaleValue }}>
          <FastImage
            source={{
              uri: source.uri,
              cache: FastImage.cacheControl.web
            }}
            onLoadEnd={onAvatarImageLoadEnd}
            onError={onAvatarImageLoadEnd}
            style={styles.avatar(theme, size)}
          />
        </Animated.View>
      ) : (
        <Image source={theme.assets.images.icons.profile.avatar} style={styles.avatar(theme, size)} />
      )}
    </Pressable>
  )
}

const avatar = React.memo(AvatarComponent)

const styles = {
  avatar: (theme: ITheme, size: number) => ({
    width: size,
    height: size,
    borderWidth: 0.3,
    backgroundColor: theme.colors.border,
    borderColor: theme.colors.border,
    borderRadius: size * 0.12
  })
}

export default avatar
