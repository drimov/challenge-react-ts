import userEvent from '@testing-library/user-event'
import { act, renderTheme, screen } from '../../test/test-utils'
import DarkMod from '../DarkMod'

describe(`Test du composant 'DarkMod'`, () => {
  test('Le thème change lors du clique sur le bouton', () => {
    renderTheme(<DarkMod />)

    const button = screen.getByLabelText('Theme')
    expect(screen.getByText(/Light Mode/i)).toBeInTheDocument()
    expect(screen.queryByText(/Dark Mode/i)).not.toBeInTheDocument()

    act(() => {
      userEvent.click(button)
    })
    
    expect(screen.queryByText(/Light Mode/i)).not.toBeInTheDocument()
    expect(screen.getByText(/Dark Mode/i)).toBeInTheDocument()
  })
})
