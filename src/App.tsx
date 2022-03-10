/**
 * Created by leon<silenceace@gmail.com> on 22/2/21.
 */

import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native'
import { NavigationContainerRefWithCurrent } from '@react-navigation/native'
import { RootStackParamList } from './navigation/routes'
import { Natigator } from './navigation/Navigator'
import { onAppStart } from './helper/app'
import { ThemeProvider, themes } from './theme'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { store, persistor } from '@src/store'
import { Spinner } from './components/common'
import NavigationService from './navigation/NavigationService'

onAppStart(store)

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer
          ref={(navigatorRef: NavigationContainerRefWithCurrent<RootStackParamList>) => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}>
          <PersistGate loading={<Spinner />} persistor={persistor}>
            <ThemeProvider>
              <Natigator />
            </ThemeProvider>
          </PersistGate>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  )
}

export default App
