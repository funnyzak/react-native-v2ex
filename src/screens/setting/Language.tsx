import * as Actions from '@src/actions'
import { translate, translationTitle } from '@src/i18n'
import { LanguageScreenProps as ScreenProps } from '@src/navigation/routes'
import { SylCommon, useTheme } from '@src/theme'
import { IState, LanguageTagType } from '@src/types'
import React, { useMemo } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { TableList, TableRow } from '../components'

const Language = ({
  languageTag,
  setLocales
}: ScreenProps & {
  languageTag: LanguageTagType
  setLocales: (languageTag: LanguageTagType) => void
}) => {
  const { theme } = useTheme()
  const translationList = useMemo(
    () =>
      (Object.keys(translationTitle) as Array<keyof typeof translationTitle>).map((v) => ({
        tag: v,
        title: v !== 'auto' ? translationTitle[v] : translate('common.auto')
      })),
    [languageTag]
  )

  return (
    <View style={SylCommon.Layout.fill}>
      <TableList containerStyle={[{ marginTop: theme.spacing.small }]}>
        {translationList.map((item, index) => (
          <TableRow
            key={index}
            title={item.title}
            highlightTitle={item.tag === languageTag}
            rightIcon={item.tag === languageTag ? theme.assets.images.icons.table.check : undefined}
            withArrow={false}
            onPress={() => {
              setLocales(item.tag)
            }}
          />
        ))}
      </TableList>
    </View>
  )
}

const mapStateToProps = ({ setting: { languageTag } }: { setting: IState.SettingState }) => {
  return { languageTag }
}

export default connect(mapStateToProps, { setLocales: Actions.setLocales })(Language)
