import { URLSchemeList } from '@src/config/constants'
import { translate } from '@src/i18n'
import { URLSchemescreenProps as ScreenProps } from '@src/navigation'
import { SylCommon, useTheme } from '@src/theme'
import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { TableList, TableRow } from '../components'
import { useToast } from '@src/components/toast'

const URLSchemes = ({}: ScreenProps) => {
  const { theme } = useTheme()
  const { showMessage } = useToast()

  return (
    <View style={SylCommon.Layout.fill}>
      <TableList containerStyle={[{ marginTop: theme.spacing.small }]}>
        <TableRow
          title={translate('label.openApp')}
          description={URLSchemeList.OpenApp}
          withArrow={false}
          onPress={() => {
            // TODO: open app
            showMessage({
              type: 'error',
              text2: translate('label.underConstruction')
            })
          }}
        />
      </TableList>
    </View>
  )
}

export default connect()(URLSchemes)
