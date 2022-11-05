import React, { useRef } from 'react'
import ActionSheet, { ActionSheetRef, registerSheet, SheetProps } from 'react-native-actions-sheet'
import MenuButton from './Btn'

const Sheet = (props: SheetProps) => {
  const actionSheetRef = useRef<ActionSheetRef>(null)

  return (
    <ActionSheet
      ref={actionSheetRef}
      id={props.sheetId}
      statusBarTranslucent
      gestureEnabled={true}
      containerStyle={{ backgroundColor: '#BFD7EA' }}
      indicatorStyle={{ backgroundColor: 'rgba(71, 87, 114, 0.13)' }}>
      <MenuButton title="操作 一" onPress={() => console.log('action 1')} />
      <MenuButton title="操作 二" onPress={() => console.log('action 2')} />
      <MenuButton title="操作 三" color={'#c0392b'} onPress={() => console.log('action 3...')} />
    </ActionSheet>
  )
}

registerSheet('menu-sheet', Sheet)

export default Sheet
