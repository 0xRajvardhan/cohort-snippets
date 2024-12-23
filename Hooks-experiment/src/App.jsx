import { useState } from 'react'
import Todo from './components/Todo'

function App() {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <>
      <button onClick={() => {
        setSelectedId(1)
      }}>1</button>

      <button onClick={() => {
        setSelectedId(2)
      }}>2</button>

      <button onClick={() => {
        setSelectedId(3)
      }}>3</button>

      <button onClick={() => {
        setSelectedId(4)
      }}>4</button>

      <Todo id={selectedId} />
    </>
  )
}

export default App
