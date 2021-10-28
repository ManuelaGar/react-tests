import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import FollowersList from '../FollowersList'

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  )
}

describe('FollowersList', () => {
  it('should render a follower item', async () => {
    render(<MockFollowersList />)
    const followerDivElement = await screen.findByTestId('follower-item-0')
    expect(followerDivElement).toBeInTheDocument()
  })

  it('should render multiple follower items', async () => {
    render(<MockFollowersList />)
    const followerDivElements = await screen.findByAllTestId(/follower-item-/i)
    expect(followerDivElements.length).toBe(5)
  })
})
