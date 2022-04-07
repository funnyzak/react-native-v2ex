import React from 'react'
import { connect } from 'react-redux'
import { View, Image, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'

import { translate } from '@src/i18n'
import { useTheme, SylCommon } from '@src/theme'
import { HELP_PAGE_LINK } from '@src/config/constants'
import { IState, ITheme, V2exObject } from '@src/types'
import { Text, Button } from '@src/components'
import { MyScreenProps as ScreenProps, ROUTES } from '@src/navigation'
import { logout as logoutAction } from '@src/actions'
import { linking, Alert } from '@src/utils'
import { ProfileInfo } from '../components'

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
    <View>
      <ProfileInfo
        styleType="simple"
        withArrow={true}
        profile={profile}
        containerStyle={{ paddingTop: theme.spacing.small }}
      />
      <View style={SylCommon.Grid.container(theme)}>
        <TouchableOpacity style={SylCommon.Grid.item(theme)} onPress={() => navigation.navigate(ROUTES.Following)}>
          <Text style={SylCommon.Grid.itemValue(theme)}>{'7' || '-'}</Text>
          <Text style={SylCommon.Grid.itemTitle(theme)}>{translate('button.followPeople')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={SylCommon.Grid.item(theme)} onPress={() => navigation.navigate(ROUTES.FavoriteTopics)}>
          <Text style={SylCommon.Grid.itemValue(theme)}>{'10' || '-'}</Text>
          <Text style={SylCommon.Grid.itemTitle(theme)}>{translate('button.likeTopics')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={SylCommon.Grid.item(theme)} onPress={() => navigation.navigate(ROUTES.History)}>
          <Text style={SylCommon.Grid.itemValue(theme)}>{readedTopics ? readedTopics.length : 0}</Text>
          <Text style={SylCommon.Grid.itemTitle(theme)}>{translate('button.readed')}</Text>
        </TouchableOpacity>
      </View>
      <View style={SylCommon.Table.container(theme)}>
        <TouchableOpacity
          style={SylCommon.Table.item(theme)}
          onPress={() => {
            navigation.navigate(ROUTES.ThemeSetting)
          }}>
          <Text style={SylCommon.Table.itemText(theme)}>{translate('common.theme')}</Text>
          <Image style={SylCommon.Table.itemArrow(theme)} source={theme.assets.images.icons.table.rightArrow} />
        </TouchableOpacity>
        <TouchableOpacity
          style={SylCommon.Table.item(theme)}
          onPress={() => {
            navigation.navigate(ROUTES.Language)
          }}>
          <Text style={SylCommon.Table.itemText(theme)}>{translate('common.language')}</Text>
          <Image style={SylCommon.Table.itemArrow(theme)} source={theme.assets.images.icons.table.rightArrow} />
        </TouchableOpacity>
        <TouchableOpacity
          style={SylCommon.Table.item(theme)}
          onPress={() => {
            navigation.navigate(ROUTES.WebViewer, { title: translate('common.help'), url: HELP_PAGE_LINK })
          }}>
          <Text style={SylCommon.Table.itemText(theme)}>{translate('common.help')}</Text>
          <Image style={SylCommon.Table.itemArrow(theme)} source={theme.assets.images.icons.table.rightArrow} />
        </TouchableOpacity>
        <TouchableOpacity
          style={SylCommon.Table.item(theme)}
          onPress={() => {
            navigation.navigate(ROUTES.About)
          }}>
          <Text style={SylCommon.Table.itemText(theme)}>{translate('common.about')}</Text>
          <Image style={SylCommon.Table.itemArrow(theme)} source={theme.assets.images.icons.table.rightArrow} />
        </TouchableOpacity>
      </View>
      <View style={SylCommon.Table.container(theme)}>
        <TouchableOpacity
          style={SylCommon.Table.item(theme)}
          onPress={() => {
            linking(`mailto:${app.aboutUs.email}`)
          }}>
          <Text style={SylCommon.Table.itemText(theme)}>{translate('common.email')}</Text>
          <Text style={SylCommon.Table.itemRightText(theme)}>{app.aboutUs.email}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={SylCommon.Table.item(theme)}
          onPress={() => {
            linking(`https://twitter.com/${app.aboutUs.twitter}`)
          }}>
          <Text style={SylCommon.Table.itemText(theme)}>{translate('common.twitter')}</Text>
          <Text style={SylCommon.Table.itemRightText(theme)}>@{app.aboutUs.twitter}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={SylCommon.Table.item(theme)}
          onPress={() => {
            linking(`https://github.com/${app.aboutUs.github}`)
          }}>
          <Text style={SylCommon.Table.itemText(theme)}>{translate('common.github')}</Text>
          <Text style={SylCommon.Table.itemRightText(theme)}>@{app.aboutUs.github}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logoutBox(theme)}>
        <Button
          style={{}}
          onPress={() => {
            Alert.confirm({ message: translate('confirm.logout'), onOk: logout })
          }}>
          {translate('common.logout')}
        </Button>
      </View>
    </View>
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
