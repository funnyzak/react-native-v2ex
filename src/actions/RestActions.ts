import AsyncStorage from '@react-native-async-storage/async-storage'
import { Dispatch } from 'redux'
import _ from 'lodash'
import { ApiLib } from '@src/api'
import { fetchAllNode } from './NodeActions'
import { AppApiOptions } from '@src/config/app.config'
import { MEMBER_TOKEN_KEY } from '@src/config/constants'
import { APP_INIT, APP_SITE_STAT, APP_INIT_ERROR, APP_SITE_INFO, APP_ALL_NODE_INFO, IState } from '../types'
import { logError } from '@src/helper/logger'
import DeviceInfo from 'react-native-device-info'
import { RootState } from '@src/store'

export const initV2ex = () => {
  ApiLib.setOptions(AppApiOptions)

  return async (dispatch: Dispatch, _getState: () => RootState) => {
    try {
      ApiLib.init()

      const customerToken = await AsyncStorage.getItem(MEMBER_TOKEN_KEY)

      ApiLib.setUserAgent(await DeviceInfo.getUserAgent())
      if (customerToken !== null) {
        ApiLib.setToken(customerToken)
      }

      dispatchSiteInfo(dispatch)

      dispatchSiteStat(dispatch)

      dispatch(fetchAllNode() as any)

      dispatch({
        type: APP_INIT,
        payload: {
          v2ex: ApiLib,

          name: DeviceInfo.getApplicationName(),

          deviceInfo: {
            brand: DeviceInfo.getBrand(),
            bundleId: DeviceInfo.getBundleId(),
            systemName: DeviceInfo.getSystemName(),
            systemVersion: DeviceInfo.getSystemVersion(),
            uniqueId: DeviceInfo.getUniqueId(),
            userAgent: await DeviceInfo.getUserAgent()
          },

          version: {
            version: DeviceInfo.getVersion(),
            buildId: DeviceInfo.getBuildNumber(),
            buildNumber: DeviceInfo.getBuildNumber()
          }
        }
      })
    } catch (error: any) {
      logError(error)
      dispatch({
        type: APP_INIT_ERROR,
        payload: { errorMessage: error.message }
      })
    }
  }
}

const dispatchSiteInfo = async (dispatch: Dispatch) => {
  try {
    const site_info = await ApiLib.siteInfo()

    dispatch({
      type: APP_SITE_INFO,
      payload: site_info
    })
  } catch (e) {
    logError(e)
  }
}

const dispatchSiteStat = async (dispatch: Dispatch) => {
  try {
    const site_stat = await ApiLib.siteStat()

    dispatch({
      type: APP_SITE_STAT,
      payload: site_stat
    })
  } catch (e) {
    logError(e)
  }
}
