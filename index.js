/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

// Ignore log notification by message:
// LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
// LogBox.ignoreAllLogs();

AppRegistry.registerComponent(appName, () => App)
