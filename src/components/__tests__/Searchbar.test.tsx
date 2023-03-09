import { renderTheme, screen } from '../../test/test-utils'
import Searchbar from '../Searchbar'
import userEvent from '@testing-library/user-event'

const text = 'ceci est un test'
let handleSearchChange: (value: string) => void

beforeEach(() => {
  handleSearchChange = jest.fn()
})

describe('Test du champs de recherche', () => {
  test('Le champs est vide par défaut', () => {
    renderTheme(<Searchbar onChange={handleSearchChange} />)

    expect(screen.getByRole('textbox')).toHaveValue('')
  })
  test('Si on écrit dans le champs la méthode handleSearchChange doit être appelée', () => {
    renderTheme(<Searchbar onChange={handleSearchChange} />)
    const inputSearch = screen.getByText(/Search/i)

    userEvent.type(inputSearch, text)
    expect(handleSearchChange).toHaveBeenCalled()
  })
  test('Le mot clé tapé dans le champs de recherche doit être le même que celui recherché', () => {
    renderTheme(<Searchbar search={text} onChange={handleSearchChange} />)
    const inputSearch = screen.getByRole('textbox')

    expect(inputSearch).toHaveValue(text)
  })
})
