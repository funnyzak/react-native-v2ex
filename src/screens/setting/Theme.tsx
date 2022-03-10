import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, Image, ViewStyle, TextStyle, TouchableOpacity, ImageStyle, Text } from 'react-native'

import { translate } from '@src/i18n'
import * as Actions from '@src/actions'
import { useTheme, themes } from '@src/theme'
import { IState, ITheme, ThemeType } from '@src/types'
import { ThemeScreenProps as ScreenProps } from '@src/navigation/routes'

const themeList = (Object.keys(themes) as Array<keyof typeof themes>).map((v) => ({
  name: v,
  theme: themes[v]
}))

const Theme = ({
  route,
  navigation,
  setTheme
}: ScreenProps & {
  themeType: ThemeType
  setTheme: (themeType: ThemeType) => void
}) => {
  const { theme, resetTheme } = useTheme()
  return (
    <View style={styles.list(theme)}>
      {themeList.map((v) => {
        const { name, theme: _theme } = v
        return (
          <TouchableOpacity
            key={name}
            style={styles.listItem(theme)}
            onPress={() => {
              resetTheme(name)
              setTheme(name)
            }}>
            <Text style={styles.listItemText(theme)}>{translate(`theme.${name}`)}</Text>
            <Image style={styles.listItemArrow(theme)} source={theme.assets.images.icons.arrowRightGrey} />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

/**
 * @description styles settings
 */
const styles = {
  container: (theme: ITheme): ViewStyle => ({
    flex: 1
  }),
  list: (theme: ITheme): ViewStyle => ({
    marginTop: 8,
    backgroundColor: theme.colors.surface
  }),
  listItem: (theme: ITheme): ViewStyle => ({
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }),
  listItemText: (theme: ITheme): TextStyle => ({
    fontSize: 16,
    color: theme.colors.titleText
  }),
  listItemRightText: (theme: ITheme): TextStyle => ({
    fontSize: 12,
    color: theme.colors.bodyText
  }),
  listItemArrow: (theme: ITheme): ImageStyle => ({
    width: 16,
    height: 16
  })
}

const mapStateToProps = ({ setting: { theme } }: { setting: IState.SettingState }) => {
  return { themeType: theme }
}

export default connect(mapStateToProps, { setTheme: Actions.setTheme })(Theme)
