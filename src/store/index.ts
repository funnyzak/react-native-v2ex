import { applyMiddleware, legacy_createStore as createStore } from 'redux'
// https://github.com/reduxjs/redux-thunk
import thunk from 'redux-thunk'
// https://github.com/rt2zz/redux-persist
import AsyncStorage from '@react-native-async-storage/async-storage'
import { composeWithDevTools } from '@redux-devtools/extension'
import reducers from '@src/reducers'
import { persistReducer, persistStore } from 'redux-persist'
import { createBlacklistFilter } from 'redux-persist-transform-filter'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { IState } from './types'

const memberSubsetBlacklistFilter = createBlacklistFilter('member', [
  'refreshing',
  'followPeople.refreshing',
  'likeTopics.refreshing'
])

const uiSubsetBlacklistFilter = createBlacklistFilter('ui', [
  'refreshing',
  'login.loading',
  'login.success',
  'login.error',
  'feedback.processing'
])

const appSubsetBlacklistFilter = createBlacklistFilter('app', [
  'version',
  'latestVersion',
  'deviceInfo',
  'v2ex',
  'aboutUs'
])

const tabSubsetWhitelistFilter = createBlacklistFilter('tab', ['list'])

const notificationSubsetBlacklistFilter = createBlacklistFilter('notification', ['refreshing'])

const persistConfig = {
  key: 'root',
  transforms: [
    memberSubsetBlacklistFilter,
    uiSubsetBlacklistFilter,
    appSubsetBlacklistFilter,
    tabSubsetWhitelistFilter,
    notificationSubsetBlacklistFilter
  ],
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer<IState.State>(persistConfig, reducers as any)

const composeEnhancer = composeWithDevTools({
  // Specify name here, actionsDenylist, actionsCreators and other options if needed
})

export const store = createStore(persistedReducer, composeEnhancer(applyMiddleware(thunk)))

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// TODO: remove `persistor.purge()` to persist your application data
// persistor.purge()
