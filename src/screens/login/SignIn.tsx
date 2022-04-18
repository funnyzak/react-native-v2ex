import { loginByToken } from '@src/actions'
import { Button, Input, Text, useToast } from '@src/components'
import { useAppSelector } from '@src/hooks'
import { translate } from '@src/i18n'
import { ROUTES, SignInScreenProps as ScreenProps } from '@src/navigation'
import { RootState } from '@src/store'
import { SylCommon, useTheme } from '@src/theme'
import { IState, ITheme } from '@src/types'
import * as utils from '@src/utils'
import React, { useEffect, useState } from 'react'
import {
  Image,
  ImageStyle,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StatusBar,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { connect } from 'react-redux'
import { HeaderButton, SetStatusBar } from '../components'

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
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          text={translate('button.getToken')}
          onPress={() => {
            navigation.navigate(ROUTES.WebViewer, { url: tokenGeneratedLink })
          }}
        />
      )
    })
  }, [])

  const goNextRoute = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: ROUTES.Main }]
    })
  }

  useEffect(() => {
    if (success) {
      showMessage({ type: 'success', text2: success })
      goNextRoute()
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

  const renderButtons = () => {
    return (
      <View>
        <Button
          style={styles.button(theme)}
          type="large"
          disabled={token === '' || loading}
          onPress={onLoginPress}
          loading={loading}>
          {translate('button.loginByToken')}
        </Button>
        <TouchableOpacity onPress={goNextRoute}>
          <Text style={[SylCommon.Button.textAction(theme), styles.linkSkip(theme)]}>
            {translate('link.skipLogin')}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={[SylCommon.Layout.fill, { backgroundColor: theme.colors.background }]}>
      <SetStatusBar backgroundColor={theme.colors.background} />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <View style={[SylCommon.Card.container(theme), styles.mainContainer(theme)]}>
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
        <View style={styles.footer(theme)}>
          <Text style={styles.footerText(theme)}>{translate('label.confirmTerms')}</Text>
          <Pressable
            onPress={() => {
              navigation.navigate(ROUTES.PrivacyPolicy)
            }}>
            <Text style={[styles.footerText(theme), { color: theme.colors.secondary }]}>
              {translate('common.privacyPolicy')}
            </Text>
          </Pressable>
          <Text style={styles.footerText(theme)}>{translate('common.and')}</Text>
          <Pressable
            onPress={() => {
              navigation.navigate(ROUTES.TermsOfService)
            }}>
            <Text style={[styles.footerText(theme), { color: theme.colors.secondary }]}>
              {translate('common.termsOfService')}
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

/**
 * @description styles settings
 */
const styles = {
  mainContainer: (theme: ITheme): ViewStyle => ({
    flex: 1,
    width: theme.dimens.defaultButtonWidth,
    backgroundColor: theme.colors.transparent,
    paddingTop: theme.dimens.WINDOW_HEIGHT / 5,
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
    marginBottom: 100
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
    marginTop: theme.spacing.large * 3,
    color: theme.colors.bodyText,
    height: 30
  }),
  footer: (theme: ITheme): ViewStyle => ({
    width: '80%',
    marginBottom: theme.spacing.medium,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexWrap: 'wrap'
  }),
  footerText: (theme: ITheme): TextStyle => ({
    ...theme.typography.labelText
  })
}

const mapStateToProps = ({ ui: { login } }: { ui: IState.UIState }) => {
  const { error, success, loading } = login
  return { error, success, loading }
}

export default connect(mapStateToProps, { auth: loginByToken })(Screen)
