import { useEffect, useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useTheme } from '../context/themeContext'
import { useCountries } from '../hooks/countries'
import { Countries, Theme } from '../types/types'

const StatusContainer = styled.div``
const StatusText = styled.p`
  ${tw`
      text-center
      h-screen
  `}
`
const FilterContainer = styled.div`
  ${tw`
      flex
      flex-wrap
      justify-center
  `}
`
const DisplayContainer = styled.div<{ customTheme: Theme }>`
  background-color: ${(props) => props.customTheme.backgroundSd};
  ${tw`
      w-64
      m-4
      rounded-md
  `}
`

const DisplayInfos = styled.div`
  ${tw`
      m-4
  `}
`
type StatusProps = {
  text: string
  value?: string | null
}

const Status = ({ text, value = null }: StatusProps) => {
  return (
    <StatusContainer>
      <StatusText>
        {text} {value ? `: ${value}` : ''}
      </StatusText>
    </StatusContainer>
  )
}

type ContentsProps = {
  search: string
  region: string
}

const Contents = ({ search, region }: ContentsProps) => {
  const [component, setComponant] = useState<string | null>(null)
  const state = useCountries()
  const { data, error, status } = state

  useEffect(() => {
    if (search !== '' && search !== undefined && search !== null) {
      setComponant('search')
    }
  }, [search])
  useEffect(() => {
    region === 'All' ? setComponant(null) : setComponant('region')
  }, [region])

  switch (status) {
    case 'idle':
      return <Status text={`Initialization...`} />
    case 'fetching':
      return <Status text={`Loading...`} />
    case 'fail':
      return <Status text={`Error occured : ${error}`} />
    case 'done':
      return (
        <Filters
          component={component}
          data={data!}
          search={search}
          region={region}
        />
      )

    default:
      throw new Error(`Status is null`)
  }
}

type FiltersProps = {
  component: string | null
  data: Countries
  search: string
  region: string
}

const Filters = ({ component, data, search, region }: FiltersProps) => {
  let choice: React.ReactNode = null

  switch (component) {
    case null:
      choice = <ContentDisplay dataFilter={data} />
      break
    case 'region':
      choice = <FilterByRegion world={data} region={region} />
      break
    case 'search':
      choice = <FilterBySearch world={data} search={search} />
      break
    default:
      throw new Error(`No component choose in Filters`)
  }
  return <FilterContainer>{choice}</FilterContainer>
}

type ContentDisplayProps = {
  dataFilter: Countries
}
const ContentDisplay = ({ dataFilter }: ContentDisplayProps) => {
  const { theme } = useTheme()

  return (
    <>
      {dataFilter?.map((item, index) => (
        <DisplayContainer key={index} customTheme={theme}>
          <DisplayImg imgFlag={item.flags.svg} alt={item?.altSpellings[0]} />
          <DisplayInfos>
            <p>Name: {item.name.official}</p>
            <p>Capital: {item.capital}</p>
            <p>Region: {item.region}</p>
            <p>Population: {item.population}</p>
            <p>
              Currencies :{' '}
              {Object.values(item.currencies).map((currency, index) => (
                <span key={index}>
                  {currency.name} <br />
                  Symbol : {currency.symbol}
                </span>
              ))}
            </p>
          </DisplayInfos>
        </DisplayContainer>
      ))}
    </>
  )
}

type WorldProps = {
  world: Countries
}

type FilterSearchProps = WorldProps & {
  search: string
}
const FilterBySearch = ({ world, search }: FilterSearchProps) => {
  const dataFilter = world.filter((item) =>
    item.name.official.toLowerCase().includes(search.toLowerCase()),
  )

  return <ContentDisplay dataFilter={dataFilter} />
}

type FilterRegionProps = WorldProps & {
  region: string
}
const FilterByRegion = ({ world, region }: FilterRegionProps) => {
  const dataFilter = world.filter((item) => item.region.includes(region))

  return <ContentDisplay dataFilter={dataFilter} />
}

export default Contents

// Issue highlight && change color =>1.6.3
// => https://github.com/styled-components/vscode-styled-components/issues/292
const DisplayImg = styled.img.attrs<{ imgFlag: string }>((props) => ({
  src: props.imgFlag,
}))<{ imgFlag: string }>`
  ${tw`
      h-40
      mx-auto
      p-2
  `}
`
