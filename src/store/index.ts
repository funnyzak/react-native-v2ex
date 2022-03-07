import { createStore, applyMiddleware, compose } from 'redux'
// https://github.com/reduxjs/redux-thunk
import thunk from 'redux-thunk'
// https://github.com/rt2zz/redux-persist
import { persistStore, persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { createBlacklistFilter } from 'redux-persist-transform-filter'
import AsyncStorage from '@react-native-community/async-storage'
import { composeWithDevTools } from '@redux-devtools/extension'
import reducers from '@src/reducers'

const memberSubsetBlacklistFilter = createBlacklistFilter('member', ['refreshing'])
const uiSubsetBlacklistFilter = createBlacklistFilter('ui', [
  'refreshing',
  'login.message',
  'login.loading',
  'login.success',
  'login.error',
  'feedback.processing',
  'home.refreshing',
  'home.success',
  'home.error',
  'home.list'
])
const appSubsetBlacklistFilter = createBlacklistFilter('app', ['refreshing', 'errorMessage', 'version', 'latestVersion', 'deviceInfo', 'v2ex'])
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

const composeEnhancer = composeWithDevTools({
  // Specify name here, actionsDenylist, actionsCreators and other options if needed
})

export const store = createStore(persistedReducer, composeEnhancer(applyMiddleware(thunk)))

export const persistor = persistStore(store as any)

export type TStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// TODO: remove `persistor.purge()` to persist your application data
// persistor.purge()
