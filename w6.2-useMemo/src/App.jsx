import { memo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function logSomething() {
    console.log("child clicked");
  }
  return (
    <>
      <ButtonComponent inputFunction={logSomething} />
      <button
        onClick={() => { setCount + 1 }}
      >Click me {count}</button>
    </>
  )
}

const ButtonComponent = memo(({ inputFunction }) => {
  console.log("child render");
  return (
    <>
      <button onClick={inputFunction}>Button clicked</button>
    </>
  )
})

export default App;