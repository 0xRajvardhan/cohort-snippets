import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { AppBar } from './components/AppBar'
const Dashboard = React.lazy(() => import('./components/Dashboard'))
const Landing = React.lazy(() => import('./components/Landing'))

function App() {
  return (
    <>
      <BrowserRouter>
        < AppBar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading dashboard page..."}><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"leading landing page..."}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
