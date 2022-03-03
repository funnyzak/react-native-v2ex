/**
 * Created by leon<silenceace@gmail.com> on 22/3/03.
 */
import themes, { ThemeType } from '@src/theme/themes'
import { useAppSelector } from '.'

export const useTheme = () => {
  const theme = useAppSelector((_state: any) => themes[_state.app.theme as ThemeType])

  return {
    theme
  }
}
