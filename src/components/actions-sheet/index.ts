/**
 * Created by Leon<silenceace@gmail.com> at 2022-11-05 20:08:36.
 * Last modified at 2022-11-06 13:49:16
 */

import { registerSheet } from 'react-native-actions-sheet'
import ConfirmSheet from './ConfirmSheet'
import ContentSheet from './ContentSheet'
import './MenuSheet'
registerSheet('confirm-sheet', ConfirmSheet, 'global')
registerSheet('content-sheet', ContentSheet, 'global')
export {}
/**
 * Since we are not importing our Sheets in any component or file, we want to make sure
 * they are bundled by the JS bundler. Hence we will import this file in App.js.
 */
