import { Theme } from '../types/types'

const API: string = process.env.REACT_API_KEY as string
export const baseUrl: string = `${API}all?fields=capital,region,currencies,flags,population,name`

export const darkTheme: Theme = {
  backgroundP: '#2B3844',
  backgroundSd: '#344155',
  foreground: '#FFFFFF',
  iconColor: 'fill-white',
}
export const lightTheme: Theme = {
  backgroundP: '#F2F2F2',
  backgroundSd: '#FFFFFF',
  foreground: '#000000',
  iconColor: 'fill-black-500',
}

export const regionsList: string[] = [
  'All',
  'Africa',
  'Americas',
  'Asia',
  'Europe',
  'Oceania',
]
