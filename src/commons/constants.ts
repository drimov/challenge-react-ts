const API: string = process.env.REACT_API_KEY as string
export const baseUrl: string = `${API}all?fields=capital,region,currencies,flags,population,name`
