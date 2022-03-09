import { Alert } from 'react-native'
import { translate } from '@src/i18n'
interface IBaseAlert {
  title?: string
  message: string
}

const tipTitle = translate('common.tip')
const btnOk = translate('common.ok')
const btnCancel = translate('common.cancel')
interface IAlert extends IBaseAlert {
  title?: string
  message: string
  onPress?: (value?: string | undefined) => void
}

interface IConfirm extends IBaseAlert {
  onOk?: (value?: string | undefined) => void
  onCancel?: (value?: string | undefined) => void
}

export const alert = ({ title = tipTitle, message, onPress }: IAlert) => {
  Alert.alert(title, message, [{ text: btnOk, onPress: onPress }])
}

export const confirm = ({ title = tipTitle, message, onOk: onOK, onCancel }: IConfirm) => {
  Alert.alert(title, message, [
    { text: btnOk, onPress: onOK, style: 'default' },
    { text: btnCancel, onPress: onCancel, style: 'cancel' }
  ])
}
