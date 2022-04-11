import { OPENSOURCE_LIST } from '@src/config/constants'
import { OpenSourceLicenseScreenProps as ScreenProps, ROUTES } from '@src/navigation/routes'
import { useTheme } from '@src/theme'
import { linking } from '@src/utils'
import React from 'react'
import { connect } from 'react-redux'
import { TableList, TableRow } from '../components'

const OpenSourceLicense = ({ navigation }: ScreenProps) => {
  const { theme } = useTheme()
  return (
    <TableList containerStyle={[{ marginTop: theme.spacing.tiny }]}>
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
  )
}

export default connect()(OpenSourceLicense)
