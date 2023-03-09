import React from 'react'
import { ThemeString } from '../types/types'

export const THEME_KEY = 'theme'

type storageKey = ThemeString | null

const useThemeStorage = () => {
  const [local, setLocal] = React.useState<storageKey>(
    window.localStorage.getItem(THEME_KEY) as storageKey,
  )

  if (!local) {
    setLocalStorage('light', setLocal)
  }
  const setStorage = (text: ThemeString) => {
    if (text !== null) {
      setLocalStorage(text, setLocal)
    }
  }

  return { local, setStorage }
}

const setLocalStorage = (
  theme: ThemeString,
  setState: React.Dispatch<React.SetStateAction<storageKey>>,
) => {
  setState(theme)
  window.localStorage.setItem(THEME_KEY, theme)
}

export { useThemeStorage }
