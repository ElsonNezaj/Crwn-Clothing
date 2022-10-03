import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import './App.css'
// const HomePage = lazy(() => import('./pages/homepage/homepage.component'))

const HatsPage = () => {
  return (
    <div>
      <Link to="/">homepage</Link>
      <h1>HATS PAGE</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  )
}

export default App
