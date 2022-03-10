/**
 * Created by leon<silenceace@gmail.com> on 22/3/10.
 */
import React, { useState } from 'react'
import { TextStyle } from 'react-native'
import ToastComponent from 'react-native-easy-toast'
import ToastContext, { ToastPositionType, ToastShowType } from './ToastContext'

type Props = {
  children?: JSX.Element
}

const ToastProvider = ({ children }: Props) => {
  const [toast, setToast] = useState<ToastComponent | undefined>(undefined)
  const [toastPosition, setToastPosition] = useState<ToastPositionType>('bottom')
  const [toastOpacity, setToastOpacity] = useState<number>(1)

  const showToast = (opts: ToastShowType) => {
    if (typeof opts !== 'string') {
      const { text, position, duration, callback, opacity } = opts

      setToastPosition(position || 'bottom')
      setToastOpacity(opacity || 1)

      toast?.show(text, duration || 2000, callback)
    } else {
      toast?.show(opts)
    }
  }

  const closeToast = (duration?: number) => {
    toast?.close(duration || 1000)
  }

  return (
    <ToastContext.Provider
      value={{
        toast,
        showToast,
        closeToast
      }}>
      <ToastComponent
        ref={(toastRef: ToastComponent) => setToast(toastRef)}
        textStyle={styles.toastText()}
        position={toastPosition}
        opacity={toastOpacity}
      />
      {children}
    </ToastContext.Provider>
  )
}

const styles = {
  toastText: (): TextStyle => ({ color: '#ffffff' })
}

export default ToastProvider
