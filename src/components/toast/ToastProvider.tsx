/**
 * Created by Leon<silenceace@gmail.com> at 2022-03-10 22:04:35.
 * Last modified at 2022-11-08 23:51:01
 */

import { logInfo } from '@src/helper/logger'
import { Theme, useTheme } from '@src/theme'
import { merge } from 'lodash'
import { default as React, useMemo, useState } from 'react'
import { TextStyle, ViewStyle } from 'react-native'
import ToastComponent from 'react-native-easy-toast' // api https://github.com/crazycodeboy/react-native-easy-toast#api
import ToastMessage, {
  BaseToast as BaseToastMessage,
  BaseToastProps,
  ErrorToast as ErrorToastMessage,
  InfoToast as InfoToastMessage,
  SuccessToast as SuccessToastMessage
} from 'react-native-toast-message' // api https://github.com/calintamas/react-native-toast-message/blob/main/docs/api.md
import { ToastShowParams } from 'react-native-toast-message/lib'
import ToastContext, { ToastPositionType, ToastShowType } from './ToastContext'
type Props = {
  children?: JSX.Element
}
const BORDER_RADIUS = 8
const ToastProvider = ({ children }: Props) => {
  const [toast, setToast] = useState<ToastComponent | undefined>(undefined)
  const [toastPosition, setToastPosition] = useState<ToastPositionType>('center')
  const [toastOpacity, setToastOpacity] = useState<number>(1)
  const { theme } = useTheme()
  const toastMessageConfig = useMemo(() => {
    const commonProps: BaseToastProps = {
      style: {
        flexDirection: 'row',
        backgroundColor: theme.colors.surface,
        borderLeftColor: theme.colors.info,
        height: 'auto',
        minHeight: 60,
        width: '80%',
        maxWidth: 500,
        paddingVertical: 15,
        borderRadius: BORDER_RADIUS,
        shadowColor: theme.colors.border,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.35,
        borderLeftWidth: BORDER_RADIUS,
        shadowRadius: BORDER_RADIUS,
        elevation: 2
      },
      contentContainerStyle: styles.toastMessage.container(theme),
      text1Style: styles.toastMessage.text1(theme),
      text2Style: styles.toastMessage.text2(theme),
      text1NumberOfLines: 3,
      text2NumberOfLines: 50
    }
    return {
      base: (props: BaseToastProps) => <BaseToastMessage {...props} {...commonProps} />,
      success: (props: BaseToastProps) => (
        <SuccessToastMessage
          {...merge(commonProps, {
            style: { borderLeftColor: theme.colors.success }
          })}
          {...props}
        />
      ),
      warn: (props: BaseToastProps) => (
        <InfoToastMessage
          {...merge(commonProps, {
            style: { borderLeftColor: theme.colors.warning }
          })}
          {...props}
        />
      ),
      info: (props: BaseToastProps) => (
        <InfoToastMessage
          {...merge(commonProps, {
            style: { borderLeftColor: theme.colors.grey }
          })}
          {...props}
        />
      ),
      error: (props: BaseToastProps) => (
        <ErrorToastMessage
          {...merge(commonProps, {
            style: { borderLeftColor: theme.colors.error }
          })}
          {...props}
        />
      )
    }
  }, [theme])
  const showToast = (opts: ToastShowType) => {
    logInfo('ToastProvider', 'showToast', 'opts', typeof opts, opts)
    if (opts === undefined) {
      return
    } else if (typeof opts === 'object') {
      const { text, position, duration, callback, opacity } = opts
      setToastPosition(position || 'center')
      setToastOpacity(opacity || 1)
      toast?.show(text, duration || 1500, callback)
    } else {
      toast?.show(opts.toString())
    }
  }
  const showMessage = (params: string | ToastShowParams) => {
    if (typeof params === 'string') {
      ToastMessage.show({
        type: 'info',
        position: 'top',
        text2: params
      })
    } else {
      ToastMessage.show({
        position: 'top',
        visibilityTime: 2000,
        ...params
      })
    }
  }
  const closeToast = (duration?: number) => {
    toast?.close(duration || 1000)
  }
  const hideMessage = (params?: any) => {
    ToastMessage.hide(params)
  }
  return (
    <ToastContext.Provider
      value={{
        showToast,
        showMessage,
        hideMessage,
        closeToast
      }}>
      <ToastComponent
        ref={(toastRef: ToastComponent) => setToast(toastRef)}
        textStyle={styles.toastText()}
        position={toastPosition}
        opacity={toastOpacity}
      />
      {children}
      <ToastMessage config={toastMessageConfig} />
    </ToastContext.Provider>
  )
}
const styles = {
  toastText: (): TextStyle => ({ color: '#ffffff' }),
  toastMessage: {
    container: (theme: Theme): ViewStyle => ({}),
    text1: (theme: Theme): TextStyle => ({
      ...theme.typography.labelTextBold,
      paddingBottom: theme.spacing.tiny,
      color: theme.colors.titleText
    }),
    text2: (theme: Theme): TextStyle => ({
      ...theme.typography.labelText,
      color: theme.colors.bodyText
    })
  }
}
export default ToastProvider
