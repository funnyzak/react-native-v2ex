/**
 * Created by leon<silenceace@gmail.com> on 22/04/14.
 */

import { HELP_PAGE_LINK, RELEASE_NOTES_LINK, REPO_GITHUB_URL, REPO_NAME } from '@src/config/constants'
import { translate } from '@src/i18n'
import { AboutScreenProps as ScreenProps, ROUTES } from '@src/navigation'
import { SylCommon, useTheme } from '@src/theme'
import { IState, ITheme } from '@src/types'
import React from 'react'
import { Image, ImageStyle, Text, TextStyle, View, ViewStyle } from 'react-native'
import { connect } from 'react-redux'
import { SetStatusBar, TableList, TableRow } from '../components'

const About = ({
  app,
  navigation
}: ScreenProps & {
  app: IState.AppState
}) => {
  const { theme } = useTheme()
  return (
    <View style={[SylCommon.Layout.fill, { backgroundColor: theme.colors.background, display: 'flex' }]}>
      <SetStatusBar />
      <View style={{ flex: 1 }}>
        <View style={styles.logoContainer(theme)}>
          <Image style={styles.logo(theme)} source={theme.assets.images.icons.app.icon} resizeMode="contain" />
          <Text style={styles.desc(theme)}>
            {translate('brand.name')} {app.version.version}({app.version.buildId})
          </Text>
        </View>
        <TableList title={translate('common.about')}>
          <TableRow
            title={translate(`common.author`)}
            withArrow={true}
            onPress={() => {
              navigation.navigate(ROUTES.WebViewer, { title: app.aboutUs.author, url: `${app.aboutUs.site}` })
            }}
          />
          <TableRow
            title={translate(`router.${ROUTES.ChangeLog}`)}
            withArrow={true}
            onPress={() => {
              navigation.navigate(ROUTES.WebViewer, {
                title: translate(`router.${ROUTES.ChangeLog}`),
                url: RELEASE_NOTES_LINK
              })
            }}
          />
          <TableRow
            title={translate(`router.${ROUTES.HowToUse}`)}
            withArrow={true}
            onPress={() => {
              navigation.navigate(ROUTES.WebViewer, {
                title: translate(`router.${ROUTES.HowToUse}`),
                url: HELP_PAGE_LINK
              })
            }}
          />
          <TableRow
            title={translate(`router.${ROUTES.PrivacyPolicy}`)}
            withArrow={true}
            onPress={() => {
              navigation.navigate(ROUTES.PrivacyPolicy)
            }}
          />
          <TableRow
            title={translate(`common.repoURL`)}
            withArrow={true}
            rightText={REPO_NAME}
            onPress={() => {
              navigation.navigate(ROUTES.WebViewer, { url: `${REPO_GITHUB_URL}` })
            }}
          />
        </TableList>
        <TableList title={translate('common.contact')}>
          <TableRow
            title={translate(`common.weibo`)}
            withArrow={true}
            rightText={`@${app.aboutUs.author}`}
            onPress={() => {
              navigation.navigate(ROUTES.WebViewer, { url: `https://weibo.com/u/${app.aboutUs.weibo}` })
            }}
          />
          <TableRow
            title={translate(`common.discord`)}
            withArrow={true}
            rightText={`@${app.aboutUs.author}`}
            onPress={() => {
              navigation.navigate(ROUTES.WebViewer, { url: `${app.aboutUs.discord}` })
            }}
          />
          <TableRow
            title={translate(`common.telegram`)}
            withArrow={true}
            rightText={`@${app.aboutUs.telegram}`}
            onPress={() => {
              navigation.navigate(ROUTES.WebViewer, { url: `https://t.me/${app.aboutUs.telegram}` })
            }}
          />
        </TableList>
      </View>
      <Text style={styles.footerText(theme)}>{app.aboutUs.copyright}</Text>
    </View>
  )
}

/**
 * @description style
 */
const styles = {
  logoContainer: (theme: ITheme): ViewStyle => ({
    height: 170,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }),
  logo: (theme: ITheme): ImageStyle => ({
    marginTop: 32,
    borderRadius: 10,
    width: 75,
    height: 75,
    alignSelf: 'center'
  }),
  desc: (theme: ITheme): TextStyle => ({
    ...theme.typography.labelText,
    color: theme.colors.captionText,
    paddingTop: theme.spacing.tiny
  }),
  footerText: (theme: ITheme): TextStyle => ({
    height: 50,
    alignSelf: 'center',
    ...theme.typography.bodyText,
    color: theme.colors.captionText
  })
}

const mapStateToProps = ({ app }: { app: IState.AppState }) => {
  return { app }
}

export default connect(mapStateToProps)(About)
