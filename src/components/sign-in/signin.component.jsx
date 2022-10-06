import React from 'react'
import './signin.styles.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.setState({ email: '', password: '' })
  }

  handleChange = (e) => {
    const { value, name } = e.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in" onSubmit={this.handleSubmit}>
        <h2>I already have am accoint</h2>
        <span>Sign in with your e-mail and password</span>

        <form>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          ></input>
          <label>Email</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          ></input>
          <label>Password</label>

          <input type="submit" value="Submit Form"></input>
        </form>
      </div>
    )
  }
}
export default SignIn
