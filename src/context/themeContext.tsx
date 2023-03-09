import React from 'react'
import { lightTheme } from '../commons/constants'
import { useThemeStorage } from '../hooks/themeStorage'
import { ChildrenProps, Theme } from '../types/types'
import { getTheme, getThemeString } from '../utils/helpers'

type Context = {
  theme: Theme
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

const ThemeContext = React.createContext<Context>({
  theme: lightTheme as Theme,
  setTheme: () => {},
})

const ThemeProvider = ({ children }: ChildrenProps) => {
  const { local, setStorage } = useThemeStorage()
  const [theme, setTheme] = React.useState<Theme>(
    local !== null ? getTheme(local) : lightTheme,
  )
  React.useEffect(() => {
    setStorage(getThemeString(theme))
  }, [theme, setStorage])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = React.useContext(ThemeContext)

  if (!context) {
    throw new Error(
      `${useTheme.name} doit être utiliser dans ${ThemeProvider.name}`,
    )
  }
  return context
}

export { useTheme, ThemeProvider }
