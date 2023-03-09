import styled from 'styled-components'
import { useTheme } from '../context/themeContext'
import tw from 'twin.macro'
import { Theme } from '../types/types'
import DarkMod from './DarkMod'

const HeaderContainer = styled.header<{ customTheme: Theme }>`
  background-color: ${(props) => props.customTheme.backgroundSd};
  ${tw`
    w-full
    flex
    flex-row
    justify-between
    items-center
    p-6
  `}
`
const Title = styled.h1`
  ${tw`
      text-2xl
	    md:text-5xl
  `}
`

const Header = () => {
  const { theme } = useTheme()

  return (
    <HeaderContainer customTheme={theme}>
      <div>
        <Title>Where in the world?</Title>
      </div>
      <DarkMod />
    </HeaderContainer>
  )
}

export default Header
