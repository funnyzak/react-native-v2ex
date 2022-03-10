/**
 * Created by leon<silenceace@gmail.com> on 22/3/10.
 */
import { ReactNode } from 'react'
import ToastComponent from 'react-native-easy-toast'
import React, { useContext } from 'react'

export type ToastPositionType = 'top' | 'center' | 'bottom'
export interface ToastShowProps {
  text: string | ReactNode
  position?: ToastPositionType
  duration?: number
  opacity?: number
  callback?: () => void
}

export type ToastShowType = ToastShowProps | string
export interface ToastContextProps {
  toast: ToastComponent | undefined
  showToast: (opts: ToastShowType) => void
  closeToast: (duration?: number) => void
}

export const ToastContext = React.createContext<ToastContextProps>({
  toast: undefined,
  showToast: () => {},
  closeToast: () => {}
})
export const useToast = () => useContext(ToastContext)

export default ToastContext
