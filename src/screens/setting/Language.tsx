import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, Image, ViewStyle, TextStyle, TouchableOpacity, ImageStyle } from 'react-native'

import { translate } from '@src/i18n'
import * as Actions from '@src/actions'
import { useTheme } from '@src/theme'
import { IState, ITheme, LanguageTagType } from '@src/types'
import { Text, Spinner } from '@src/components'
import { LanguageScreenProps as ScreenProps } from '@src/navigation/routes'
import { translationTitle } from '@src/i18n'

const translationList = (Object.keys(translationTitle) as Array<keyof typeof translationTitle>).map((v) => ({
  tag: v,
  title: translationTitle[v]
}))

const Language = ({
  route,
  navigation,
  setLocales
}: ScreenProps & {
  languageTag: LanguageTagType
  setLocales: (languageTag: LanguageTagType) => void
}) => {
  const { theme } = useTheme()
  return (
    <View style={styles.list(theme)}>
      {translationList.map((v) => {
        const { tag, title } = v
        return (
          <TouchableOpacity
            key={tag}
            style={styles.listItem(theme)}
            onPress={() => {
              setLocales(tag)
            }}>
            <Text style={styles.listItemText(theme)}>{title}</Text>
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

/**
 * default props
 */
Language.defaultProps = {
  loading: false
}

const mapStateToProps = ({ setting: { languageTag } }: { setting: IState.SettingState }) => {
  return { languageTag }
}

export default connect(mapStateToProps, { setLocales: Actions.setLocales })(Language)
