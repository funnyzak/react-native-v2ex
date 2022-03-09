import { Linking, Platform } from 'react-native'

export * as Utils from './utils'

export * as Adapter from './adapter'

export * as Params from './params'

export * as Parser from './parser'

export * as Alert from './alert'

import * as Alert from './alert'

export const linking = async (url: string) => {
  const supported = await Linking.canOpenURL(url)
  if (supported) {
    await Linking.openURL(url)
  } else {
    Alert.alert({ message: `Don't know how to open this URL: ${url}` })
  }
}
