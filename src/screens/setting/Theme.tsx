import * as Actions from '@src/actions'
import { translate } from '@src/i18n'
import { ThemeSettingScreenProps as ScreenProps } from '@src/navigation/routes'
import { SylCommon, themes, useTheme } from '@src/theme'
import { IState, ThemeType } from '@src/types'
import React, { useMemo } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { TableList, TableRow } from '../components'

const Theme = ({
  themeName,
  setTheme
}: ScreenProps & {
  themeName: ThemeType
  setTheme: (themeType: ThemeType) => void
}) => {
  const themeList = useMemo(
    () =>
      (Object.keys(themes) as Array<keyof typeof themes>).map((v) => ({
        name: v,
        theme: themes[v]
      })),
    [themeName]
  )
  const { theme, resetTheme } = useTheme()

  return (
    <View style={SylCommon.Layout.fill}>
      <TableList containerStyle={[{ marginTop: theme.spacing.small }]}>
        {themeList.map((item, index) => (
          <TableRow
            key={index}
            title={translate(`theme.${item.name}`)}
            highlightTitle={item.name === themeName}
            rightIcon={item.name === themeName ? theme.assets.images.icons.table.check : undefined}
            withArrow={false}
            onPress={() => {
              resetTheme(item.name)
              setTheme(item.name)
            }}
          />
        ))}
      </TableList>
    </View>
  )
}

const mapStateToProps = ({ setting: { theme } }: { setting: IState.SettingState }) => {
  return { themeName: theme }
}

export default connect(mapStateToProps, { setTheme: Actions.setTheme })(Theme)
