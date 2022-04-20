import { logout as actionLogout } from '@src/actions'
import { Spinner, Text } from '@src/components'
import { useProfile } from '@src/hooks/useProfile'
import { translate } from '@src/i18n'
import { ProfileScreenProps as ScreenProps, ROUTES } from '@src/navigation'
import { SylCommon, useTheme } from '@src/theme'
import { IState, ITheme, V2exObject } from '@src/types'
import React, { useEffect, useLayoutEffect, useMemo } from 'react'
import { TouchableOpacity, View, ViewStyle } from 'react-native'
import { connect } from 'react-redux'
import { HeaderButton, ProfileInfo } from '../components'

const Profile = ({
  route,
  navigation,
  authMember,
  logout
}: ScreenProps & {
  authMember?: V2exObject.Member
  logout: () => void
}) => {
  const { theme } = useTheme()
  const username = useMemo(() => route.params.username, [route])
  const { profile } = useProfile({ username: username })

  useEffect(() => {
    navigation.setOptions({ title: username })
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: profile
        ? () =>
            !authMember || authMember.id !== profile.id ? (
              <HeaderButton
                text={translate('common.follow')}
                onPress={() => {
                  // TODO: 关注
                }}
              />
            ) : (
              <HeaderButton
                source={theme.assets.images.icons.header.logout}
                onPress={() => {
                  // TODO: 退出确认
                  logout()
                  navigation.navigate(ROUTES.SignIn)
                }}
              />
            )
        : undefined
    })
  }, [navigation, profile])

  return (
    <View style={SylCommon.Layout.fill}>
      <View style={[SylCommon.Card.container(theme), styles.container(theme)]}>
        {profile ? (
          <ProfileInfo info={profile} styleType="full" />
        ) : (
          <Spinner text={translate('placeholder.loading')} />
        )}
      </View>
    </View>
  )
}

/**
 * @description styles settings
 */
const styles = {
  container: (theme: ITheme): ViewStyle => ({
    paddingTop: theme.spacing.medium
  })
}

const mapStateToProps = ({ member }: { member: IState.MemberState }) => {
  const { profile: authMember } = member
  return { authMember }
}

export default connect(mapStateToProps, {
  logout: actionLogout
})(Profile)
