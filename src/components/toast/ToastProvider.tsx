/**
 * Created by leon<silenceace@gmail.com> on 22/3/10.
 */
import { logInfo } from '@src/helper/logger'
import { translate } from '@src/i18n'
import React, { useState } from 'react'
import { TextStyle } from 'react-native'
import ToastComponent from 'react-native-easy-toast' // api https://github.com/crazycodeboy/react-native-easy-toast#api
import ToastMessage from 'react-native-toast-message' // api https://github.com/calintamas/react-native-toast-message/blob/main/docs/api.md
import { ToastShowParams } from 'react-native-toast-message/lib'
import ToastContext, { ToastPositionType, ToastShowType } from './ToastContext'

type Props = {
  children?: JSX.Element
}

const ToastProvider = ({ children }: Props) => {
  const [toast, setToast] = useState<ToastComponent | undefined>(undefined)
  const [toastPosition, setToastPosition] = useState<ToastPositionType>('center')
  const [toastOpacity, setToastOpacity] = useState<number>(1)

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
        text1: translate('common.tip'),
        text2: params
      })
    } else {
      ToastMessage.show({ position: 'top', text1: translate('common.tip'), visibilityTime: 1500, ...params })
    }
  }

  const closeToast = (duration?: number) => {
    toast?.close(duration || 1000)
  }

  return (
    <ToastContext.Provider
      value={{
        showToast,
        showMessage
      }}>
      <ToastComponent
        ref={(toastRef: ToastComponent) => setToast(toastRef)}
        textStyle={styles.toastText()}
        position={toastPosition}
        opacity={toastOpacity}
      />
      {children}
      <ToastMessage />
    </ToastContext.Provider>
  )
}

const styles = {
  toastText: (): TextStyle => ({ color: '#ffffff' })
}

export default ToastProvider
