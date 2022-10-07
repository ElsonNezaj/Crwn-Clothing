import React from 'react'
import './account.styles.scss'
import SignIn from '../../components/sign-in/signin.component'
import SignUp from '../../components/sign-up/sign-up.component'

const Account = () => (
  <div className="sign-in-and-sign-up">
    <SignIn></SignIn>
    <SignUp></SignUp>
  </div>
)

export default Account
