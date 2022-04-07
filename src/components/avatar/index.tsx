import { NavigationService, ROUTES } from '@src/navigation'
import { ITheme, useTheme } from '@src/theme'
import React, { useState } from 'react'
import { Image, Pressable, ViewStyle } from 'react-native'
import FastImage, { Source } from 'react-native-fast-image'

interface IProps {
  style?: ViewStyle
  username?: string
  size?: number
  source?: Source | number
  onPress?: () => void
}
/**
 * TODO: default avatar icon
 * Usernames avatar component
 * @param { username, size = 24, source, onPress, style }
 * @returns
 */
const AvatarComponent = ({ username, size = 24, source, onPress, style }: IProps) => {
  const { theme } = useTheme()
  const [loading, setLoading] = useState<boolean>(true)

  const _handlePress = () => {
    if (username) {
      NavigationService.navigate(ROUTES.Profile, { username })
    }
    onPress && onPress()
  }

  return (
    <Pressable style={style} onPress={_handlePress}>
      {source ? (
        <>
          <FastImage
            source={source}
            style={loading ? { width: 0, height: 0 } : styles.avatar(theme, size)}
            onLoadEnd={() => {
              setLoading(false)
            }}
            onError={() => {
              setLoading(false)
            }}
          />
          {loading && <Image source={theme.assets.images.icons.profile.avatar} style={styles.avatar(theme, size)} />}
        </>
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
    borderColor: theme.colors.border,
    borderRadius: size * 0.1
  })
}

export default avatar
