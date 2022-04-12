import React, { useEffect, useState } from 'react'
import {
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  ViewStyle,
  StatusBar,
  TextStyle,
  Image
} from 'react-native'
import { connect } from 'react-redux'

import { IState, ITheme } from '@src/types'
import * as utils from '@src/utils'
import { translate } from '@src/i18n'
import { Spinner, Button, Input, Text, useToast } from '@src/components'
import { useAppSelector } from '@src/hooks'
import { ROUTES, SignInScreenProps as ScreenProps } from '@src/navigation'
import { loginByToken } from '@src/actions'
import { SylCommon, useTheme } from '@src/theme'
import { RootState } from '@src/store'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ImageStyle } from 'react-native'

const Screen = ({
  navigation,
  loading = false,
  error,
  success,
  auth: _auth = (token: string) => {
    utils.Alert.alert({ message: 'token: ' + token })
  }
}: ScreenProps) => {
  const [token, setToken] = useState('')
  const { theme } = useTheme()
  const { showMessage } = useToast()
  const {
    login: { tokenGeneratedLink }
  } = useAppSelector((state: RootState) => state.ui)

  useEffect(() => {
    if (success) {
      showMessage({ type: 'success', text2: success })
    }
  }, [success])

  useEffect(() => {
    if (error) {
      showMessage({ type: 'error', text2: error })
    }
  }, [error])

  const onLoginPress = () => {
    _auth(token)
  }

  const onSkip = () => {
    navigation.navigate(ROUTES.Main, { initialRouteName: ROUTES.HotTopics })
    StatusBar.setBackgroundColor(theme.name === 'dark' ? theme.colors.primaryDark : theme.colors.primary)
  }

  const onGetTokenPress = () => {
    utils.linking(tokenGeneratedLink)
  }

  const renderButtons = () => {
    return (
      <View>
        <Button style={styles.button(theme)} type="large" disabled={token === '' || loading} onPress={onLoginPress}>
          {translate('button.loginByToken')}
        </Button>
        <TouchableOpacity onPress={onSkip}>
          <Text style={[SylCommon.Button.textAction(theme), styles.linkSkip(theme)]}>
            {translate('link.skipLogin')}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={theme.name === 'dark' ? 'light-content' : 'dark-content'}
      />
      <SafeAreaView style={[SylCommon.Layout.fill, { backgroundColor: theme.colors.background }]}>
        <View style={[SylCommon.Card.container(theme), styles.container(theme)]}>
          <View style={styles.columnItem(theme)}>
            <Image
              source={
                theme.name === 'dark'
                  ? theme.assets.images.icons.app.arrow.light
                  : theme.assets.images.icons.app.arrow.dark
              }
              style={styles.logo(theme)}
            />
          </View>
          <View style={styles.columnItem(theme)}>
            <Input
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              placeholder={translate('placeholder.token')}
              keyboardType="default"
              returnKeyType="next"
              autoCorrect={false}
              value={token}
              editable={!loading}
              onChangeText={setToken}
              containerStyle={styles.input(theme)}
              textContentType="none"
            />
            {renderButtons()}
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

/**
 * @description styles settings
 */
const styles = {
  container: (theme: ITheme): ViewStyle => ({
    flex: 1,
    width: theme.dimens.defaultButtonWidth,
    backgroundColor: theme.colors.transparent,
    paddingTop: theme.dimens.WINDOW_HEIGHT / 3,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }),
  columnItem: (theme: ITheme): ViewStyle => ({
    marginBottom: theme.spacing.large,
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  }),
  logo: (theme: ITheme): ImageStyle => ({
    width: 150 * 0.9,
    height: 128 * 0.9,
    alignSelf: 'center',
    marginBottom: theme.spacing.large * 3
  }),
  actionContainer: (theme: ITheme): ViewStyle => ({
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }),
  input: (theme: ITheme): ViewStyle => ({
    width: '100%',
    marginBottom: theme.spacing.large
  }),
  button: (theme: ITheme): ViewStyle => ({
    width: '100%'
  }),
  linkSkip: (theme: ITheme): TextStyle => ({
    marginTop: theme.spacing.large * 2,
    color: theme.colors.bodyText,
    height: 30
  })
}

const mapStateToProps = ({ ui: { login } }: { ui: IState.UIState }) => {
  const { error, success, loading } = login
  return { error, success, loading }
}

export default connect(mapStateToProps, { auth: loginByToken })(Screen)
