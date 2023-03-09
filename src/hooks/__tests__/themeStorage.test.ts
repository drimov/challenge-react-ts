import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { THEME_KEY, useThemeStorage } from '../themeStorage'

beforeEach(() => {
  window.localStorage.clear()
})

describe('Test du hook themeStorage', () => {
  test(`Par défaut le thème 'light' est stocké dans le localStorage`, () => {
    const { result } = renderHook(useThemeStorage)
    const localStorage = window.localStorage.getItem(THEME_KEY)

    expect(result.current.local).toEqual('light')
    expect(localStorage).toBe('light')
  })

  test(`Si on change le thème alors le thème est 'dark', est stocké dans le localStorage`, () => {
    const { result } = renderHook(useThemeStorage)

    expect(result.current.local).toEqual('light')

    act(() => {
      result.current.setStorage('dark')
    })
    const localStorage = window.localStorage.getItem(THEME_KEY)

    expect(result.current.local).toEqual('dark')
    expect(localStorage).toBe('dark')
  })
})
