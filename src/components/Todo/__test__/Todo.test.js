import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Todo from '../Todo'

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  )
}

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
  const buttonElement = screen.getByRole('button', { name: /Add/i })
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } })
    fireEvent.click(buttonElement)
  })
}

describe('Todo', () => {
  it('should render a todo item in the todo list after adding it in the input', () => {
    render(<MockTodo />)
    addTask(['Go grocery shopping'])
    const divElement = screen.getByText(/Go grocery shopping/i)

    expect(divElement).toBeInTheDocument()
  })

  it('should render miltiple todo items', () => {
    render(<MockTodo />)
    addTask(['Go grocery shopping', 'Go to the gym', 'Pet my dog'])
    const divElements = screen.getAllByTestId('task-container')

    expect(divElements.length).toBe(3)
  })

  it('task should not have completed class when initially rendered', () => {
    render(<MockTodo />)
    addTask(['Go grocery shopping'])
    const divElement = screen.getByText(/Go grocery shopping/i)

    expect(divElement).not.toHaveClass('todo-item-active')
  })

  it('task should have completed class when clicked', () => {
    render(<MockTodo />)
    addTask(['Go grocery shopping'])
    const divElement = screen.getByText(/Go grocery shopping/i)
    fireEvent.click(divElement)

    expect(divElement).toHaveClass('todo-item-active')
  })
})
