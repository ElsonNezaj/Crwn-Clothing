import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shoppage/shop.component'
import Header from './components/header/header.component'
import Account from './pages/sign-in-and-sign-out/account.component'
import {
  auth,
  signInWithGoogle,
  createUserProfileDocument,
} from './firebase/firebase.utils'
import { onAuthStateChanged } from 'firebase/auth'

import './App.css'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      createUserProfileDocument(user)
      this.setState({ currentUser: user })

      // createUserProfileDocument(user.displayName, user.email, user.uid)
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={Account} />
        </Switch>
      </div>
    )
  }
}

export default App
