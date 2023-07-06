/**
 * Created by Leon<silenceace@gmail.com> at 2023-04-25.
 */

import { useToast } from '@src/components'
import { AppleStore_ID, OFFICIAL_SITE } from '@src/config'
import { useAppDispatch, useAppSelector } from '@src/hooks'
import { getLocale, translate } from '@src/i18n'
import { NavigationService, ROUTES } from '@src/navigation'
import { RootState } from '@src/store'
import { useTheme } from '@src/theme'
import { alert } from '@src/utils/alert'
import { copyToClipboard } from '@src/utils/clipboard'
import { getQueryUrl, open } from '@src/utils/urls'
import _ from 'lodash'
import {
  // eslint-disable-next-line react-native/split-platform-components
  ActionSheetIOS,
  Alert,
  AlertType,
  Dimensions,
  Platform,
  Share,
  ShareContent
} from 'react-native'
import { SheetManager } from 'react-native-actions-sheet'
import DeviceInfo from 'react-native-device-info'
import Rate, { AndroidMarket } from 'react-native-rate'
import { ToastShowParams } from 'react-native-toast-message'
import { logInfo } from './logger'

export const useQuickAction = () => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()
  const { showMessage, hideMessage } = useToast()
  const { app, setting } = useAppSelector((state: RootState) => state)

  const copyText = (text: string, tips?: string) => {
    copyToClipboard(text)
    showMessage({
      type: 'success',
      text2:
        // translate('common.content') +
        // translate('symbol.colon') +
        // truncateString(text, 15, '...', 'end') +
        // ' ' +
        tips || translate('tips.copySuccess')
    })
  }

  const tips = (
    text: string,
    options?: {
      title?: string
      mtype?: 'toast' | 'alert'
      type?: 'success' | 'error' | 'info' | 'warn'
    }
  ) => {
    const { title, mtype = 'toast', type = 'info' } = options || {}

    if (mtype === 'toast') {
      showMessage({
        type: type,
        text1: title,
        text2: text
      })
    } else {
      alert({
        title: title || translate('common.tip'),
        message: text
      })
    }
  }

  const openUrl = (url: string) => {
    if (setting.openLinkInApp) {
      NavigationService.navigate(ROUTES.WebViewer, {
        url
      })
    } else {
      open(url).catch((e) => {
        showMsg({
          type: 'error',
          text2: `${translate('errors.cantOpen')} ${url}`
        })
      })
    }
  }

  const share = async ({ ...rest }: ShareContent) => {
    try {
      const result = await Share.share({
        ...rest
      })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error: any) {
      showMessage({
        type: 'error',
        text2: `${translate('errors.error')}`
      })
    }
  }

  const model = DeviceInfo.getModel()
  const isIOS = Platform.OS === 'ios'
  const isIphone = isIOS && model.includes('iPhone')
  const isIPad = isIOS && model.includes('iPad')
  const isAndroid = Platform.OS === 'android'
  const screenWidth = Dimensions.get('window').width
  const screenHeight = Dimensions.get('window').height
  const isBigScreen = isIPad || screenWidth >= 700

  const deviceModelInfo = {
    isIOS,
    isAndroid,
    isIPad,
    isIphone,
    isBigScreen,
    screenHeight,
    screenWidth,
    model
  }

  const showModelPrompt = ({
    title,
    description,
    buttons,
    cancelHandler,
    ...rest
  }: {
    title: string
    description?: string
    buttons: any[]
    type?: AlertType
    defaultValue?: string
    options?: {
      [key: string]: any
    }
    cancelHandler?: () => void
  }) => {
    if (Platform.OS === 'ios') {
      Alert.prompt(
        title ?? translate('brand.name'),
        description,
        buttons &&
          buttons
            .map((button) => {
              return {
                text: button.text,
                onPress: button.onPress,
                style: button.style
              }
            })
            .concat([
              {
                text: translate('common.cancel'),
                style: 'cancel'
              } as any
            ]),
        rest.type ?? 'plain-text',
        rest.defaultValue ?? '',
        'default',
        {
          userInterfaceStyle: theme.isDark ? 'dark' : 'light',
          onDismiss: () => {
            cancelHandler && cancelHandler()
          },
          ...rest.options
        }
      )
    } else {
      // Android
    }
  }

  const confirmActionButton = async ({
    title,
    description,
    confirm
  }: {
    title?: string
    description?: string
    confirm: () => void
  }) => {
    showActionButtons({
      title,
      description,
      way: 'alert',
      buttons: [
        {
          text: translate('common.cancel'),
          style: 'cancel'
        },
        {
          text: translate('common.confirm'),
          onPress: confirm
        }
      ],
      cancelButtonIndex: 0
    })
  }

  const showActionButtons = async ({
    title,
    description,
    buttons,
    way,
    options,
    cancelButtonIndex,
    destructiveButtonIndex,
    cancelHandler
  }: {
    title?: string
    description?: string
    way?: 'alert' | 'actionSheet'
    buttons: any[]
    options?: {
      [key: string]: any
    }
    cancelButtonIndex?: number
    destructiveButtonIndex?: number
    cancelHandler?: () => void
  }) => {
    if (deviceModelInfo.isIphone && (!way || way === 'actionSheet')) {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          title,
          message: description,
          destructiveButtonIndex,
          options: buttons.map((button) => button.text),
          cancelButtonIndex,
          userInterfaceStyle: theme.isDark ? 'dark' : 'light'
        },
        (buttonIndex: number) => {
          if (buttonIndex === cancelButtonIndex) {
            cancelHandler && cancelHandler()
          } else {
            buttons[buttonIndex].onPress && buttons[buttonIndex].onPress()
          }
        }
      )
    } else {
      Alert.alert(
        title || translate('common.tip'),
        description,
        buttons.map((button) => ({
          text: button.text,
          onPress: button.onPress,
          style: button.style
        })),
        options
      )
    }
  }

  const underDevelopment = () => {
    showMsg({
      type: 'info',
      text1: Array.from({ length: 7 }, () => '👨🏻‍💻').join(' '),
      text2: translate('tips.underDevelopment')
    })
  }
  const showMsg = ({
    copyError = true,
    ...props
  }: ToastShowParams & {
    copyError?: boolean
  }) => {
    const _props = {
      visibilityTime: 3000,
      type: 'info',
      ...props
    }
    showMessage({
      ..._props,
      onPress: () => {
        if (copyError && _props.text2 && _props.type === 'error') {
          copyText(_props.text2)
        } else {
          // hideMessage()
          _props.onPress && _props.onPress()
        }
      }
    })
  }

  const actionSheetWeb = (
    url: string,
    options?: {
      title?: string
      isSetAppParams?: boolean
    }
  ) => {
    const { isSetAppParams = true } = options || {}

    const _url = isSetAppParams
      ? getQueryUrl(url, {
          cm_theme: theme.name,
          cm_lang: getLocale()
        })
      : url

    SheetManager.show('web-sheet', {
      onClose: (data: any) => {},
      payload: {
        title: options?.title,
        url: _url
      }
    })
  }

  const rateApp = (
    options?: {
      AppleAppID?: string
      GooglePackageName?: string
      AmazonPackageName?: string
      OtherAndroidURL?: string
      preferredAndroidMarket?: AndroidMarket
      preferInApp?: boolean
      openAppStoreIfInAppFails?: boolean
      fallbackPlatformURL?: string
    },
    callback?: (success: boolean, errorMessage: string) => void
  ) => {
    callback = callback
      ? callback
      : (success, errorMessage) => {
          if (success) {
            logInfo('RateApp Success')
            // this technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
          }
          if (errorMessage) {
            logInfo('RateApp Error', errorMessage)
            showMsg({
              type: 'error',
              text2: translate('errors.error')
            })
          }
        }

    const _options = _.mergeWith(
      {
        AppleAppID: AppleStore_ID,
        AmazonPackageName: app.deviceInfo?.bundleId,
        GooglePackageName: app.deviceInfo?.bundleId,
        preferredAndroidMarket: AndroidMarket.Google,
        preferInApp: false,
        openAppStoreIfInAppFails: true,
        fallbackPlatformURL: OFFICIAL_SITE
      },
      options
    )
    logInfo('RateApp Options', _options)

    Rate.rate(_options, callback)
  }
  return {
    rateApp,
    copyText,
    actionSheetWeb,
    openUrl,
    tips,
    showMessage,
    underDevelopment,
    confirmActionButton,
    showMsg,
    showActionButtons,
    deviceModelInfo,
    share
  }
}
