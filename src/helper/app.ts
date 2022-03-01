import AsyncStorage from '@react-native-community/async-storage'
import { Store } from 'redux'
import { v2exLib } from '@src/v2ex'
import { initV2ex, setCurrentToken, tokenSync } from '../actions'
import { logError } from './logger'

export const onAppStart = async (store: Store) => {
  store.dispatch(initV2ex() as any)

  const memberToken = await AsyncStorage.getItem('memberTken')

  store.dispatch(tokenSync(memberToken ?? '') as any)
}
