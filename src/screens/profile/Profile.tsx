import { logout as actionLogout } from '@src/actions'
import { useProfile } from '@src/hooks/useProfile'
import { ProfileScreenProps as ScreenProps } from '@src/navigation/routes'
import { SylCommon, useTheme } from '@src/theme'
import { ITheme } from '@src/types'
import { Spinner } from '@src/components'
import React, { useEffect, useMemo, useLayoutEffect } from 'react'
import { View, ViewStyle } from 'react-native'
import { connect } from 'react-redux'
import { ProfileInfo, HeaderButton } from '../components'
import { linking } from '@src/utils'
import { translate } from '@src/i18n'

const Profile = ({ route, navigation }: ScreenProps) => {
  const { theme } = useTheme()
  const [loading, setLoading] = React.useState(true)
  const username = useMemo(() => route.params.username, [route])
  const { profile } = useProfile({ username: username })

  useEffect(() => {
    navigation.setOptions({ title: username })
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: profile
        ? () => (
            <HeaderButton
              source={theme.assets.images.icons.header.link}
              onPress={() => {
                linking(profile?.url)
              }}
            />
          )
        : undefined
    })
  }, [navigation, profile])

  return (
    <View>
      <View style={[SylCommon.Card.container(theme), styles.container(theme)]}>
        {profile ? (
          <ProfileInfo profile={profile} styleType="full" />
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
export default connect(undefined, {
  logout: actionLogout
})(Profile)
