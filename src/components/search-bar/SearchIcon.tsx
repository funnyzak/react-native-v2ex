/**
 * Created by leon<silenceace@gmail.com> on 2022-11-20.
 */
import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const SearchIconComponent = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 20 20" stroke="currentColor" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </Svg>
  )
}

const SearchIcon = React.memo(SearchIconComponent)

export default SearchIcon
