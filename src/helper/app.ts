import AsyncStorage from '@react-native-async-storage/async-storage'
import { Store } from 'redux'
import { ApiLib } from '@src/api'
import { initV2ex, setCurrentToken, logout } from '../actions'
import { MEMBER_TOKEN_KEY } from '@src/config/constants'
import { logError } from './logger'

export const onAppStart = async (store: Store) => {
  store.dispatch(initV2ex() as any)

  const memberToken = await AsyncStorage.getItem(MEMBER_TOKEN_KEY)
  if (memberToken !== null) {
    try {
      const token = await ApiLib.member.token(memberToken)
      store.dispatch(setCurrentToken(token))
    } catch (error) {
      store.dispatch(logout() as any)
      console.log('onAppStart -> unable to retrieve current member', error)
      logError(error)
    }
  }
}
