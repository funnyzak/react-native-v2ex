import React, { useState } from 'react'
import { Platform, TouchableOpacity, KeyboardAvoidingView, View, ViewStyle, StatusBar, TextStyle } from 'react-native'
import { connect } from 'react-redux'

import { IState, ITheme } from '@src/types'
import * as utils from '@src/utils'
import { translate } from '@src/i18n'
import { Logo, Spinner, Button, Input, Text } from '@src/components'
import { useAppSelector } from '@src/hooks'
import { SignInScreenProps as ScreenProps } from '@src/navigation/routes'
import { loginByToken } from '@src/actions'
import { SylCommon, useTheme } from '@src/theme'
import { RootState } from '@src/store'
import { SafeAreaView } from 'react-native-safe-area-context'

const Screen = ({
  loading = false,
  error,
  success,
  auth: _auth = (token: string) => {
    utils.Alert.alert({ message: 'token: ' + token })
  }
}: ScreenProps) => {
  const [token, setToken] = useState('')

  const { theme } = useTheme()
  const {
    login: { tokenGeneratedLink }
  } = useAppSelector((state: RootState) => state.ui)

  const onLoginPress = () => {
    _auth(token)
  }

  const onGetTokenPress = () => {
    utils.linking(tokenGeneratedLink)
  }

  const renderButtons = () => {
    if (loading) {
      return <Spinner style={{ marginTop: 30 }} />
    }

    return (
      <View>
        <Button type="large" disabled={token === ''} onPress={onLoginPress}>
          {translate('common.auth')}
        </Button>
        <TouchableOpacity onPress={onGetTokenPress} style={styles.link(theme)}>
          <Text style={SylCommon.Button.textAction(theme)}>{translate('link.getToken')}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const renderMessages = () => {
    if (error) {
      return <Text style={styles.error(theme)}>{error}</Text>
    }

    if (success) {
      return <Text style={styles.success(theme)}>{success}</Text>
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={theme.name === 'dark' ? 'light-content' : 'dark-content'}
      />
      <SafeAreaView style={[SylCommon.Layout.fill, { backgroundColor: theme.colors.background }]}>
        <View style={styles.container(theme)}>
          <View style={{ marginBottom: 35 }}>
            <Logo width={75} height={75} />
          </View>

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
            containerStyle={styles.inputContainer(theme)}
            textContentType="none"
          />
          {renderButtons()}
          {renderMessages()}
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
    paddingTop: '30%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }),

  logo: (theme: ITheme): ViewStyle => ({}),

  inputContainer: (theme: ITheme): ViewStyle => ({
    width: theme.dimens.defaultButtonWidth,
    marginBottom: theme.spacing.large
  }),
  buttonMargin: (theme: ITheme): ViewStyle => ({
    marginTop: theme.spacing.large
  }),
  error: (theme: ITheme): TextStyle => ({
    color: theme.colors.error,
    width: theme.dimens.WINDOW_WIDTH * 0.85,
    textAlign: 'center',
    marginTop: theme.spacing.large
  }),
  success: (theme: ITheme): TextStyle => ({
    width: theme.dimens.WINDOW_WIDTH * 0.85,
    color: theme.colors.success,
    textAlign: 'center',
    marginTop: theme.spacing.extraLarge
  }),
  link: (theme: ITheme) => ({
    marginTop: theme.spacing.extraLarge
  }),
  linkTitle: (): TextStyle => ({
    textAlign: 'center'
  })
}

const mapStateToProps = ({ ui: { login } }: { ui: IState.UIState }) => {
  const { error, success, loading } = login
  return { error, success, loading }
}

export default connect(mapStateToProps, { auth: loginByToken })(Screen)
