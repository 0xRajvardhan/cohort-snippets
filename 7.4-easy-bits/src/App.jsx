import { RecoilRoot } from 'recoil'
import './App.css'
import { NavBar } from './components/navbar'

function App() {
  return (
    <>
      <RecoilRoot>
        <NavBar />
      </RecoilRoot>
    </>
  )
}

export default App
