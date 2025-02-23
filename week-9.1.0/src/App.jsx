import './App.css'
import React from 'react'
import MyComponent from './components/MyComponent'

function App() {

  return (
    <>
      <MyComponent />
      <MyComponent1 />
    </>
  )
}

//class based component
class MyComponent1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.incrementCount = this.incrementCount.bind(this) // binding the method to the class
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.incrementCount}>Click me</button>
      </>
    )
  }
}

export default App
