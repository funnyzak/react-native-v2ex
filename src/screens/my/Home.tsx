import React from 'react'
import { connect } from 'react-redux'
import { View, Image, ViewStyle, TextStyle, TouchableOpacity, ScrollView } from 'react-native'

import { translate } from '@src/i18n'
import { useTheme, SylCommon } from '@src/theme'
import { HELP_PAGE_LINK } from '@src/config/constants'
import { IState, ITheme, V2exObject } from '@src/types'
import { Text, Button } from '@src/components'
import { MyScreenProps as ScreenProps, ROUTES } from '@src/navigation'
import { logout as logoutAction } from '@src/actions'
import { linking, Alert } from '@src/utils'
import { ProfileCard, TableList, TableRow, Footer } from '../components'

const My = ({
  navigation,
  app,
  profile,
  readedTopics,
  logout
}: ScreenProps &
  IState.State & {
    profile?: V2exObject.Member
    token?: V2exObject.MToken
    readedTopics?: V2exObject.Topic[]
    logout: () => void
  }) => {
  const { theme } = useTheme()

  return (
    <ScrollView>
      <ProfileCard
        info={{
          styleType: 'simple',
          withArrow: true,
          profile: profile
        }}
        stat={{
          favorites: 0,
          topics: 0,
          history: readedTopics?.length ?? 0,
          following: 0
        }}
      />
      <TableList title={translate('common.setting')}>
        <TableRow
          title={translate(`router.${ROUTES.ThemeSetting}`)}
          icon={theme.assets.images.icons.table.theme}
          withArrow={true}
          onPress={() => {
            navigation.navigate(ROUTES.ThemeSetting)
          }}
        />
        <TableRow
          title={translate(`router.${ROUTES.Language}`)}
          icon={theme.assets.images.icons.table.language}
          withArrow={true}
          onPress={() => {
            navigation.navigate(ROUTES.Language)
          }}
        />
        <TableRow
          title={translate(`router.${ROUTES.CacheSetting}`)}
          icon={theme.assets.images.icons.table.cached}
          withArrow={true}
          onPress={() => {
            navigation.navigate(ROUTES.CacheSetting)
          }}
        />
      </TableList>

      <TableList title={translate('common.integrated')}>
        <TableRow
          title={translate(`button.rate`)}
          icon={theme.assets.images.icons.table.score}
          withArrow={true}
          onPress={() => {}}
        />
        <TableRow
          title={translate(`button.shareFriend`)}
          icon={theme.assets.images.icons.table.share}
          withArrow={true}
          onPress={() => {}}
        />
        <TableRow
          title={translate(`router.${ROUTES.URLSchemes}`)}
          icon={theme.assets.images.icons.table.urlschme}
          withArrow={true}
          onPress={() => {
            navigation.navigate(ROUTES.URLSchemes)
          }}
        />
        <TableRow
          title={translate(`router.${ROUTES.OpenSourceLicense}`)}
          icon={theme.assets.images.icons.table.opensource}
          withArrow={true}
          onPress={() => {
            navigation.navigate(ROUTES.OpenSourceLicense)
          }}
        />
        <TableRow
          title={translate(`router.${ROUTES.About}`)}
          icon={theme.assets.images.icons.table.group}
          withArrow={true}
          onPress={() => {
            navigation.navigate(ROUTES.About)
          }}
        />
      </TableList>

      <TableList title={translate('common.feedback')}>
        <TableRow
          title={translate(`common.email`)}
          icon={theme.assets.images.icons.table.email}
          withArrow={true}
          onPress={() => {
            linking(`mailto:${app.aboutUs.email}`)
          }}
        />
        <TableRow
          title={translate(`common.twitter`)}
          icon={theme.assets.images.icons.table.twitter}
          withArrow={true}
          onPress={() => {
            navigation.navigate(ROUTES.WebViewer, { url: `https://twitter.com/${app.aboutUs.twitter}` })
          }}
        />
        <TableRow
          title={translate(`common.github`)}
          icon={theme.assets.images.icons.table.github}
          withArrow={true}
          onPress={() => {
            navigation.navigate(ROUTES.WebViewer, { url: `https://github.com/${app.aboutUs.github}` })
          }}
        />
      </TableList>
      <Footer />
    </ScrollView>
  )
}

/**
 * @description styles.settings
 */
const styles = {
  container: (theme: ITheme): ViewStyle => ({
    backgroundColor: theme.colors.background
  }),
  loginTip: (theme: ITheme): TextStyle => ({
    fontSize: 12,
    color: theme.colors.secondary
  }),
  logoutBox: (theme: ITheme): ViewStyle => ({
    marginTop: 30,
    flex: 1,
    width: '100%',
    alignItems: 'center'
  })
}

const mapStateToProps = ({ member, setting, app }: IState.State) => {
  const { profile, token, readedTopics } = member
  return {
    profile,
    token,
    readedTopics,
    setting,
    app
  }
}

export default connect(mapStateToProps, {
  logout: logoutAction
})(My)
