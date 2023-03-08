import { MoonIcon } from '@heroicons/react/24/solid'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { darkTheme, lightTheme } from '../commons/constants'
import { useTheme } from '../context/themeContext'
import { ChildrenProps, Theme } from '../types/types'

const DarkModContainer = styled.div`
  ${tw`
        w-64
        text-center
    `}
`
const Label = styled.label`
  ${tw`
        hidden
    `}
`
const TextContainer = styled.p`
  ${tw`
        text-base
				md:text-2xl
    `}
`

type ButtonProps = ChildrenProps & {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button id="themeChange" onClick={onClick}>
      {children}
    </button>
  )
}
const Icon = () => {
  return <MoonIcon className={`h-16`} />
}

type TextProps = {
  theme: Theme
}

const Text = ({ theme }: TextProps) => {
  return (
    <TextContainer>
      {theme === lightTheme ? 'Light Mode' : 'Dark Mode'}
    </TextContainer>
  )
}

const DarMod = () => {
  const { theme, setTheme } = useTheme()

  const handleTheme = () => {
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme)
  }

  return (
    <DarkModContainer>
      <Label htmlFor="themeChange">Theme</Label>
      <Button onClick={handleTheme}>
        <Icon />
      </Button>
      <Text theme={theme} />
    </DarkModContainer>
  )
}

export default DarMod
