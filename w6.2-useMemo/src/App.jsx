import { useEffect, useMemo, useState } from "react"

function App() {
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState(1)

  let count = useMemo(() => {
    let finalCount = 0;
    for (let i = 0; i <= inputValue; i++) {
      finalCount = finalCount + i;
    }
    return finalCount;
  }, [inputValue])


  return (
    <>
      <input onChange={(e) => {
        setInputValue(e.target.value)
      }} placeholder="find some from 1 to n" />
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button onClick={() => {
        setCounter(counter + 1)
      }}>Counter ({counter})</button>
    </>
  )
}

export default App
