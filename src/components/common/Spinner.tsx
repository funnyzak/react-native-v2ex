import React, { useContext } from 'react'
import { View, ViewPropTypes, StyleProp, ViewStyle, ActivityIndicator, FlexAlignType } from 'react-native'
import PropTypes from 'prop-types'
import { ThemeContext } from '../../theme'

const Spinner = ({ size, style }: { size: 'large' | 'small'; style: StyleProp<ViewStyle> }) => {
  const theme = useContext(ThemeContext)
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
