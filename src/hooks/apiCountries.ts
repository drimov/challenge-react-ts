import React from 'react'
import { Countries } from '../types/types'
import { baseUrl } from './../commons/constants'

type StateProps =
  | { status: 'idle'; data: null; error: null }
  | { status: 'fetching'; data: null; error: null }
  | { status: 'done'; data: Countries; error: null }
  | { status: 'fail'; data: null; error: string }

type ActionType =
  | { type: 'fetching' }
  | { type: 'done'; payload: Countries }
  | { type: 'fail'; error: string }

const reducerCountries = (
  state: StateProps,
  action: ActionType,
): StateProps => {
  switch (action.type) {
    case 'fetching':
      return { status: 'fetching', data: null, error: null }
    case 'done':
      return { status: 'done', data: action.payload, error: null }
    case 'fail':
      return { status: 'fail', data: null, error: action.error }
    default:
      throw new Error("L'action sur le reducerCountries n'est pas supportée.")
  }
}
const initialState: StateProps = {
  data: null,
  error: null,
  status: 'idle',
}

const useApiCountries = () => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<StateProps, ActionType>
  >(reducerCountries, initialState)

  const { data, error, status } = state

  const execute = React.useCallback((): void => {
    dispatch({ type: 'fetching' })

    fetch(baseUrl, { cache: 'force-cache' })
      .then((response) => response.json() as Promise<Countries>)
      .then((countries) => dispatch({ type: 'done', payload: countries }))
      .catch((err) => dispatch({ type: 'fail', error: err }))
  }, [])

  return { data, error, status, execute }
}

export { useApiCountries }
