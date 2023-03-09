import fetchMockJest from 'fetch-mock-jest'

jest.mock('node-fetch', () => require('fetch-mock-jest'))
export const fetchMock: typeof fetchMockJest = require('node-fetch')
