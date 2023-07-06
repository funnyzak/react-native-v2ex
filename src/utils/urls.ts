/**
 * Created by Leon<silenceace@gmail.com> at 2023-03-30.
 */

import qs from 'qs'
import { Linking } from 'react-native'
export const open = async (url: string) => {
  const supported = await Linking.canOpenURL(url)
  if (supported) {
    return await Linking.openURL(url)
  }
  return Promise.reject(new Error(`Unable to open email URL: ${url}`))
}

export const openSystemSettings = () => Linking.openSettings()

export const sendEmail = async ({
  email,
  subject,
  body,
  cc,
  bcc
}: {
  email: string
  subject?: string
  body?: string
  cc?: string
  bcc?: string
}) => {
  const query = qs.stringify({
    subject: subject,
    body: body,
    cc: cc,
    bcc: bcc
  })
  const url = `mailto:${email}?${query}`
  return open(url)
}

export const getQueryUrl = (url: string, params: any) => {
  if (!params || Object.keys(params).length === 0) return url
  const query = qs.stringify(params)
  if (url.indexOf('?') > -1) {
    return `${url}&${query}`
  }
  return `${url}?${query}`
}

// const PHONE_DEFAULT_OPTION_TITLES = ['Call', 'Text', 'Cancel']
// export const clickPhoneNumber = async (
//   phone: string,
//   optionTitles?: string
// ) => {
//   const options =
//     optionTitles && optionTitles.length > 0
//       ? optionTitles.slice(0, 3)
//       : PHONE_DEFAULT_OPTION_TITLES
//   const cancelButtonIndex = options.length - 1
//   actionSheet().showActionSheetWithOptions(
//     {
//       options,
//       cancelButtonIndex
//     },
//     (buttonIndex: number) => {
//       switch (buttonIndex) {
//         case 0:
//           Linking.openURL(`tel:${phone}`).catch((e) => {
//             console.error(e, 'No handler for telephone')
//           })
//           break
//         case 1:
//           Linking.openURL(`sms:${phone}`).catch((e) => {
//             console.error(e, 'No handler for text')
//           })
//           break
//         default:
//           break
//       }
//     }
//   )
// }
