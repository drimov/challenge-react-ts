import { darkTheme, lightTheme } from '../../commons/constants'
import { getTheme } from '../helpers'

describe('Test de la fonction getTheme', () => {
  test(`Si la chaîne de caractère est 'light' alors on retourne l'objet 'lightTheme'`, () => {
    const result = getTheme('light')
    expect(result).toBe(lightTheme)
  })
  test(`Si la chaîne de caractère est 'dark' alors on retourne l'objet 'darkTheme'`, () => {
    const result = getTheme('dark')
    expect(result).toBe(darkTheme)
  })
})

describe('Test de la fonction getThemeString', () => {
  test(`Si le thème est light alors on retourne la chaîne de caratère 'light' `, () => {
    const result = getTheme('light')
    expect(result).toBe(lightTheme)
  })
  test(`Si le thème est dark alors on retourne la chaine de caractère est 'dark'`, () => {
    const result = getTheme('dark')
    expect(result).toBe(darkTheme)
  })
})
