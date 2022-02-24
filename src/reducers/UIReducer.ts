import { V2EX_LOCALES, StoreAction, IState } from '@types'

const INITIAL_STATE = {
  languageTag: 'zh'
}

export default (state: IState.IUIState, action: StoreAction) => {
  const s = { ...INITIAL_STATE, ...state }
  switch (action.type) {
    case V2EX_LOCALES:
      return { ...s, languageTag: action.payload }
    default:
      return state
  }
}
