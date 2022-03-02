import React, { useState, useContext } from 'react'

import { IState, ITheme } from '@src/types'
import { Logo } from '@src/components/atoms'
import { ThemeContext } from '@src/theme'
import * as Alert from '@src/utils/alert'
import { translate } from '@src/i18n'
import { connect } from 'react-redux'
import { Spinner, Button, Input, Text } from '../common'
import { useAppSelector } from '@src/hooks'
import { TouchableOpacity, Linking, KeyboardAvoidingView, View, Platform, ViewStyle, TextStyle } from 'react-native'
import { SignInScreenProps } from '@src/navigation/routes'
import { loginByToken } from '@src/actions'

const Screen = ({ loading, error, success, navigation, route, auth: _auth }: SignInScreenProps) => {
  const [token, setToken] = useState('')

  const theme = useContext(ThemeContext)
  const {
    login: { tokenGeneratedLink }
  } = useAppSelector((state: any) => state.ui)

  const onLoginPress = () => {
    _auth(token)
  }

  const onGetTokenPress = async () => {
    const supported = await Linking.canOpenURL(tokenGeneratedLink)
    if (supported) {
      await Linking.openURL(tokenGeneratedLink)
    } else {
      Alert.alert({ message: `Don't know how to open this URL: ${tokenGeneratedLink}` })
    }
  }

  const renderButtons = () => {
    if (loading) {
      return <Spinner style={{ marginTop: 30 }} />
    }

    return (
      <View>
        <Button disabled={token === ''} onPress={onLoginPress}>
          {translate('login.loginButton')}
        </Button>
        <TouchableOpacity onPress={onGetTokenPress} style={styles.link(theme)}>
          <Text style={styles.linkTitle()}>{translate('login.getToken')}</Text>
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
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container(theme)}>
      <Logo width={131.25} height={75} />
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
    </KeyboardAvoidingView>
  )
}

/**
 * styles
 */
const styles = {
  container: (theme: ITheme): ViewStyle => ({
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    paddingTop: theme.dimens.WINDOW_HEIGHT * 0.1
  }),
  inputContainer: (theme: ITheme): ViewStyle => ({
    width: theme.dimens.WINDOW_WIDTH * 0.7,
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

/**
 * default props
 */
Screen.defaultProps = {
  error: null,
  success: null,
  loading: false,
  auth: (token: string) => {
    Alert.alert({ message: 'token: ' + token })
  }
}

const mapStateToProps = ({ ui: { login } }: { ui: IState.UIState }) => {
  const { error, success, loading } = login
  return { error, success, loading }
}

export default connect(mapStateToProps, { auth: loginByToken })(Screen)
