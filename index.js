/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'
import 'react-native-gesture-handler'

// Ignore log notification by message:
LogBox.ignoreLogs(['required dispatch_sync', 'flexWrap'])

// Ignore all log notifications:
// LogBox.ignoreAllLogs();

AppRegistry.registerComponent(appName, () => App)
