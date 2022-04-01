import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'

import { translate } from '@src/i18n'
import { useTheme, SylCommon } from '@src/theme'
import { IState, ITheme, V2exObject } from '@src/types'
import * as CompS from '../components'
import { Text, Avatar } from '@src/components'
import { ProfileScreenProps as ScreenProps } from '@src/navigation/routes'
import * as Actions from '@src/actions'

const Profile = ({
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
    <View>
      <View style={[SylCommon.Layout.row, styles.userInfoHeader(theme)]}>
        <View style={[SylCommon.Layout.row, SylCommon.Layout.fullWidth]}>
          <View style={styles.userInfoHeaderLeft(theme)}>
            <Avatar size={60} source={{ uri: profile && profile.avatar_normal }} />
          </View>
          <View style={styles.userInfoHeaderCenter(theme)}>
            <Text style={styles.username(theme)}>{profile && profile.username}</Text>
            <Text style={styles.bio(theme)}>{profile && profile.bio}</Text>
            <View />
          </View>
          <View />
        </View>
      </View>
    </View>
  )
}

/**
 * @description styles settings
 */
const styles = {
  container: (theme: ITheme): ViewStyle => ({
    backgroundColor: theme.colors.white,
    flex: 1
  }),
  userInfoHeader: (theme: ITheme): ViewStyle => ({
    padding: 16,
    paddingTop: 24,
    backgroundColor: theme.colors.white
  }),
  userInfoHeaderLeft: (theme: ITheme): ViewStyle => ({
    alignItems: 'center'
  }),
  userInfoHeaderCenter: (theme: ITheme): ViewStyle => ({
    marginLeft: 12,
    justifyContent: 'flex-start',
    flex: 1
  }),
  username: (theme: ITheme): TextStyle => ({
    fontSize: 18
  }),
  bio: (theme: ITheme): TextStyle => ({
    fontSize: 14,
    marginTop: 4,
    color: theme.colors.secondary
  }),
  online: (theme: ITheme): TextStyle => ({
    fontSize: 12,
    marginTop: 4,
    width: 16,
    height: 16,
    borderRadius: 16,
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderWidth: 2,
    borderColor: theme.colors.white,
    backgroundColor: theme.colors.secondary
  }),

  btn: (theme: ITheme): ViewStyle => ({
    backgroundColor: theme.colors.lightGrey,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 4
  }),
  btnText: (theme: ITheme): TextStyle => ({
    color: theme.colors.white,
    fontSize: 14
  }),
  btnFollow: (theme: ITheme): ViewStyle => ({
    backgroundColor: theme.colors.lightGrey
  }),
  btnUnfollow: (theme: ITheme): ViewStyle => ({
    backgroundColor: theme.colors.lightGrey
  }),
  btnUnfollowText: (theme: ITheme): TextStyle => ({
    color: theme.colors.black
  }),
  tabHeaderContainer: (theme: ITheme): ViewStyle => ({
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 0
  }),
  tabIndicator: (theme: ITheme): ViewStyle => ({
    backgroundColor: theme.colors.lightGrey
  }),
  tabContent: (theme: ITheme): ViewStyle => ({
    backgroundColor: theme.colors.lightGrey,
    flexGrow: 1,
    marginTop: 8
  }),
  emptyWrapper: (theme: ITheme): ViewStyle => ({
    width: theme.dimens.WINDOW_WIDTH,
    paddingVertical: 32
  }),
  emptyText: (theme: ITheme): TextStyle => ({
    textAlign: 'center',
    color: theme.colors.secondary
  })
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
})(Profile)
