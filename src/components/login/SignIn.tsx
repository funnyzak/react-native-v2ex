import React, { useState, useContext, useRef } from 'react'

import { IState, ITheme } from '@src/types'
import { Logo } from '@src/components/atoms'
import { ThemeContext } from '@src/theme'
import * as Alert from '@src/utils/alert'
import { translate } from '@src/i18n'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Spinner, Button, Input, Text } from '../common'
import { useAppDispatch, useAppSelector } from '@src/hooks'
import { SafeAreaView, Image, Modal, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, View, Platform, ViewStyle } from 'react-native'

const Screen = () => {
  const [token, setToken] = useState('')
  const dispatch = useAppDispatch()

  const theme = useContext(ThemeContext)
  const {
    login: { tokenGeneratedLink }
  } = useAppSelector((state: any) => state.ui)
  // Reference
  const tokenInput = useRef()

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container(theme)}>
        <Input
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          placeholder={translate('common.email')}
          keyboardType="email-address"
          returnKeyType="next"
          autoCorrect={false}
          value={token}
          // editable={!loading}
          // assignRef={input => {
          //   tokenInput.current = input;
          // }}
          onChangeText={setToken}
          // onSubmitEditing={() => tokenInput.current.focus()}
          containerStyle={styles.inputContainer(theme)}
          textContentType="emailAddress"
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = {
  container: (theme: ITheme): ViewStyle => ({
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    paddingTop: theme.dimens.WINDOW_HEIGHT * 0.1
  }),
  inputContainer: (theme: ITheme) => ({
    width: theme.dimens.WINDOW_WIDTH * 0.7,
    marginBottom: theme.spacing.large
  }),
  buttonMargin: (theme: ITheme) => ({
    marginTop: theme.spacing.large
  }),
  error: (theme: ITheme) => ({
    color: theme.colors.error,
    width: theme.dimens.WINDOW_WIDTH * 0.85,
    textAlign: 'center',
    marginTop: theme.spacing.large
  }),
  success: (theme: ITheme) => ({
    width: theme.dimens.WINDOW_WIDTH * 0.85,
    color: theme.colors.success,
    textAlign: 'center',
    marginTop: theme.spacing.extraLarge
  }),
  link: (theme: ITheme) => ({
    marginTop: theme.spacing.extraLarge
  }),
  linkTitle: {
    textAlign: 'center'
  }
}

export default Screen
