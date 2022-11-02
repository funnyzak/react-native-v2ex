import React from 'react'
import { Modal, View, ViewStyle } from 'react-native'
import Loading from '../loading'
import { useTheme, ITheme } from '@src/theme'

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
  modal: (theme: ITheme): ViewStyle => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
  }),
  modalContainer: (theme: ITheme): ViewStyle => ({
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
