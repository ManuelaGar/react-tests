import { render, screen } from '@testing-library/react'
import Header from '../Header'

// GET BY

describe('Header', () => {
  it('should render same text passed into title prop', () => {
    render(<Header title="My header" />)
    const headingElement = screen.getByText(/my header/i)
    expect(headingElement).toBeInTheDocument()
  })
})

// it('should render a heading object in header', () => {
//   render(<Header title="My header" />)
//   const headingElement = screen.getByRole('heading', { name: 'My header' })
//   expect(headingElement).toBeInTheDocument()
// })

// it('should render a heading object in header with specific title', () => {
//   render(<Header title="My header" />)
//   const headingElement = screen.getByTitle('Header')
//   expect(headingElement).toBeInTheDocument()
// })

// it('should render a heading object in header with specific attribute for test id', () => {
//   render(<Header title="My header" />)
//   const headingElement = screen.getByTestId('header-1')
//   expect(headingElement).toBeInTheDocument()
// })

// // Find By - for async

// it('should render same text passed into title prop with find by', async () => {
//   render(<Header title="My header" />)
//   const headingElement = await screen.findByText(/my header/i)
//   expect(headingElement).toBeInTheDocument()
// })

// // Query By

// it('should render same text passed into title prop with query by', () => {
//   render(<Header title="My header" />)
//   const headingElement = screen.queryByText(/dogs/i)
//   expect(headingElement).not.toBeInTheDocument()
// })

// // Get All By

// it('should render a header with two heading elements', () => {
//   render(<Header title="My header" />)
//   const headingElements = screen.getAllByRole('heading')
//   expect(headingElements.length).toBe(2)
// })
