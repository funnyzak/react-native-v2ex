import { APP_SETTING_LOCALES, Action, IState } from '@types'

const INITIAL_STATE: IState.SettingState = {
  languageTag: 'zh'
}

export default (state: IState.SettingState, action: Action): IState.SettingState => {
  const _merge = { ...INITIAL_STATE, ...state }
  switch (action.type) {
    case APP_SETTING_LOCALES:
      return { ..._merge, languageTag: action.payload }
    default:
      return state
  }
}
