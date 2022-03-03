import React from 'react'
import { View, ViewPropTypes, StyleProp, ViewStyle, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import { useTheme } from '@src/theme'

const Spinner = ({ size, style }: { size: 'large' | 'small'; style: StyleProp<ViewStyle> }) => {
  const { theme } = useTheme()
  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        },
        style
      ]}>
      <ActivityIndicator size={size} color={theme.colors.secondary} />
    </View>
  )
}

Spinner.propTypes = {
  size: PropTypes.oneOf(['large', 'small']),
  style: ViewPropTypes.style
}

Spinner.defaultProps = {
  size: 'large',
  style: {}
}

export { Spinner }
