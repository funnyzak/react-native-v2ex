import React from 'react'
import { View, Text, TextStyle } from 'react-native'
import { ITheme } from '@src/types'
import { SylCommon, useTheme } from '@src/theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { translate } from 'i18n-js'

const NoFound = ({
  text,
  buttonText,
  buttonPress
}: {
  text?: string
  buttonText?: string
  buttonPress?: () => void
}) => {
  const { theme } = useTheme()

  const renderContent = () => {
    return (
      <View style={styles.notFoundTextWrap()}>
        <Text style={styles.notFoundText(theme)}>{text ?? translate('errors.noFound')}</Text>
        <TouchableOpacity onPress={buttonPress}>
          <Text style={SylCommon.Button.textAction(theme)}>{buttonText}</Text>
        </TouchableOpacity>
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
  })
}

export default NoFound
