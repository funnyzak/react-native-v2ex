import React from 'react'
import { connect } from 'react-redux'
import { View, Image, TouchableOpacity, Text } from 'react-native'

import { translate } from '@src/i18n'
import * as Actions from '@src/actions'
import { useTheme, themes, SylCommon } from '@src/theme'
import { IState, ThemeType } from '@src/types'
import { ThemeScreenProps as ScreenProps } from '@src/navigation/routes'

const themeList = (Object.keys(themes) as Array<keyof typeof themes>).map((v) => ({
  name: v,
  theme: themes[v]
}))

const Theme = ({
  route,
  navigation,
  themeName,
  setTheme
}: ScreenProps & {
  themeName: ThemeType
  setTheme: (themeType: ThemeType) => void
}) => {
  const { theme, resetTheme } = useTheme()

  return (
    <View style={[SylCommon.Layout.fill, SylCommon.View.background(theme)]}>
      <View style={SylCommon.Table.container(theme)}>
        {themeList.map((v) => {
          const { name, theme: _theme } = v
          return (
            <TouchableOpacity
              key={name}
              style={SylCommon.Table.item(theme)}
              onPress={() => {
                resetTheme(name)
                setTheme(name)
              }}>
              <Text style={SylCommon.Table.itemText(theme, name === themeName)}>{translate(`theme.${name}`)}</Text>
              <Image style={SylCommon.Table.itemArrow(theme)} source={theme.assets.images.icons.arrowRightGrey} />
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}

const mapStateToProps = ({ setting: { theme } }: { setting: IState.SettingState }) => {
  return { themeName: theme }
}

export default connect(mapStateToProps, { setTheme: Actions.setTheme })(Theme)
