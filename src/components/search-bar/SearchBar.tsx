/**
 * Created by leon<silenceace@gmail.com> on 2022-11-20.
 */
import { logInfo } from '@src/helper/logger'
import { ITheme, useTheme } from '@src/theme'
import React, { memo, useCallback, useRef, useState } from 'react'
import {
  ColorValue,
  Keyboard,
  LayoutChangeEvent,
  NativeSyntheticEvent,
  Pressable,
  StyleProp,
  Text,
  TextInput,
  TextInputChangeEventData,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle
} from 'react-native'
import ClearIcon from './ClearIcon'
import SearchIcon from './SearchIcon'

interface SearchBarProps {
  searchToolContainerStyle?: StyleProp<ViewStyle>
  clearButton?: boolean
  onActiveSearch: (val: boolean) => void
  onSubmitSearch: (val: string) => void
  inputActiveColor?: ColorValue
  inputInactiveColor?: ColorValue
  inputContainerStyle?: StyleProp<ViewStyle>
  inputTextStyle?: StyleProp<TextStyle>
  inputProps?: TextInputProps
  customIcon?: React.ReactNode
  iconStyle?: StyleProp<ViewStyle>
  buttonStyle?: StyleProp<ViewStyle>
  buttonText?: string
  buttonTextStyle?: StyleProp<TextStyle>
}

const SearchBarComponent = ({
  searchToolContainerStyle,
  onActiveSearch,
  onSubmitSearch,
  clearButton = true,
  customIcon,
  iconStyle,
  inputProps,
  inputTextStyle,
  buttonStyle,
  buttonText = 'Search',
  buttonTextStyle,
  inputContainerStyle,
  inputActiveColor,
  inputInactiveColor
}: SearchBarProps) => {
  const { theme } = useTheme()

  const [inputTextActive, setInputTextActive] = useState(false)
  const [inputValue, setInputValue] = useState('')
  let textInputRef = useRef<TextInput>()
  let shouldClearButtonShow = useRef(false)

  const onSubmit = () => {
    logInfo('onSubmit')
    shouldClearButtonShow.current = false

    onSubmitSearch(inputValue)
    // dissmiss keyboard
    Keyboard.dismiss()
    textInputRef.current?.blur()
  }
  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    logInfo('onChange')
    setInputValue(e.nativeEvent.text)
  }
  const onLayout = (e: LayoutChangeEvent) => {
    logInfo('onLayout', e)
  }
  const onFocus = useCallback(() => {
    shouldClearButtonShow.current = true
    setInputTextActive(true)
    onActiveSearch(true)
  }, [])
  const onBlur = useCallback(() => {
    shouldClearButtonShow.current = false
    setInputTextActive(false)
    onActiveSearch(false)
  }, [])
  return (
    <View style={[styles.searchToolContainer(theme), searchToolContainerStyle]}>
      <View
        style={[
          styles.inputContainerStyle(theme),
          {
            borderColor: inputTextActive
              ? inputActiveColor ?? theme.colors.secondary
              : inputInactiveColor ?? theme.colors.grey
          },
          inputContainerStyle
        ]}>
        {customIcon ? (
          customIcon
        ) : (
          <SearchIcon
            width={20}
            height={20}
            stroke={theme.colors.grey}
            strokeWidth={1.8}
            style={[styles.iconStyle(theme), iconStyle]}
          />
        )}
        <TextInput
          style={[
            styles.searchBarInput(theme),
            inputTextStyle,
            {
              // marginRight: layout && activeSearchBar ? layout.width + 10 : 0
            }
          ]}
          value={inputValue}
          onSubmitEditing={onSubmit}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="Please enter your search"
          placeholderTextColor={theme.colors.grey}
          ref={(ref: any) => (textInputRef = ref)}
          {...inputProps}
        />
        {clearButton && shouldClearButtonShow.current && (
          <Pressable onPress={() => setInputValue('')}>
            <ClearIcon
              style={{
                marginHorizontal: 5
              }}
              width={15}
              height={15}
              stroke={theme.colors.grey}
              strokeWidth={1.8}
            />
          </Pressable>
        )}
      </View>
      <Pressable onLayout={onLayout} onPress={onSubmit} style={[styles.searchButton(theme), buttonStyle]}>
        <Text style={[styles.searchButtonText(theme), buttonTextStyle]}>{buttonText}</Text>
      </Pressable>
    </View>
  )
}

const SearchBar = memo(SearchBarComponent)

const styles = {
  searchToolContainer: (theme: ITheme): ViewStyle => ({
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 30
  }),
  inputContainerStyle: (theme: ITheme): ViewStyle => ({
    height: '100%',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }),
  searchBarInput: (theme: ITheme): TextStyle => ({
    fontSize: 16,
    height: '100%',
    lineHeight: 22,
    fontWeight: 'normal',
    color: theme.colors.darkGrey,
    padding: theme.spacing.tiny,
    flex: 1
  }),
  searchButton: (theme: ITheme): ViewStyle => ({
    borderRadius: 5,
    marginLeft: theme.spacing.tiny,
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.secondary
  }),
  searchButtonText: (theme: ITheme): TextStyle => ({
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
    color: '#f5f3ff'
  }),
  iconStyle: (theme: ITheme): ViewStyle => ({
    marginRight: 10,
    marginLeft: 5
  })
}

export default SearchBar
