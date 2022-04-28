/**
 * Created by leon<silenceace@gmail.com> on 22/04/06.
 */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Placeholder, Text } from '@src/components'
import { useAppSelector } from '@src/hooks'
import { useSession } from '@src/hooks/useSession'
import { translate } from '@src/i18n'
import { NavigationService, ROUTES } from '@src/navigation'
import { RootState } from '@src/store'
import { ITheme, useTheme } from '@src/theme'
import React, { ComponentType, useEffect } from 'react'
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native'

/**
 * TextWithIconPress props
 */
export interface TextWithIconPressProps {
  containerStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  text: string
  icon?: ImageSourcePropType
  onPress?: () => void
}

const TextWithIconPress: React.FC<TextWithIconPressProps> = ({
  text,
  icon,
  containerStyle,
  textStyle,
  onPress
}: TextWithIconPressProps) => {
  const { theme } = useTheme()

  const renderContent = () => {
    return (
      <TouchableOpacity style={[styles.textWithIconPress.container(theme), containerStyle]} onPress={onPress}>
        {icon && <Image source={icon} style={styles.textWithIconPress.icon(theme)} />}
        <Text style={[styles.textWithIconPress.text(theme), textStyle]}>{text}</Text>
      </TouchableOpacity>
    )
  }

  return renderContent()
}

/**
 * TextGrid props
 */
export interface TextGridProps {
  columnNum?: number
  list: {
    count?: number
    text: string
    press?: () => void
  }[]
}

const TextGrid: React.FC<TextGridProps> = ({ list, columnNum }: TextGridProps) => {
  const { theme } = useTheme()

  const renderContent = () => {
    return (
      <View style={styles.textGrid.container(theme)}>
        {list.map((item, index) => {
          return (
            <TouchableOpacity key={index} style={styles.textGrid.item(theme, columnNum)} onPress={item.press}>
              <Text style={styles.textGrid.count(theme)}>{item.count ?? 0}</Text>
              <Text style={styles.textGrid.item(theme)}>{item.text}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

  return renderContent()
}

const BorderLine = ({ width = 0.3 }: { width?: number }) => {
  const { theme } = useTheme()
  return <View style={[styles.borderLine(theme), { height: width }]} />
}

const HeaderButton = ({
  containerStyle: style,
  source,
  onPress,
  text,
  textColor
}: {
  containerStyle?: StyleProp<ViewStyle>
  source?: ImageSourcePropType
  text?: string
  textColor?: string
  onPress?: () => void
}) => {
  const { theme } = useTheme()

  return (
    <Pressable onPress={onPress} style={style}>
      {source && <Image source={source} width={24} />}
      {text && <Text style={styles.headerText(theme, textColor)}>{text}</Text>}
    </Pressable>
  )
}

const Footer = () => {
  const { theme } = useTheme()
  const app = useAppSelector((_state: RootState) => _state.app)

  return (
    <TouchableOpacity
      onPress={() => {
        NavigationService.navigate(ROUTES.SiteStat)
      }}
      style={styles.footer(theme)}>
      <Text style={styles.footerItem(theme)}>
        {translate('brand.name')} {app.version.version}({app.version.buildId})
      </Text>
      <Text style={styles.footerItem(theme)}>
        {app.siteInfo?.title} - {app.siteInfo?.description}
      </Text>
    </TouchableOpacity>
  )
}

/**
 * Need Login
 * @returns
 */
const NeedLogin = ({
  containerStyle,
  placeholderBackground,
  mustLogin = true,
  onMount,
  children
}: {
  /**
   * container style
   */
  containerStyle?: StyleProp<ViewStyle>
  placeholderBackground?: string
  mustLogin?: boolean
  onMount?: () => void
  children?: React.ReactNode
}) => {
  const { logined } = useSession()

  useEffect(() => {
    if (logined) {
      onMount && onMount()
    }
  }, [logined])

  return (
    <View style={[{ flex: 1 }, containerStyle]}>
      {!logined && mustLogin ? (
        <Placeholder
          containerStyle={[{ backgroundColor: placeholderBackground }]}
          displayType="text"
          placeholderText={translate('placeholder.needToLogin')}
          buttonText={translate('label.goLogin')}
          buttonPress={() => {
            NavigationService.navigate(ROUTES.SignIn)
          }}
        />
      ) : (
        children
      )}
    </View>
  )
}

export interface TopTabListProps {
  containerStyle?: StyleProp<ViewStyle>
  list?: {
    component: ComponentType<any>
    title: string
  }[]
}

const Tab = createMaterialTopTabNavigator()
const TopTabList = (props: TopTabListProps) => {
  const { theme } = useTheme()
  return (
    <Tab.Navigator
      tabBarPosition="top"
      style={[{ backgroundColor: theme.colors.surface }, props.containerStyle]}
      screenOptions={{
        lazy: true,
        tabBarActiveTintColor: theme.colors.tabActiveTintColor,
        tabBarInactiveTintColor: theme.colors.tabInactiveTintColor,
        tabBarScrollEnabled: true,
        swipeEnabled: false,
        tabBarItemStyle: {
          height: 35,
          width: 'auto',
          minHeight: 35,
          padding: 0,
          marginHorizontal: theme.spacing.tiny,
          alignItems: 'center'
        },
        tabBarStyle: {
          marginHorizontal: theme.dimens.layoutContainerHorizontalMargin,
          elevation: 0,
          backgroundColor: theme.colors.transparent,
          shadowOpacity: 0,
          borderBottomColor: theme.colors.border,
          borderBottomWidth: 0.3
        },
        tabBarLabelStyle: {
          fontSize: theme.typography.labelText.fontSize,
          height: 20
        },
        tabBarIndicatorStyle: {
          backgroundColor: theme.colors.secondary
        }
      }}>
      {props.list?.map((v, i) => (
        <Tab.Screen
          key={i}
          name={'tab-container-' + i.toString()}
          component={v.component}
          options={{ title: v.title }}
        />
      ))}
    </Tab.Navigator>
  )
}

const styles = {
  headerText: (theme: ITheme, textColor?: string): TextStyle => ({
    ...theme.typography.subheadingText,
    color: textColor ?? theme.colors.secondary
  }),
  footer: (theme: ITheme): ViewStyle => ({
    marginVertical: theme.spacing.extraLarge,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }),
  footerItem: (theme: ITheme): TextStyle => ({
    marginBottom: theme.spacing.small,
    ...theme.typography.captionText
  }),
  borderLine: (theme: ITheme): ViewStyle => ({
    width: '100%',
    height: 0.3,
    backgroundColor: theme.colors.border
  }),
  textWithIconPress: {
    container: (theme: ITheme): ViewStyle => ({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start'
    }),
    item: (theme: ITheme): ViewStyle => ({
      marginRight: 3,
      flex: 1
    }),
    icon: (theme: ITheme): ImageStyle => ({
      marginRight: 3,
      width: 15,
      height: 15
    }),
    text: (theme: ITheme): TextStyle => ({
      ...theme.typography.captionText,
      color: theme.colors.captionText
    })
  },
  textGrid: {
    container: (theme: ITheme): ViewStyle => ({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    }),
    item: (theme: ITheme, columnNum?: number): ViewStyle => ({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingVertical: theme.spacing.small
    }),
    count: (theme: ITheme): TextStyle => ({
      alignSelf: 'center',
      ...theme.typography.subheadingTextBold
    }),
    text: (theme: ITheme): TextStyle => ({
      alignSelf: 'center',
      ...theme.typography.bodyText
    })
  }
}

export { TextWithIconPress, NeedLogin, TopTabList, TextGrid, BorderLine, HeaderButton, Footer }
