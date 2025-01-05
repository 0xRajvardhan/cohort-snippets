import { memo, useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const logSomething = useCallback(() => {
    console.log("child clicked");
  }, []);

  return (
    <>
      <ButtonComponent inputFunction={logSomething} />
      <button
        onClick={() => { setCount(count + 1) }}
      >Click me {count}</button>
    </>
  )
}
/* eslint-disable */
const ButtonComponent = memo(({ inputFunction }) => {
  console.log("child render");
  return (
    <>
      <button>Button clicked</button>
    </>
  )
})

export default App;