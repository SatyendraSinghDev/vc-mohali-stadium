// Imports
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
// import { act } from 'react-dom/test-utils'

// To Test
import App from '../App'

// Tests
test('Renders main page correctly', async () => {
  // Setup
  render(<App />)
  const linkElement = screen.getByText(/Login/i)
  expect(linkElement).toBeInTheDocument()

  // /* fire events that update state */
  // await act(async () => {
  //   buttonCount.click()
  //   buttonCount.click()
  // })
})
