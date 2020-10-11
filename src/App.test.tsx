import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  const { getByText } = render(<App />)

  const linkElementMulti = getByText(/かけ算/i)
  expect(linkElementMulti).toBeInTheDocument()

  const linkElementSub = getByText(/ひきざん/i)
  expect(linkElementSub).toBeInTheDocument()
})
