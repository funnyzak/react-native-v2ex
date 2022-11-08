import AsyncStorage from '@react-native-async-storage/async-storage'
import { ApiLib } from '@src/api'
import { AppApiOptions } from '@src/config/app.config'
import { MEMBER_TOKEN_KEY } from '@src/config/constants'
import { logError } from '@src/helper/logger'
import { RootState } from '@src/store'
import DeviceInfo from 'react-native-device-info'
import { Dispatch } from 'redux'
import { APP_INIT, APP_INIT_ERROR, APP_SITE_INFO, APP_SITE_STAT } from '../types'
import { fetchAllNode } from './NodeActions'

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

          name: await DeviceInfo.getApplicationName(),

          deviceInfo: {
            brand: await DeviceInfo.getBrand(),
            bundleId: await DeviceInfo.getBundleId(),
            systemName: await DeviceInfo.getSystemName(),
            systemVersion: await DeviceInfo.getSystemVersion(),
            uniqueId: await DeviceInfo.getUniqueId(),
            userAgent: await DeviceInfo.getUserAgent()
          },

          version: {
            version: await DeviceInfo.getVersion(),
            buildId: await DeviceInfo.getBuildNumber(),
            buildNumber: await DeviceInfo.getBuildNumber()
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
