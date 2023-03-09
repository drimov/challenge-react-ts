import { screen } from '@testing-library/react'
import App from './App'
import { renderTheme } from './test/test-utils'

test('Vérifie si le titre est rendu', () => {
  renderTheme(<App />)
  const titleElement = screen.getByText(/Where in the world?/i)
  expect(titleElement).toBeInTheDocument()
})
