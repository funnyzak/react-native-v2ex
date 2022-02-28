import { createStore, applyMiddleware, compose } from 'redux'
// https://github.com/reduxjs/redux-thunk
import thunk from 'redux-thunk'
// https://github.com/rt2zz/redux-persist
import { persistStore, persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { createBlacklistFilter } from 'redux-persist-transform-filter'
import AsyncStorage from '@react-native-community/async-storage'

import reducers from '@src/reducers'
import { window } from '@src/types'

const memberSubsetBlacklistFilter = createBlacklistFilter('member', ['refreshing'])
const uiSubsetBlacklistFilter = createBlacklistFilter('ui', ['refreshing'])
const appSubsetBlacklistFilter = createBlacklistFilter('app', ['refreshing', 'errorMessage', 'latestVersion', 'deviceInfo', 'v2ex'])
const homeSubsetBlacklistFilter = createBlacklistFilter('home', ['refreshing'])
const settingSubsetBlacklistFilter = createBlacklistFilter('setting', ['refreshing'])
const notificationSubsetBlacklistFilter = createBlacklistFilter('notification', ['refreshing'])

const persistConfig = {
  key: 'root',
  transforms: [
    memberSubsetBlacklistFilter,
    uiSubsetBlacklistFilter,
    appSubsetBlacklistFilter,
    homeSubsetBlacklistFilter,
    settingSubsetBlacklistFilter,
    notificationSubsetBlacklistFilter
  ],
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, reducers as any)

const composeEnhancer = window ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

export const store = createStore(persistedReducer, composeEnhancer(applyMiddleware(thunk)))

export const persistor = persistStore(store as any)

export type TStore = typeof store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// TODO: remove `persistor.purge()` to persist your application data
// persistor.purge()
