export type Theme = {
  backgroundP: string
  backgroundSd: string
  foreground: string
  iconColor: string
}

export type ChildrenProps = {
  children: React.ReactNode
}
export type ThemeString = 'light' | 'dark'

type Name = {
  official: string
  common: string
}

export type Country = {
  flags: {
    png: string
    svg: string
    alt: string
  }
  name: Name & {
    nativeName: {
      [key: string]: Name
    }
  }
  currencies: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
  capital: string[]
  altSpellings: string[]
  region: string
  population: number
}

export type Countries = Country[]
