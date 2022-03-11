import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { auto } from './themes'
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
  }
})

export const View = {
  background: (theme: ITheme): ViewStyle => ({
    backgroundColor: theme.colors.background
  })
}

export const Node = {
  node: (theme: ITheme) => ({
    fontSize: 12,
    paddingVertical: 1,
    paddingHorizontal: 8,
    backgroundColor: theme.colors.surface,
    borderRadius: 4,
    color: theme.colors.secondary
  }),
  small: (theme: ITheme) => ({
    fontSize: 10
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
    padding: theme.spacing.small,
    textAlign: 'center',
    textDecorationLine: 'underline',
    paddingHorizontal: theme.spacing.medium
  })
}

export const Table = {
  container: (theme: ITheme): ViewStyle => ({
    marginTop: theme.spacing.small,
    backgroundColor: theme.colors.surface
  }),
  item: (theme: ITheme): ViewStyle => ({
    padding: theme.spacing.large,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }),
  itemText: (theme: ITheme, actived: boolean = false): TextStyle => ({
    ...theme.typography.subheadingText,
    color: actived ? theme.colors.secondaryDark : theme.colors.titleText
  }),
  itemRightText: (theme: ITheme): TextStyle => ({
    ...theme.typography.captionText,
    color: theme.colors.bodyText
  }),
  itemArrow: (theme: ITheme): ImageStyle => ({
    width: theme.typography.subheadingText.fontSize,
    height: theme.typography.subheadingText.fontSize
  })
}

export const Grid = {
  container: (theme: ITheme): ViewStyle => ({
    marginTop: theme.spacing.small,
    paddingVertical: theme.spacing.tiny,
    flexDirection: 'row',
    paddingHorizontal: theme.spacing.extraLarge,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.surface
  }),
  item: (theme: ITheme): ViewStyle => ({
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8
  }),
  itemValue: (theme: ITheme): TextStyle => ({
    ...theme.typography.headingText
  }),
  itemTitle: (theme: ITheme): TextStyle => ({
    ...theme.typography.captionText,
    color: theme.colors.titleText
  })
}
