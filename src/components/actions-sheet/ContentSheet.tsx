/**
 * Created by leon<silenceace@gmail.com> on 22/11/06.
 */
import { translate } from '@src/i18n'
import { SylCommon, useTheme } from '@src/theme'
import { ITheme } from '@src/types'
import React, { useRef } from 'react'
import { ScrollView, Text, TextStyle, View, ViewStyle } from 'react-native'
import ActionSheet, { ActionSheetRef, SheetProps } from 'react-native-actions-sheet'

/* usage:
  SheetManager.show('content-sheet', {
    payload: {
      title: '这是标题',
      height: 100,
      text: '这是内容'
    }
  })
**/

const ContentSheet = (props: SheetProps) => {
  const { theme } = useTheme()
  const {
    sheetId,
    payload: { title = translate('brand.name'), textStyle, text = '无内容', height = theme.dimens.WINDOW_HEIGHT / 2 }
  } = props
  const actionSheetRef = useRef<ActionSheetRef>(null)

  return (
    <ActionSheet
      id={sheetId}
      springOffset={50}
      onBeforeShow={(data) => console.log(data)}
      ref={actionSheetRef}
      statusBarTranslucent
      drawUnderStatusBar={true}
      gestureEnabled={true}
      defaultOverlayOpacity={0.5}
      containerStyle={{
        paddingTop: theme.spacing.medium,
        backgroundColor: theme.colors.surface,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
      }}>
      <View
        style={[
          styles.container(theme),
          SylCommon.Card.container(theme),
          {
            height: height
          }
        ]}>
        {title && <Text style={styles.title(theme)}>{title}</Text>}
        <ScrollView>
          <Text style={[styles.text(theme), textStyle]}>{text || '无'} </Text>
        </ScrollView>
      </View>
    </ActionSheet>
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
    ...theme.typography.bodyText,
    lineHeight: theme.typography.bodyText.fontSize! * 2,
    flexWrap: 'wrap'
  })
}

export default ContentSheet
