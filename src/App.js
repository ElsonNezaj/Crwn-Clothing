import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shoppage/shop.component'
import Header from './components/header/header.component'
import Account from './pages/sign-in-and-sign-out/account.component'

import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={Account} />
      </Switch>
    </div>
  )
}

export default App
