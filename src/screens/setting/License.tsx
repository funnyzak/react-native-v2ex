/**
 * Created by Leon<silenceace@gmail.com> at 2022-03-30 22:08:54.
 * Last modified at 2022-04-19 17:04:45
 */

import { OPENSOURCE_LIST } from '@src/config/constants'
import { OpenSourceLicenseScreenProps as ScreenProps, ROUTES } from '@src/navigation/routes'
import { SylCommon, useTheme } from '@src/theme'
import { linking } from '@src/utils'
import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { TableList, TableRow } from '../components'
const OpenSourceLicense = ({ navigation }: ScreenProps) => {
  const { theme } = useTheme()
  return (
    <View style={SylCommon.Layout.fill}>
      <TableList containerStyle={[{ marginTop: theme.spacing.small }]}>
        {OPENSOURCE_LIST.map((item, index) => (
          <TableRow
            key={index}
            title={item.name}
            withArrow={true}
            onPress={() => {
              navigation.navigate(ROUTES.WebViewer, { url: item.repoUrl })
            }}
          />
        ))}
      </TableList>
    </View>
  )
}
export default connect()(OpenSourceLicense)
