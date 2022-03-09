import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, Image, ViewStyle, TextStyle, TouchableOpacity, ImageStyle } from 'react-native'

import { translate } from '@src/i18n'
import { useTheme, SylCommon } from '@src/theme'
import { IState, ITheme, V2exObject } from '@src/types'
import * as CompS from '../components'
import { Text, Spinner, Avatar } from '@src/components'
import { MyScreenProps as ScreenProps, ROUTES } from '@src/navigation'
import * as Actions from '@src/actions'

const My = ({
  route,
  navigation,
  setting,
  app,
  profile,
  token
}: ScreenProps &
  IState.State & {
    profile?: V2exObject.Member
    token?: V2exObject.MToken
  }) => {
  const { theme } = useTheme()
  return (
    <View style={[SylCommon.Layout.fill, styles.container(theme)]}>
      <TouchableOpacity style={[SylCommon.Layout.fullWidth, SylCommon.Layout.row, styles.userBox(theme)]}>
        <Avatar source={profile?.avatar_normal ? { uri: profile?.avatar_normal } : theme.assets.images.icons.profile} size={60} />
        <View style={styles.userInfo(theme)}>
          <Text style={styles.username(theme)}>{profile?.username}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.grid(theme)}>
        <TouchableOpacity style={styles.gridItem(theme)} onPress={() => navigation.navigate(ROUTES.FollowPeople)}>
          <Text style={styles.gridItemValue(theme)}>{'7' || '-'}</Text>
          <Text style={styles.gridItemTitle(theme)}>{translate('button.followPeople')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem(theme)} onPress={() => navigation.navigate(ROUTES.LikeTopics)}>
          <Text style={styles.gridItemValue(theme)}>{'10' || '-'}</Text>
          <Text style={styles.gridItemTitle(theme)}>{translate('button.likeTopics')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem(theme)} onPress={() => navigation.navigate(ROUTES.Readed)}>
          <Text style={styles.gridItemValue(theme)}>{'8'}</Text>
          <Text style={styles.gridItemTitle(theme)}>{translate('button.readed')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list(theme)}>
        <TouchableOpacity
          style={styles.listItem(theme)}
          onPress={() => {
            navigation.navigate(ROUTES.Setting)
          }}>
          <Text style={styles.listItemText(theme)}>{translate('common.setting')}</Text>
          <Image style={styles.listItemArrow(theme)} source={theme.assets.images.icons.arrowRightGrey} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listItem(theme)}
          onPress={() => {
            navigation.navigate(ROUTES.Theme)
          }}>
          <Text style={styles.listItemText(theme)}>{translate('common.theme')}</Text>
          <Image style={styles.listItemArrow(theme)} source={theme.assets.images.icons.arrowRightGrey} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listItem(theme)}
          onPress={() => {
            navigation.navigate(ROUTES.Feedback)
          }}>
          <Text style={styles.listItemText(theme)}>{translate('common.feedback')}</Text>
          <Image style={styles.listItemArrow(theme)} source={theme.assets.images.icons.arrowRightGrey} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listItem(theme)}
          onPress={() => {
            navigation.navigate(ROUTES.About)
          }}>
          <Text style={styles.listItemText(theme)}>{translate('common.about')}</Text>
          <Image style={styles.listItemArrow(theme)} source={theme.assets.images.icons.arrowRightGrey} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

/**
 * @description styles.settings(theme)
 */
const styles = {
  container: (theme: ITheme): ViewStyle => ({
    backgroundColor: theme.colors.background
  }),
  userBox: (theme: ITheme): ViewStyle => ({
    backgroundColor: theme.colors.white,
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
  grid: (theme: ITheme): ViewStyle => ({
    marginTop: 8,
    paddingVertical: 4,
    flexDirection: 'row',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.white,
    borderRadius: 8
  }),
  gridItem: (theme: ITheme): ViewStyle => ({
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8
  }),
  gridItemValue: (theme: ITheme): TextStyle => ({
    fontSize: 18,
    fontWeight: 'bold'
  }),
  gridItemTitle: (theme: ITheme): TextStyle => ({
    fontSize: 12,
    color: theme.colors.titleText
  }),
  list: (theme: ITheme): ViewStyle => ({
    marginTop: 8,
    backgroundColor: theme.colors.white
  }),
  listItem: (theme: ITheme): ViewStyle => ({
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }),
  listItemText: (theme: ITheme): TextStyle => ({
    fontSize: 16,
    color: theme.colors.titleText
  }),
  listItemRightText: (theme: ITheme): TextStyle => ({
    fontSize: 12,
    color: theme.colors.secondary
  }),
  listItemArrow: (theme: ITheme): ImageStyle => ({
    width: 16,
    height: 16
  })
}

/**
 * default props
 */
My.defaultProps = {
  loading: false
}

const mapStateToProps = ({ member, setting, app }: IState.State) => {
  const { profile, token } = member
  return {
    profile,
    token,
    setting,
    app
  }
}

export default connect(mapStateToProps, {
  logout: Actions.logout
})(My)
