import { darkTheme, lightTheme } from '../commons/constants'
import { Theme, ThemeString } from '../types/types'

export const getTheme = (text: ThemeString): Theme => {
  return text === 'light' ? lightTheme : darkTheme
}

export const getThemeString = (theme: Theme): ThemeString => {
  return theme === lightTheme ? 'light' : 'dark'
}
