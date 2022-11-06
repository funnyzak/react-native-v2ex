import { registerSheet } from 'react-native-actions-sheet'
import ConfirmSheet from './ConfirmSheet'
import ContentSheet from './ContentSheet'
import './MenuSheet'

/**
 * Registering the sheets here because otherwise sheet closes on
 * hot reload during development.
 */
registerSheet('confirm-sheet', ConfirmSheet, 'global')
registerSheet('content-sheet', ContentSheet, 'global')

export {}

/**
 * Since we are not importing our Sheets in any component or file, we want to make sure
 * they are bundled by the JS bundler. Hence we will import this file in App.js.
 */
