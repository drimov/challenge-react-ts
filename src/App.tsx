import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import './App.css'
import { regionsList } from './commons/constants'
import Header from './components/Header'
import RegionList from './components/Regionlist'
import Searchbar from './components/Searchbar'
import { useTheme } from './context/themeContext'
import { Theme } from './types/types'

const AppContainer = styled.div<{ customTheme: Theme }>`
  background-color: ${(props) => props.customTheme.backgroundP};
  color: ${(props) => props.customTheme.foreground};

  ${tw`
			min-h-screen
	`}
`
const FiltersContainer = styled.div<{ customTheme: Theme }>`
  background-color: ${(props) => props.customTheme.backgroundP};

  ${tw`
			flex
			flex-row
			sm:flex-row
			justify-between
			px-10
			h-16
			my-24
			md:my-10
	`}
`

function App() {
  const { theme } = useTheme()
  const [search, setSearch] = React.useState<string>('')
  const [region, setRegion] = React.useState<string>(regionsList[0])

  const handleSearchChange = (value: string): void => {
    setSearch(value)
  }
  const handleRegion = (value: string): void => {
    setRegion(value)
  }

  return (
    <AppContainer customTheme={theme}>
      <Header />
      <FiltersContainer customTheme={theme}>
        <Searchbar search={search} onChange={handleSearchChange} />
        <RegionList handleRegion={handleRegion} region={region} />
      </FiltersContainer>
    </AppContainer>
  )
}

export default App
