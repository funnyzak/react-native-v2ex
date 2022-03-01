import { Alert } from 'react-native'

interface IBaseAlert {
  title?: string
  message: string
}

interface IAlert extends IBaseAlert {
  title?: string
  message: string
  onPress?: (value?: string | undefined) => void
}

interface IConfirm extends IBaseAlert {
  onConfirm?: (value?: string | undefined) => void
  onCancel?: (value?: string | undefined) => void
}

export const alert = ({ title = '提示', message, onPress }: IAlert) => {
  Alert.alert(title, message, [{ text: '确认', onPress: onPress }])
}

export const confirm = ({ title = '提示', message, onConfirm, onCancel }: IConfirm) => {
  Alert.alert(title, message, [
    { text: '确认', onPress: onConfirm, style: 'default' },
    { text: '取消', onPress: onCancel, style: 'cancel' }
  ])
}
