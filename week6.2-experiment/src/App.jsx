import { useState } from 'react'
import { Todo } from './components/Todo'

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: 'Learn React',
    description: 'Learn how to use React for building web applications'
  }, {
    id: 2,
    title: 'Go to shooting range',
    description: 'Practice shooting with a handgun and a rifle'
  }, {
    id: 3,
    title: 'Go to gym',
    description: 'Lift weights and do some cardio'
  }
  ])

  function addTodo() {
    setTodos([...todos, {
      id: todos.length + 1,
      title: Math.random(),
      description: 'Description of new todo'
    }])
  }

  return (
    <>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </>
  )
}

export default App
