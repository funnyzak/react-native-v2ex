/**
 * Created by Leon<silenceace@gmail.com> at 2023-04-04.
 */

import Clipboard from '@react-native-clipboard/clipboard'
export const copyToClipboard = (text: string) => {
  Clipboard.setString(text)
}
export const getFromClipboard = async () => {
  return await Clipboard.getString()
}
