import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import './App.css'
// const HomePage = lazy(() => import('./pages/homepage/homepage.component'))

export const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route exact path="/hats" element={<HatsPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
