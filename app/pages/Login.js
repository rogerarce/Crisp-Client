import React from 'react'
import PropTypes from 'prop-types'

const Login = () => {
  return (
    <div>
      <h3>Login</h3>
      <form>
        <div>
          <label>Email</label>
          <input type="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  )
}

Login.propTypes = {
  login: PropTypes.func,
}

export default Login
