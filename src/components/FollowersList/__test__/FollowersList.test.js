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

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: {
        results: [
          {
            name: {
              first: 'Manuelita',
              last: 'Garcia',
            },
            picture: {
              large: 'https://randomuser.me/api/portraits/men/39.jpg',
            },
            login: {
              username: 'TheRabbitOnTheMoon',
            },
          },
        ],
      },
    }),
  },
}))

describe('FollowersList', () => {
  // beforeEach(() => {
  //   console.log('Running before each test')
  // })

  // beforeAll(() => {
  //   console.log('Running once before all test')
  // })

  // afterEach(() => {
  //   console.log('Running after each test')
  // })

  // afterAll(() => {
  //   console.log('Running once after all test')
  // })

  it('should render a follower item', async () => {
    render(<MockFollowersList />)
    const followerDivElement = await screen.findByTestId('follower-item-0')
    screen.debug()
    expect(followerDivElement).toBeInTheDocument()
  })
  // it('should render a follower item', async () => {
  //   render(<MockFollowersList />)
  //   const followerDivElement = await screen.findByTestId('follower-item-0')
  //   screen.debug()
  //   expect(followerDivElement).toBeInTheDocument()
  // })
  // it('should render a follower item', async () => {
  //   render(<MockFollowersList />)
  //   const followerDivElement = await screen.findByTestId('follower-item-0')
  //   screen.debug()
  //   expect(followerDivElement).toBeInTheDocument()
  // })

  // it('should render multiple follower items', async () => {
  //   render(<MockFollowersList />)
  //   const followerDivElements = await screen.findByAllTestId(/follower-item-/i)
  //   expect(followerDivElements.length).toBe(5)
  // })
})
