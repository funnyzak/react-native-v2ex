import { logout as logoutAction } from '@src/actions'
import { useToast } from '@src/components/toast'
import { translate } from '@src/i18n'
import { MyScreenProps as ScreenProps, ROUTES } from '@src/navigation'
import { SylCommon, useTheme } from '@src/theme'
import { IState, V2exObject } from '@src/types'
import { linking } from '@src/utils'
import React, { useEffect } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Footer, HeaderButton, ProfileCard, SetStatusBar, TableList, TableRow } from '../components'

const My = ({
  navigation,
  app,
  profile,
  topics,
  likeTopics,
  followPeoples,
  readedTopics
}: ScreenProps &
  IState.State & {
    profile?: V2exObject.Member
    token?: V2exObject.MToken
    readedTopics?: V2exObject.Topic[]
    topics?: V2exObject.Topic[]
    likeTopics: V2exObject.Topic[]
    followPeoples: V2exObject.Member[]
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
          favorites: (likeTopics && likeTopics.length) || 0,
          topics: (topics && topics?.length) || 0,
          history: (readedTopics && readedTopics?.length) || 0,
          following: (followPeoples && followPeoples.length) || 0
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

const mapStateToProps = ({ member, setting, app }: IState.State) => {
  const { profile, token, readedTopics, topics, likeTopics, followPeoples } = member
  return {
    profile,
    topics,
    token,
    likeTopics,
    followPeoples,
    readedTopics,
    setting,
    app
  }
}

export default connect(mapStateToProps, {
  logout: logoutAction
})(My)
