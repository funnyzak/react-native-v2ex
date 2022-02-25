import AsyncStorage from '@react-native-community/async-storage'
import { Store } from 'redux'
import { v2exLib } from '@src/v2ex'
import { initV2ex, setCurrentToken } from '../actions'
import { logError } from './logger'

export const onAppStart = async (store: Store) => {
  store.dispatch(initV2ex() as any)

  const memberToken = await AsyncStorage.getItem('memberToken')

  v2exLib.setToken(memberToken === null ? undefined : memberToken)

  if (memberToken) {
    try {
      store.dispatch(setCurrentToken(await v2exLib.member.token()))
    } catch (error) {
      console.log('onAppStart -> unable to retrieve current token', error)
      logError(error)
    }
  }
}
