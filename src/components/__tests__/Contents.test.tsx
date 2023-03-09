import { baseUrl } from '../../commons/constants'
import { useCountries } from '../../hooks/countries'
import { fetchMock } from '../../mocks/fetchMock'
import { mockCountries } from '../../mocks/mockCountries'
import {
  renderHook,
  renderTheme,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '../../test/test-utils'
import Contents from '../Contents'

afterEach(() => {
  fetchMock.restore()
})

describe(`Test du composant 'Contents'`, () => {
  test(`Le contenu affiche 'Loading' lors du chargement des données`, async () => {
    renderTheme(<Contents search={''} region={''} />)
    expect(screen.getByText(/Loading/i)).toBeInTheDocument()
  })

  test(`Le contenu affiche les données après le chargement`, async () => {
    fetchMock.mock(baseUrl, mockCountries)
    const { result } = renderHook(() => useCountries())

    renderTheme(<Contents search={''} region={''} />)
    await waitForElementToBeRemoved(screen.queryByText(/Loading/i))

    const name1 = screen.queryByText(/Tunisian Republic/i)
    const name2 = screen.queryByText(/Kingdom of Spain/i)

    expect(name1).toHaveTextContent(result.current.data![0].name.official)
    expect(name1).toBeInTheDocument()
    expect(name2).toHaveTextContent(result.current.data![1].name.official)
    expect(name2).toBeInTheDocument()
  })
  test(`Le contenu une erreur si la requête échoue`, async () => {
    fetchMock.mock(baseUrl, {
      throws: new Error('Requête échoué'),
    })

    renderTheme(<Contents search={''} region={''} />)
    await waitFor(() => screen.getByText(/Requête échoué/i))
    expect(
      screen.getByText('Error occured : Requête échoué'),
    ).toBeInTheDocument()
  })
})
