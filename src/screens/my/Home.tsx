import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { ViewStyle, TextStyle, ScrollView } from 'react-native'

import { translate } from '@src/i18n'
import { SylCommon, useTheme } from '@src/theme'
import { IState, ITheme, V2exObject } from '@src/types'
import { MyScreenProps as ScreenProps, ROUTES } from '@src/navigation'
import { logout as logoutAction } from '@src/actions'
import { linking } from '@src/utils'
import { ProfileCard, TableList, TableRow, Footer, HeaderButton, SetStatusBar } from '../components'
import { useToast } from '@src/components/toast'

const My = ({
  navigation,
  app,
  profile,
  readedTopics
}: ScreenProps &
  IState.State & {
    profile?: V2exObject.Member
    token?: V2exObject.MToken
    readedTopics?: V2exObject.Topic[]
    logout: () => void
  }) => {
  const { theme } = useTheme()
  const { showMessage } = useToast()

  const underConstruction = () => {
    showMessage({
      type: 'error',
      text2: translate('label.underConstruction')
    })
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        profile && (
          <HeaderButton
            containerStyle={[{ marginRight: theme.dimens.layoutContainerHorizontalMargin }]}
            text={translate('common.more')}
            onPress={() => {
              navigation.navigate(ROUTES.WebViewer, { url: profile?.url })
            }}
          />
        )
    })
  }, [])

  return (
    <ScrollView
      overScrollMode={'never'}
      bounces={false}
      style={[SylCommon.Layout.fill, { backgroundColor: theme.colors.background }]}>
      <SetStatusBar />
      <ProfileCard
        info={{
          styleType: 'simple',
          withArrow: true,
          info: profile
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
          leftIcon={theme.assets.images.icons.table.theme}
          withArrow={true}
          onPress={() => {
            navigation.navigate(ROUTES.ThemeSetting)
          }}
        />
        <TableRow
          title={translate(`router.${ROUTES.Language}`)}
          leftIcon={theme.assets.images.icons.table.language}
          withArrow={true}
          onPress={() => {
            navigation.navigate(ROUTES.Language)
          }}
        />
        <TableRow
          title={translate(`router.${ROUTES.CacheSetting}`)}
          leftIcon={theme.assets.images.icons.table.cached}
          withArrow={true}
          onPress={() => {
            navigation.navigate(ROUTES.CacheSetting)
          }}
        />
      </TableList>

      <TableList title={translate('common.integrated')}>
        <TableRow
          title={translate(`button.rate`)}
          leftIcon={theme.assets.images.icons.table.score}
          withArrow={true}
          onPress={underConstruction}
        />
        <TableRow
          title={translate(`button.shareFriend`)}
          leftIcon={theme.assets.images.icons.table.share}
          withArrow={true}
          onPress={underConstruction}
        />
        <TableRow
          title={translate(`router.${ROUTES.URLSchemes}`)}
          leftIcon={theme.assets.images.icons.table.urlschme}
          withArrow={true}
          onPress={() => {
            navigation.navigate(ROUTES.URLSchemes)
          }}
        />
        <TableRow
          title={translate(`router.${ROUTES.OpenSourceLicense}`)}
          leftIcon={theme.assets.images.icons.table.opensource}
          withArrow={true}
          onPress={() => {
            navigation.navigate(ROUTES.OpenSourceLicense)
          }}
        />
        <TableRow
          title={translate(`router.${ROUTES.About}`)}
          leftIcon={theme.assets.images.icons.table.group}
          withArrow={true}
          onPress={() => {
            navigation.navigate(ROUTES.About)
          }}
        />
      </TableList>

      <TableList title={translate('common.feedback')}>
        <TableRow
          title={translate(`common.email`)}
          leftIcon={theme.assets.images.icons.table.email}
          withArrow={true}
          rightText={`${app.aboutUs.email}`}
          onPress={() => {
            linking(`mailto:${app.aboutUs.email}`)
          }}
        />
        <TableRow
          title={translate(`common.twitter`)}
          leftIcon={theme.assets.images.icons.table.twitter}
          withArrow={true}
          rightText={`@${app.aboutUs.twitter}`}
          onPress={() => {
            navigation.navigate(ROUTES.WebViewer, { url: `https://twitter.com/${app.aboutUs.twitter}` })
          }}
        />
        <TableRow
          title={translate(`common.github`)}
          leftIcon={theme.assets.images.icons.table.github}
          withArrow={true}
          rightText={`@${app.aboutUs.github}`}
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
