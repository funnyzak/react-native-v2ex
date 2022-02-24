import { createStore, applyMiddleware, compose } from 'redux'
// https://github.com/reduxjs/redux-thunk
import thunk from 'redux-thunk'
// https://github.com/rt2zz/redux-persist
import { persistStore, persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import createFilter, { createBlacklistFilter } from 'redux-persist-transform-filter'
import AsyncStorage from '@react-native-community/async-storage'

import reducers from '@src/reducers'
import { window } from '@types'

const accountSubsetBlacklistFilter = createBlacklistFilter('account', ['refreshing'])
const uiSubsetBlacklistFilter = createBlacklistFilter('ui', ['refreshing'])

const persistConfig = {
  key: 'root',
  transforms: [accountSubsetBlacklistFilter, uiSubsetBlacklistFilter],
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, reducers as any)

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(persistedReducer, composeEnhancer(applyMiddleware(thunk)))

export const persistor = persistStore(store as any)

// TODO: remove `persistor.purge()` to persist your application data
persistor.purge()
