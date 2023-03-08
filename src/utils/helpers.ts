import { darkTheme, lightTheme } from '../commons/constants'
import { Theme, ThemeString } from '../types/types'

export const getTheme = (text: ThemeString): Theme => {
  if (!text) {
    throw new Error(`le texte n'est pas renseigner pour ${getTheme.name}`)
  }
  return text === 'light' ? lightTheme : darkTheme
}

export const getThemeString = (theme: Theme): ThemeString => {
  if (!theme) {
    throw new Error(`le thème n'est pas renseigner pour ${getThemeString.name}`)
  }
  return theme === lightTheme ? 'light' : 'dark'
}
