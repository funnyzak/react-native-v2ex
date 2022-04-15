import React from 'react'
import { View, Text, TextStyle, Pressable, ViewStyle, StyleProp } from 'react-native'
import { ITheme } from '@src/types'
import { SylCommon, useTheme } from '@src/theme'
import { translate } from '@src/i18n'

/**
 * TODO: 可移除
 * NotFound placeholder
 * @param {
 *   text,
 *   buttonText,
 *   buttonPress
 * }
 * @returns
 */
const NoFound = ({
  text,
  containerStyle,
  buttonText,
  buttonPress
}: {
  containerStyle?: StyleProp<ViewStyle>
  text?: string
  buttonText?: string
  buttonPress?: () => void
}) => {
  const { theme } = useTheme()

  const renderContent = () => {
    return (
      <View style={[styles.notFoundTextWrap(), containerStyle]}>
        <Text style={styles.notFoundText(theme)}>{text ?? translate('errors.noFound')}</Text>
        <Pressable onPress={buttonPress} style={[]}>
          <View style={styles.btnWrap(theme)}>
            <Text style={SylCommon.Button.textAction(theme)}>{buttonText}</Text>
          </View>
        </Pressable>
      </View>
    )
  }

  return (
    <>
      <View style={SylCommon.Layout.fill}>{renderContent()}</View>
    </>
  )
}

/**
 * @description styles settings
 */
const styles = {
  notFoundTextWrap: (): TextStyle => ({
    flex: 1,
    paddingVertical: 20,
    justifyContent: 'center'
  }),
  notFoundText: (theme: ITheme): TextStyle => ({
    ...theme.typography.bodyText,
    textAlign: 'center'
  }),
  btnWrap: (theme: ITheme): ViewStyle => ({
    // borderBottomWidth: 2,
    // borderRadius: 5,
    // height: 20,
    // borderColor: theme.colors.secondaryDark
  })
}

export default NoFound
