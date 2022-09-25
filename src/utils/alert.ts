import { Alert } from 'react-native'
import { translate } from '@src/i18n'
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
  onOk?: (value?: string | undefined) => void
  onCancel?: (value?: string | undefined) => void
}

export const alert = ({ title = translate('common.tip'), message, onPress }: IAlert) => {
  Alert.alert(title, message, [{ text: translate('common.ok'), onPress: onPress }])
}

export const confirm = ({ title = translate('common.tip'), message, onOk: onOK, onCancel }: IConfirm) => {
  Alert.alert(title, message, [
    { text: translate('common.ok'), onPress: onOK, style: 'default' },
    { text: translate('common.cancel'), onPress: onCancel, style: 'cancel' }
  ])
}
