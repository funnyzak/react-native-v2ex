import React from 'react'
import { connect } from 'react-redux'
import { Image, ImageStyle, Text, ViewStyle, TextStyle, View } from 'react-native'

import { REPO_GITHUB_URL, REPO_NAME } from '@src/config/constants'
import { translate } from '@src/i18n'
import { linking } from '@src/utils'
import { useTheme, SylCommon } from '@src/theme'
import { ITheme } from '@src/types'
import { AboutScreenProps as ScreenProps } from '@src/navigation/routes'

const About = ({}: ScreenProps) => {
  const { theme } = useTheme()
  return (
    <View style={[SylCommon.Layout.fill, SylCommon.View.background(theme), styles.container(theme)]}>
      <Image style={styles.logo(theme)} source={theme.assets.images.icons.icon} resizeMode="contain" />
      <Text style={styles.desc(theme)}>{translate('brand.intro')}</Text>
      <View style={styles.content(theme)}>
        <View style={SylCommon.Layout.fill}>
          <Text>{translate('common.repoURL')}：</Text>
          <Text style={styles.link(theme)} onPress={() => linking(REPO_GITHUB_URL)}>
            {REPO_NAME}
          </Text>
        </View>
      </View>
      <View style={styles.footer(theme)}>
        <Text style={styles.footerText(theme)}>code by funnyzak</Text>
      </View>
    </View>
  )
}

/**
 * @description style.settings(theme)
 */
const styles = {
  container: (theme: ITheme): ViewStyle => ({
    paddingHorizontal: theme.spacing.extraLarge
  }),
  logo: (theme: ITheme): ImageStyle => ({
    marginVertical: 32,
    borderRadius: 10,
    width: 75,
    height: 75,
    alignSelf: 'center'
  }),
  desc: (theme: ITheme): TextStyle => ({
    alignSelf: 'center'
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
    color: theme.colors.secondary
  })
}

export default connect()(About)
