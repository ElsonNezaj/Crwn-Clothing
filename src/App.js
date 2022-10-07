import React from 'react'
import { Route, Switch, Redirect } from 'react-router'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'

import CheckoutPage from './pages/checkout/checkout.component'

import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            // render={() =>
            //   // currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
            // }
          />
        </Switch>
      </div>
    )
  }
}

export default App
