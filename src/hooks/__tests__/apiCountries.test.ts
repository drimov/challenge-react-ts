import { act, renderHook } from '@testing-library/react'
import { baseUrl } from '../../commons/constants'
import { fetchMock } from '../../mocks/fetchMock'
import { mockCountries } from '../../mocks/mockCountries'
import { useApiCountries } from '../apiCountries'

afterEach(() => {
  fetchMock.restore()
})

describe('Test du hook apiCountries', () => {
  test(`Par défaut les données et les erreurs sont null, et le status en 'idle'`, () => {
    const { result } = renderHook(useApiCountries)
    const { data, error, status } = result.current

    expect(data).toBe(null)
    expect(error).toBe(null)
    expect(status).toBe('idle')
  })

  test(`Si la requête réussi, alors les données de Countries son retournée avec un status 'done', et l'erreur à null`, async () => {
    const { result } = renderHook(() => useApiCountries())
    const { data, error, status } = result.current

    expect(data).toBe(null)
    expect(error).toBe(null)
    expect(status).toBe('idle')

    fetchMock.mock(baseUrl, {
      returnedData: mockCountries,
    })

    await act(async () => {
      result.current.execute()
    })
    expect(result.current.data).toStrictEqual({ returnedData: mockCountries })
    expect(result.current.error).toBe(null)
    expect(result.current.status).toBe('done')
  })

  test(`Si la requête échoue, alors les données sont nulles, le status 'fail', et l'erreur retourné est 'Requête échoué'`, async () => {
    const { result } = renderHook(() => useApiCountries())
    const { data, error, status } = result.current

    expect(data).toBe(null)
    expect(error).toBe(null)
    expect(status).toBe('idle')

    fetchMock.mock(baseUrl, {
      throws: new Error('Requête échoué'),
    })

    await act(async () => {
      result.current.execute()
    })

    expect(result.current.data).toStrictEqual(null)
    expect(result.current.error).toBe('Requête échoué')
    expect(result.current.status).toBe('fail')
  })
})
