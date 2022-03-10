import React, { useState } from 'react'
import { TextStyle } from 'react-native'
import ToastComponent from 'react-native-easy-toast'
import ToastContext, { ToastPositionType } from './ToastContext'

type Props = {
  children?: JSX.Element
}

const ToastProvider = ({ children }: Props) => {
  const [toast, setToast] = useState<ToastComponent | undefined>(undefined)
  const [toastPosition, setToastPosition] = useState<ToastPositionType>('bottom')

  return (
    <ToastContext.Provider
      value={{
        toast,
        setPosition: setToastPosition
      }}>
      <ToastComponent ref={(toastRef: ToastComponent) => setToast(toastRef)} textStyle={styles.toastText()} position={toastPosition} />
      {children}
    </ToastContext.Provider>
  )
}

const styles = {
  toastText: (): TextStyle => ({ color: '#ffffff' })
}

export default ToastProvider
