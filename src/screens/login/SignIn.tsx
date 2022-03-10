import React, { useState } from 'react'
import { Platform, TouchableOpacity, KeyboardAvoidingView, View, ViewStyle, TextStyle } from 'react-native'
import { connect } from 'react-redux'

import { IState, ITheme } from '@src/types'
import * as utils from '@src/utils'
import { translate } from '@src/i18n'
import { Logo, Spinner, Button, Input, Text } from '@src/components'
import { useAppSelector } from '@src/hooks'
import { SignInScreenProps as ScreenProps } from '@src/navigation/routes'
import { loginByToken } from '@src/actions'
import { useTheme } from '@src/theme'
import { RootState } from '@src/store'

const Screen = ({ loading, error, success, navigation, route, auth: _auth }: ScreenProps) => {
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
        <Button disabled={token === ''} onPress={onLoginPress}>
          {translate('common.auth')}
        </Button>
        <TouchableOpacity onPress={onGetTokenPress} style={styles.link(theme)}>
          <Text style={styles.linkTitle()}>{translate('link.getToken')}</Text>
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
      <View style={{ marginBottom: 20 }}>
        <Logo width={131.25} height={75} />
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
    </KeyboardAvoidingView>
  )
}

/**
 * @description styles settings
 */
const styles = {
  container: (theme: ITheme): ViewStyle => ({
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    paddingTop: theme.dimens.WINDOW_HEIGHT * 0.1
  }),
  inputContainer: (theme: ITheme): ViewStyle => ({
    width: theme.dimens.WINDOW_WIDTH * 0.9,
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
