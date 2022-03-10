/**
 * Created by leon<silenceace@gmail.com> on 22/3/10.
 */
import ToastComponent from 'react-native-easy-toast'
import React, { useContext } from 'react'

export type ToastPositionType = 'top' | 'center' | 'bottom'

export interface ToastContextProps {
  toast: ToastComponent | undefined
  setPosition: (position: ToastPositionType) => void
}

export const ToastContext = React.createContext<ToastContextProps>({ toast: undefined, setPosition: () => {} })
export const useToast = () => useContext(ToastContext)

export default ToastContext
