import React from 'react'
import PropTypes from 'prop-types'

const Signup = () => {
  return (
    <div>
      <h3>Signup</h3>
      <form>
        <div>
          <label>Email</label>
          <input type="email" />
        </div>
        <div>
          <label>Contact Number</label>
          <input type="password" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
        <div>
          <label>Retype Password</label>
          <input type="password" />
        </div>
        <button>Signup</button>
      </form>
    </div>
  )
}

Signup.propTypes = {
  signup: PropTypes.func,
}

export default Signup
