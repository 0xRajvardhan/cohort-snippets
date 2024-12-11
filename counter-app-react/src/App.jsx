import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)


  return (
    <div>
      <ButtonCounter count={count} setCount={setCount}></ButtonCounter>
      <ButtonCounter count={count+1} setCount={setCount}></ButtonCounter>
      <ButtonCounter count={count-1} setCount={setCount}></ButtonCounter>
      <ButtonCounter count={count*100} setCount={setCount}></ButtonCounter>
    </div>
  )
}

function ButtonCounter(props) {
  function onClickHandler() {
    props.setCount(props.count + 1)
  }
  return (
    <button onClick={onClickHandler}>Counter {props.count}</button>
  )
}

export default App
