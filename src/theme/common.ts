import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { ITheme } from './types'

export const Layout = StyleSheet.create({
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  fill: {
    width: '100%',
    height: '100%'
  },
  fullWidth: {
    width: '100%'
  },
  fullHeight: {
    height: '100%'
  },
  flexRowStart: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start'
  }
})

export const Card = {
  container: (theme: ITheme): ViewStyle => ({
    ...Layout.fullWidth,
    backgroundColor: theme.colors.surface,
    paddingHorizontal: (theme.dimens.WINDOW_WIDTH - theme.dimens.layoutContainerWidth) / 2
  })
}

export const View = {
  background: (theme: ITheme): ViewStyle => ({
    backgroundColor: theme.colors.background
  })
}

export const Node = {
  nodeTitle: (theme: ITheme) => ({
    ...theme.typography.labelText,
    paddingVertical: 1,
    paddingHorizontal: theme.spacing.tiny,
    borderRadius: 4,
    color: theme.colors.secondary
  })
}

export const Divider = {
  item: (theme: ITheme): ViewStyle => ({
    height: 0.5,
    width: '100%',
    backgroundColor: theme.colors.border,
    marginVertical: theme.spacing.medium
  })
}

export const Button = {
  textAction: (theme: ITheme): TextStyle => ({
    ...theme.typography.labelText,
    marginTop: theme.spacing.medium,
    textAlign: 'center',
    borderWidth: 0,
    borderRadius: 5,
    maxWidth: 200,
    alignSelf: 'center',
    borderBottomColor: theme.colors.transparent,
    paddingHorizontal: theme.spacing.medium,
    color: theme.colors.secondary
  })
}
