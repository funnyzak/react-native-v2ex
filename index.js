/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'
import 'react-native-gesture-handler'

// import { LogBox } from 'react-native'

// Ignore log notification by message:
// LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
// LogBox.ignoreAllLogs();

AppRegistry.registerComponent(appName, () => App)
