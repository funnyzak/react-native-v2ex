import { logout as actionLogout } from '@src/actions'
import { Spinner } from '@src/components'
import { useMember } from '@src/hooks/useMember'
import { translate } from '@src/i18n'
import { ProfileScreenProps as ScreenProps, ROUTES } from '@src/navigation'
import { SylCommon, useTheme } from '@src/theme'
import { IState, V2exObject } from '@src/types'
import React, { useEffect, useLayoutEffect, useMemo } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { HeaderButton, ProfileDetail } from '../components'
import { FollowPeopleHeaderButton } from '../components/button'

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
  const { member } = useMember({ userid: username })

  useEffect(() => {
    navigation.setOptions({ title: member?.username })
  }, [username, member])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: member
        ? () =>
            !authMember || authMember.id !== member.id ? (
              <FollowPeopleHeaderButton member={member} />
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
  }, [navigation, member])

  return (
    <ScrollView style={SylCommon.Layout.fill}>
      {member ? (
        <ProfileDetail profile={member} />
      ) : (
        <Spinner style={{ height: theme.dimens.WINDOW_HEIGHT }} text={translate('placeholder.loading')} />
      )}
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
