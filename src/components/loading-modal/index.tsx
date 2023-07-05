/**
 * Created by Leon<silenceace@gmail.com> at 2022-02-28 16:15:21.
 * Last modified at 2022-11-02 12:06:19
 */

import React from 'react'
import { Modal, View, ViewStyle } from 'react-native'
import Loading from '../loading'
import { useTheme, Theme } from '@src/theme'
interface IProps {
  visible: boolean
}
const LoadingModalComponent = ({ visible }: IProps) => {
  const { theme } = useTheme()
  return (
    <Modal visible={visible} transparent>
      <View style={styles.modal(theme)}>
        <View style={styles.modalContainer(theme)}>
          <Loading visible />
        </View>
      </View>
    </Modal>
  )
}
const LoadingModal = React.memo(LoadingModalComponent)
export default LoadingModal
const styles = {
  modal: (theme: Theme): ViewStyle => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
  }),
  modalContainer: (theme: Theme): ViewStyle => ({
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2
  })
}
