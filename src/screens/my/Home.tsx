import React from 'react'
import { connect } from 'react-redux'
import { View, Image, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'

import { translate } from '@src/i18n'
import { useTheme, SylCommon } from '@src/theme'
import { HELP_PAGE_LINK } from '@src/config/constants'
import { IState, ITheme, V2exObject } from '@src/types'
import { Text, Button, Avatar } from '@src/components'
import { MyScreenProps as ScreenProps, ROUTES } from '@src/navigation'
import * as Actions from '@src/actions'
import * as utils from '@src/utils'

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
    <View style={[SylCommon.Layout.fill, styles.container(theme)]}>
      <TouchableOpacity style={[SylCommon.Layout.fullWidth, SylCommon.Layout.row, styles.userBox(theme)]}>
        <Avatar source={profile?.avatar_normal ? { uri: profile?.avatar_normal } : undefined} size={60} />
        <View style={styles.userInfo(theme)}>
          <Text style={styles.username(theme)}>{profile?.username}</Text>
        </View>
      </TouchableOpacity>
      <View style={SylCommon.Grid.container(theme)}>
        <TouchableOpacity style={SylCommon.Grid.item(theme)} onPress={() => navigation.navigate(ROUTES.FollowPeople)}>
          <Text style={SylCommon.Grid.itemValue(theme)}>{'7' || '-'}</Text>
          <Text style={SylCommon.Grid.itemTitle(theme)}>{translate('button.followPeople')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={SylCommon.Grid.item(theme)} onPress={() => navigation.navigate(ROUTES.LikeTopics)}>
          <Text style={SylCommon.Grid.itemValue(theme)}>{'10' || '-'}</Text>
          <Text style={SylCommon.Grid.itemTitle(theme)}>{translate('button.likeTopics')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={SylCommon.Grid.item(theme)} onPress={() => navigation.navigate(ROUTES.Readed)}>
          <Text style={SylCommon.Grid.itemValue(theme)}>{readedTopics ? readedTopics.length : 0}</Text>
          <Text style={SylCommon.Grid.itemTitle(theme)}>{translate('button.readed')}</Text>
        </TouchableOpacity>
      </View>
      <View style={SylCommon.Table.container(theme)}>
        <TouchableOpacity
          style={SylCommon.Table.item(theme)}
          onPress={() => {
            navigation.navigate(ROUTES.Theme)
          }}>
          <Text style={SylCommon.Table.itemText(theme)}>{translate('common.theme')}</Text>
          <Image style={SylCommon.Table.itemArrow(theme)} source={theme.assets.images.icons.arrowRightGrey} />
        </TouchableOpacity>
        <TouchableOpacity
          style={SylCommon.Table.item(theme)}
          onPress={() => {
            navigation.navigate(ROUTES.Language)
          }}>
          <Text style={SylCommon.Table.itemText(theme)}>{translate('common.language')}</Text>
          <Image style={SylCommon.Table.itemArrow(theme)} source={theme.assets.images.icons.arrowRightGrey} />
        </TouchableOpacity>
        <TouchableOpacity
          style={SylCommon.Table.item(theme)}
          onPress={() => {
            navigation.navigate(ROUTES.WebLink, { title: translate('common.help'), url: HELP_PAGE_LINK })
          }}>
          <Text style={SylCommon.Table.itemText(theme)}>{translate('common.help')}</Text>
          <Image style={SylCommon.Table.itemArrow(theme)} source={theme.assets.images.icons.arrowRightGrey} />
        </TouchableOpacity>
        <TouchableOpacity
          style={SylCommon.Table.item(theme)}
          onPress={() => {
            navigation.navigate(ROUTES.About)
          }}>
          <Text style={SylCommon.Table.itemText(theme)}>{translate('common.about')}</Text>
          <Image style={SylCommon.Table.itemArrow(theme)} source={theme.assets.images.icons.arrowRightGrey} />
        </TouchableOpacity>
      </View>
      <View style={SylCommon.Table.container(theme)}>
        <TouchableOpacity
          style={SylCommon.Table.item(theme)}
          onPress={() => {
            utils.linking(`mailto:${app.aboutUs.email}`)
          }}>
          <Text style={SylCommon.Table.itemText(theme)}>{translate('common.email')}</Text>
          <Text style={SylCommon.Table.itemRightText(theme)}>{app.aboutUs.email}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={SylCommon.Table.item(theme)}
          onPress={() => {
            utils.linking(`https://github.com/${app.aboutUs.github}`)
          }}>
          <Text style={SylCommon.Table.itemText(theme)}>{translate('common.github')}</Text>
          <Text style={SylCommon.Table.itemRightText(theme)}>@{app.aboutUs.github}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logoutBox(theme)}>
        <Button
          style={{}}
          onPress={() => {
            utils.Alert.confirm({ message: translate('confirm.logout'), onOk: logout })
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
  userBox: (theme: ITheme): ViewStyle => ({
    backgroundColor: theme.colors.surface,
    paddingHorizontal: 16,
    paddingVertical: 16
  }),
  userInfo: (theme: ITheme): ViewStyle => ({
    marginLeft: 12,
    flex: 1,
    justifyContent: 'center'
  }),
  username: (theme: ITheme): TextStyle => ({
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4
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
  logout: Actions.logout
})(My)
