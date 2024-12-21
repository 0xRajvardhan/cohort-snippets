import { useState } from "react"
import { Header } from "./components/Header"

function App() {
  const [title, setTitle] = useState("header 1")

  function updateTitle() {
    setTitle(Math.random())
  }

  return (
    <>
      <Header title={title} />
      <Header title="header 2" />
      <button onClick={updateTitle}>Click to change the title</button>
    </>
  )
}

export default App
