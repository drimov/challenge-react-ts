import { render as renderReactTestingLib } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from '../context/themeContext'
import { ChildrenProps } from '../types/types'

const renderTheme = (ui: React.ReactElement) => {
  const Wrapper = ({ children }: ChildrenProps) => {
    return <ThemeProvider>{children}</ThemeProvider>
  }
  return renderReactTestingLib(ui, { wrapper: Wrapper })
}

export * from '@testing-library/react'
export { renderTheme }
