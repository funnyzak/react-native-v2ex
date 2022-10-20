import { translate } from '@src/i18n'
import { SiteStatScreenProps as ScreenProps } from '@src/navigation/routes'
import { SylCommon, useTheme } from '@src/theme'
import { IState, AppObject } from '@src/types'
import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { TableList, TableRow } from '../components'

const SiteStat = ({
  siteStat
}: ScreenProps & {
  siteStat?: AppObject.SiteStat
}) => {
  const { theme } = useTheme()
  return (
    <View style={SylCommon.Layout.fill}>
      <TableList containerStyle={[{ marginTop: theme.spacing.small }]}>
        <TableRow
          title={translate('label.registedMember')}
          value={siteStat?.member_max.toString() ?? 'None'}
          withArrow={false}
        />
        <TableRow
          title={translate('label.topicCount')}
          value={siteStat?.topic_max.toString() ?? 'None'}
          withArrow={false}
        />
      </TableList>
    </View>
  )
}

const mapStateToProps = ({ app: { siteStat } }: { app: IState.AppState }) => {
  return { siteStat }
}

export default connect(mapStateToProps)(SiteStat)
