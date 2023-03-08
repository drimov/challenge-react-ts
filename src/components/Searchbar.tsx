import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useTheme } from '../context/themeContext'
import { Theme } from '../types/types'

const SearchbarContainer = styled.div<{ customTheme: Theme }>`
  background-color: ${(props) => props.customTheme.backgroundSd};
  ${tw`
      flex
      flex-row
      rounded-md
      items-center
      my-2
      md:m-0
  `}
`
const Label = styled.label`
  ${tw`
        hidden
    `}
`
const InputContainer = styled.input.attrs({
  type: 'text',
  placeholder: 'Search for a country...',
})<{ customTheme: Theme }>`
  background-color: ${(props) => props.customTheme.backgroundSd};
  ${tw`
      text-base
      md:text-2xl
      md:m-3
      w-min
      rounded-md
      m-3
  `};
`

type InputProps = {
  onChange: (value: string) => void
  search: string
  theme: Theme
}

const Input = ({ onChange, search, theme }: InputProps) => {
  return (
    <InputContainer
      customTheme={theme}
      id={'search'}
      onChange={(e) => onChange(e.target.value)}
      value={search}
    />
  )
}
const Icon = () => {
  return <MagnifyingGlassIcon className={`m-3 hidden h-10 md:block`} />
}

type SearchBarProps = {
  search: string
  onChange: (value: string) => void
}

const Searchbar = ({ search = '', onChange }: SearchBarProps) => {
  const { theme } = useTheme()

  return (
    <SearchbarContainer customTheme={theme}>
      <Icon />
      <Label htmlFor="search">Search</Label>
      <Input theme={theme} search={search} onChange={onChange} />
    </SearchbarContainer>
  )
}

export default Searchbar
