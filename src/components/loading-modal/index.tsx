import Colors from '@src/theme/colors'
import React from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import Loading from '../loading'

interface IProps {
  visible: boolean
}

const LoadingModalComponent = ({ visible }: IProps) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.modal}>
        <View style={styles.modalContainer}>
          <Loading visible />
        </View>
      </View>
    </Modal>
  )
}

const LoadingModal = React.memo(LoadingModalComponent)

export default LoadingModal

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.modalBackground
  },
  modalContainer: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 8,

    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2
  }
})
