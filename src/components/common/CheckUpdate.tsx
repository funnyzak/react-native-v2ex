/**
 * Created by leon<silenceace@gmail.com> on 11/8/2022 9:53:58 PM
 */
import { RELEASE_API } from '@src/config/constants'
import { logInfo } from '@src/helper/logger'
import { useAppSelector } from '@src/hooks'
import { NavigationService, ROUTES } from '@src/navigation'
import { resolve } from '@src/utils/promise'
import { compareVersion } from '@src/utils/utils'
import { useEffect } from 'react'
import { SheetManager } from 'react-native-actions-sheet'

interface CheckUpdateProps {}

const CheckUpdate = ({}: CheckUpdateProps) => {
  const app = useAppSelector((state) => state.app)

  const requestRelease = async () => {
    try {
      const api_res = await fetch(RELEASE_API)
      const api_data = await api_res.json()
      logInfo('CheckUpdate', 'requestRelease', api_data)
      if (api_data.message) {
        throw new Error(api_data.message)
      }
      return api_data
    } catch (e: any) {
      logInfo(`requestRelease error: ${e}`, e.stack)
      throw e
    }
  }

  useEffect(() => {
    const showUpdate = (release: any) => {
      SheetManager.show('confirm-sheet', {
        onClose: (data: any) => {
          if (data === true) {
            NavigationService.navigate(ROUTES.WebViewer, { url: release.html_url })
          }
        },
        payload: {
          confirmText: '了解更多',
          cancelText: '算了',
          title: `发现新版本 ${release.tag_name}`,
          description: `当前版本: ${app.version.version} 最新版本: ${release.tag_name} \r\n更新内容: ${release.body}`
        }
      })
    }

    const checkUpdate = async () => {
      const [_err, rlt] = await resolve(requestRelease())
      if (_err) return

      const hasNew = compareVersion(rlt.tag_name, app.version.version) > 0
      if (hasNew) showUpdate(rlt)
    }

    checkUpdate()
  }, [])

  return null
}

export default CheckUpdate
