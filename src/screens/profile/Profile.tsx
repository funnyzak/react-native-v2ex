import { logout as actionLogout } from '@src/actions'
import { Spinner, Text, useToast } from '@src/components'
import { useProfile } from '@src/hooks/useProfile'
import { translate } from '@src/i18n'
import { ProfileScreenProps as ScreenProps, ROUTES } from '@src/navigation'
import { SylCommon, useTheme } from '@src/theme'
import { IState, ITheme, V2exObject } from '@src/types'
import React, { useEffect, useLayoutEffect, useMemo } from 'react'
import { TouchableOpacity, View, ViewStyle } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { HeaderButton, ProfileDetail, ProfileInfo } from '../components'

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
  }, [username])

  const { showMessage } = useToast()

  const underConstruction = () => {
    showMessage({
      type: 'error',
      text2: translate('label.underConstruction')
    })
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: profile
        ? () =>
            !authMember || authMember.id !== profile.id ? (
              <HeaderButton text={translate('common.follow')} onPress={underConstruction} />
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
    <ScrollView style={SylCommon.Layout.fill}>
      {profile ? <ProfileDetail profile={profile} /> : <Spinner text={translate('placeholder.loading')} />}
    </ScrollView>
  )
}

const mapStateToProps = ({ member }: { member: IState.MemberState }) => {
  const { profile: authMember } = member
  return { authMember }
}

export default connect(mapStateToProps, {
  logout: actionLogout
})(Profile)
