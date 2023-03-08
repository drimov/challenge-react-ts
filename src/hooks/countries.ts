import { useEffect } from 'react'
import { useApiCountries } from '../hooks/apiCountries'

const useCountries = () => {
  const { data, status, error, execute } = useApiCountries()

  useEffect(() => {
    if (!data) {
      execute()
    }
  }, [data, execute])
  return { data, error, status }
}

export { useCountries }
