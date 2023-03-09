import { Countries } from '../types/types'

export const mockCountries: Countries = [
  {
    flags: {
      png: 'https://flagcdn.com/w320/tn.png',
      svg: 'https://flagcdn.com/tn.svg',
      alt: 'The flag of Tunisia has a red field. A white circle bearing a five-pointed red star within a fly-side facing red crescent is situated at the center of the field.',
    },
    name: {
      common: 'Tunisia',
      official: 'Tunisian Republic',
      nativeName: { ara: { official: 'الجمهورية التونسية', common: 'تونس' } },
    },
    currencies: { TND: { name: 'Tunisian dinar', symbol: 'د.ت' } },
    capital: ['Tunis'],
    altSpellings: ['TN', 'Republic of Tunisia', 'al-Jumhūriyyah at-Tūnisiyyah'],
    region: 'Africa',
    population: 11818618,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/es.png',
      svg: 'https://flagcdn.com/es.svg',
      alt: 'The flag of Spain is composed of three horizontal bands of red, yellow and red, with the yellow band twice the height of the red bands. In the yellow band is the national coat of arms offset slightly towards the hoist side of center.',
    },
    name: {
      common: 'Spain',
      official: 'Kingdom of Spain',
      nativeName: { spa: { official: 'Reino de España', common: 'España' } },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Madrid'],
    altSpellings: ['ES', 'Kingdom of Spain', 'Reino de España'],
    region: 'Europe',
    population: 47351567,
  },
]
