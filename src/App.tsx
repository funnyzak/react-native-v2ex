/**
 * Created by leon<silenceace@gmail.com> on 22/2/21.
 */
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { AppNavigationContainer } from './navigation/Navigator'
import { onAppStart } from './helper/app'
import { ThemeProvider, themes } from './theme'
import { store, persistor } from '@src/store'
import { Spinner } from './components/common'

onAppStart(store)

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <ThemeProvider>
          <AppNavigationContainer />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
