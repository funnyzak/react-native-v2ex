import React from 'react'
import { connect } from 'react-redux'
import { View, Image, TouchableOpacity, Text } from 'react-native'

import * as Actions from '@src/actions'
import { useTheme, SylCommon } from '@src/theme'
import { IState, LanguageTagType } from '@src/types'
import { LanguageScreenProps as ScreenProps } from '@src/navigation/routes'
import { translationTitle } from '@src/i18n'

const translationList = (Object.keys(translationTitle) as Array<keyof typeof translationTitle>).map((v) => ({
  tag: v,
  title: translationTitle[v]
}))

const Language = ({
  route,
  navigation,
  languageTag,
  setLocales
}: ScreenProps & {
  languageTag: LanguageTagType
  setLocales: (languageTag: LanguageTagType) => void
}) => {
  const { theme } = useTheme()
  return (
    <View style={[SylCommon.Layout.fill, SylCommon.View.background(theme)]}>
      <View style={SylCommon.Table.container(theme)}>
        {translationList.map((v) => {
          const { tag, title } = v
          return (
            <TouchableOpacity
              key={tag}
              style={SylCommon.Table.item(theme)}
              onPress={() => {
                setLocales(tag)
              }}>
              <Text style={SylCommon.Table.itemText(theme, tag === languageTag)}>{title}</Text>
              <Image style={SylCommon.Table.itemArrow(theme)} source={theme.assets.images.icons.arrowRightGrey} />
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}

const mapStateToProps = ({ setting: { languageTag } }: { setting: IState.SettingState }) => {
  return { languageTag }
}

export default connect(mapStateToProps, { setLocales: Actions.setLocales })(Language)
