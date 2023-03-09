import { act, renderTheme, screen } from '../../test/test-utils'
import RegionList from '../RegionList'
import userEvent from '@testing-library/user-event'

type handleRegionType = (
  value: string,
  e?: React.MouseEvent<HTMLLIElement>,
) => void

const handleRegionMock: jest.Mock<handleRegionType> = jest.fn(
  (choice) => choice,
)

describe('Test de la liste de région', () => {
  test("Si on clique sur le menu déroulant s'ouvre et affiche les régions", () => {
    const region = 'All'
    renderTheme(<RegionList region={region} handleRegion={handleRegionMock} />)

    const button = screen.getByRole('button')
    expect(screen.queryByText(/Europe/i)).not.toBeInTheDocument()

    act(() => {
      userEvent.click(button)
    })
    expect(screen.queryByText(/Europe/i)).toBeInTheDocument()
  })

  test('Si on clique sur un menu de la liste on récupère la région', () => {
    const region = 'All'
    renderTheme(<RegionList region={region} handleRegion={handleRegionMock} />)

    const button = screen.getByLabelText(/Region List/i)
    act(() => {
      userEvent.click(button)
    })
    act(() => {
      userEvent.click(screen.getByText(/Europe/i))
    })
    expect(handleRegionMock).toHaveBeenCalled()
    expect(handleRegionMock.mock.calls[0][0]).toBe('Europe')
  })
})
