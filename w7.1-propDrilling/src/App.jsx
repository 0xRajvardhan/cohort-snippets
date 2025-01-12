import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Prop drilling
      <Count count={count} />
      <Button count={count} setCount={setCount} />
    </>
  )
}
/* eslint-disable */
function Count({ count }) {
  return (
    <div style={{ fontSize: '2rem', color: '#ff6347', margin: '20px' }}>
      {count}
    </div>
  )
}

function Button({ count, setCount }) {
  return (
    <>
      <button
        style={{
          backgroundColor: '#4caf50',
          color: 'white',
          padding: '15px 32px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          margin: '4px 2px',
          cursor: 'pointer',
          border: 'none',
          borderRadius: '4px'
        }}
        onClick={() => { setCount(count + 1) }}
      >
        Increase
      </button>
      <button
        style={{
          backgroundColor: '#4caf50',
          color: 'white',
          padding: '15px 32px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          margin: '4px 2px',
          cursor: 'pointer',
          border: 'none',
          borderRadius: '4px'
        }}
        onClick={() => { setCount(count - 1) }}
      >
        Decrease
      </button>
    </>
  )
}

export default App
