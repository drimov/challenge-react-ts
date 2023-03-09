import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { regionsList } from '../commons/constants'
import { useTheme } from '../context/themeContext'
import { ChildrenProps, Theme } from '../types/types'

const RegionContainer = styled.div<{ customTheme: Theme }>`
  background-color: ${(props) => props.customTheme.backgroundSd};
  ${tw`
      relative
      flex
      flex-col
      w-72
      rounded-md
  `}
`
const MenuContainer = styled.div`
  ${tw`
    flex
    flex-row
    items-center
    rounded-md
    px-2
    m-2
    md:m-0
  `}
`
const Button = styled.button`
  ${tw`
      text-sm
      my-4
      mx-2
      md:text-xl
  `}
`

type OpenProps = {
  open: boolean
}
const Icon = ({ open }: OpenProps) => (
  <ChevronRightIcon className={`h-5 ${open ? 'arrow-down' : 'arrow-init'}`} />
)

const Regions = styled.div<{ customTheme: Theme }>`
  background-color: ${(props) => props.customTheme.backgroundSd};
  ${tw`
      flex
      my-2
      rounded-md
  `}
`
const Region = styled.li`
  cursor: pointer;
  ${tw`
      m-1
      mx-3
  `}
`
const ListContainer = styled.ul`
  ${tw`
      mt-4
  `}
`
const Label = styled.label`
  ${tw`
		hidden
	`}
`
type ListProps = ChildrenProps & OpenProps

const List = ({ children, open }: ListProps) => {
  const { theme } = useTheme()

  if (open) {
    return (
      <Regions customTheme={theme}>
        <ListContainer>{children}</ListContainer>
      </Regions>
    )
  } else {
    return null
  }
}

const filterList = (region: string) => {
  return regionsList.filter((name) => name !== region)
}

type RegionListProps = {
  region: string
  handleRegion: (value: string, e?: React.MouseEvent<HTMLLIElement>) => void
}
const RegionList = ({ region, handleRegion }: RegionListProps) => {
  const [open, setOpen] = useState(false)
  const { theme } = useTheme()

  const handleOpen = () => {
    setOpen(!open)
  }
  const listRegions = filterList(region)
  return (
    <RegionContainer customTheme={theme}>
      <MenuContainer>
        <Label htmlFor="buttonRegion">Region List</Label>
        <Button
          id="buttonRegion"
          onClick={handleOpen}
        >{`Filter by Region : ${region}`}</Button>
        <Icon open={open} />
      </MenuContainer>
      <List open={open}>
        {listRegions.map((item, index) => (
          <Region key={index} onClick={(e) => handleRegion(item, e)}>
            {item}
          </Region>
        ))}
      </List>
    </RegionContainer>
  )
}

export default RegionList
