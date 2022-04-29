/**
 * Created by leon<silenceace@gmail.com> on 22/04/28.
 */
import { Text } from '@src/components'
import { ITheme, SylCommon, useTheme } from '@src/theme'
import React from 'react'
import { Image, ImageSourcePropType, StyleProp, View, ViewStyle } from 'react-native'
import { BorderLine } from './General'

/**
 * TabCardContainer props
 */
export interface TabCardContainerProps {
  containerStyle?: StyleProp<ViewStyle>

  title?: string

  icon?: ImageSourcePropType

  children?: React.ReactNode

  hasMore?: boolean
}

const TabCardContainer: React.FC<TabCardContainerProps> = ({
  containerStyle,
  title,
  icon,
  children
}: TabCardContainerProps) => {
  const { theme } = useTheme()

  const renderContent = () => {
    return (
      <View style={[SylCommon.Card.container(theme), styles.container(theme), containerStyle]}>
        <View style={styles.tabBar(theme)}>
          {icon && <Image source={icon} width={20} height={20} style={{ marginRight: theme.spacing.small }} />}
          <Text style={{ ...theme.typography.bodyText }}>{title ?? ''}</Text>
        </View>
        <BorderLine />
        <View style={styles.content(theme)}>{children}</View>
      </View>
    )
  }

  return renderContent()
}

const styles = {
  container: (theme: ITheme): ViewStyle => ({
    flexDirection: 'column'
  }),
  tabBar: (theme: ITheme): ViewStyle => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 36
  }),
  content: (theme: ITheme): ViewStyle => ({
    marginTop: theme.spacing.small
  })
}

export default TabCardContainer
