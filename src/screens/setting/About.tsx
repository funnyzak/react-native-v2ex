import React from 'react'
import { connect } from 'react-redux'
import { Image, ImageStyle, Text, ViewStyle, TextStyle, View } from 'react-native'

import { REPO_GITHUB_URL, REPO_NAME } from '@src/config/constants'
import { translate } from '@src/i18n'
import { linking } from '@src/utils'
import { useTheme, SylCommon } from '@src/theme'
import { IState, ITheme } from '@src/types'
import { AboutScreenProps as ScreenProps } from '@src/navigation/routes'

const About = ({
  app
}: ScreenProps & {
  app: IState.AppState
}) => {
  const { theme } = useTheme()
  return (
    <View style={[SylCommon.Layout.fill, SylCommon.View.background(theme)]}>
      <View style={styles.container(theme)}>
        <Image style={styles.logo(theme)} source={theme.assets.images.icons.app.icon} resizeMode="contain" />
        <Text style={styles.desc(theme)}>
          V{app.version.version}(Build {app.version.buildId})
        </Text>
      </View>
      <View style={styles.container(theme)}>
        <Text style={styles.desc(theme)}>{translate('brand.intro')}</Text>
        <View style={styles.content(theme)}>
          <View style={SylCommon.Layout.fill}>
            <Text>{translate('common.repoURL')}：</Text>
            <Text style={styles.link(theme)} onPress={() => linking(REPO_GITHUB_URL)}>
              {REPO_NAME}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.footer(theme)}>
        <Text style={styles.footerText(theme)}>@2022 Funnyzak</Text>
      </View>
    </View>
  )
}

/**
 * @description style
 */
const styles = {
  container: (theme: ITheme): ViewStyle => ({
    paddingHorizontal: theme.spacing.extraLarge,
    paddingBottom: 32
  }),
  logo: (theme: ITheme): ImageStyle => ({
    marginTop: 32,
    borderRadius: 10,
    width: 75,
    height: 75,
    alignSelf: 'center'
  }),
  desc: (theme: ITheme): TextStyle => ({
    alignSelf: 'center',
    paddingTop: theme.spacing.tiny
  }),
  content: (theme: ITheme) => ({
    marginTop: 32
  }),
  link: (theme: ITheme): TextStyle => ({
    color: theme.colors.secondaryLight,
    textDecorationLine: 'underline',
    textAlign: 'justify'
  }),
  footer: (theme: ITheme): ViewStyle => ({
    position: 'absolute',
    bottom: 36,
    alignSelf: 'center'
  }),
  footerText: (theme: ITheme) => ({
    ...theme.typography.captionText,
    color: theme.colors.captionText
  })
}

const mapStateToProps = ({ app }: { app: IState.AppState }) => {
  return { app }
}

export default connect(mapStateToProps)(About)
