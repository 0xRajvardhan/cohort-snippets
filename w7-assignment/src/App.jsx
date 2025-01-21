import { RecoilRoot } from 'recoil'
import './App.css'
import BackgroundChanger from './components/BackgroundChanger'
import Profile from './components/Profile'

function App() {

  return (
    <>
      <Profile />
      <RecoilRoot>
        <BackgroundChanger />
      </RecoilRoot>
    </>
  )
}

export default App
