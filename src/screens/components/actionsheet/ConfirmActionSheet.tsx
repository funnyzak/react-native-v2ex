/**
 * Created by leon<silenceace@gmail.com> on 22/05/28.
 */

import { Button } from '@src/components'
import { translate } from '@src/i18n'
import { SylCommon, useTheme } from '@src/theme'
import { ITheme } from '@src/types'
import React, { useRef } from 'react'
import { Text, TextStyle, View, ViewStyle } from 'react-native'
import ActionSheet, { SheetManager } from 'react-native-actions-sheet'

/**
 * Confirm Action Sheet
 * @returns
 */
const ConfirmActionSheet = ({
  sheetId,
  title,
  text,
  confirmAction,
  confirmText,
  cancelText
}: {
  sheetId: string
  title?: string
  text?: string
  confirmAction: (yes: boolean) => void
  confirmText?: string
  cancelText?: string
}) => {
  const { theme } = useTheme()
  const actionSheetRef = useRef<ActionSheet>(null)

  const buttonConfirm = async (yes: boolean) => {
    confirmAction && confirmAction(yes)
    if (!yes) {
      await SheetManager.hide(sheetId)
    }
  }

  return (
    <>
      <ActionSheet
        id={sheetId}
        initialOffsetFromBottom={1}
        onBeforeShow={(data) => console.log(data)}
        ref={actionSheetRef}
        statusBarTranslucent
        bounceOnOpen={true}
        drawUnderStatusBar={true}
        bounciness={8}
        gestureEnabled={true}
        defaultOverlayOpacity={0.5}
        containerStyle={{
          paddingTop: theme.spacing.medium,
          backgroundColor: theme.colors.surface,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20
        }}>
        <View style={[styles.container(theme), SylCommon.Card.container(theme)]}>
          {title && <Text style={styles.title(theme)}>{title}</Text>}
          {text && <Text style={styles.text(theme)}>{text}</Text>}
          <View style={styles.buttonContainer(theme)}>
            <Button
              type="large"
              onPress={() => buttonConfirm(false)}
              textColor={theme.colors.titleText}
              style={[
                styles.button(theme),
                {
                  backgroundColor: theme.colors.transparent
                }
              ]}>
              {cancelText || translate('common.cancel')}
            </Button>
            <Button type="large" onPress={() => buttonConfirm(true)} style={styles.button(theme)}>
              {confirmText || translate('common.confirm')}
            </Button>
          </View>
        </View>
      </ActionSheet>
    </>
  )
}

const styles = {
  safeareview: (theme: ITheme): ViewStyle => ({}),
  container: (theme: ITheme): ViewStyle => ({
    paddingBottom: theme.spacing.extraLarge,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: theme.colors.surface
  }),
  title: (theme: ITheme): TextStyle => ({
    ...theme.typography.headingTextBold,
    paddingVertical: theme.spacing.small
  }),
  text: (theme: ITheme): TextStyle => ({
    ...theme.typography.labelText,
    width: '100%',
    textAlign: 'left',
    paddingVertical: theme.spacing.small
  }),
  buttonContainer: (theme: ITheme): ViewStyle => ({
    paddingVertical: theme.spacing.small,
    flexDirection: 'row',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  }),
  button: (theme: ITheme): ViewStyle => ({
    width: '48%',
    borderRadius: 20
  })
}

export default ConfirmActionSheet
