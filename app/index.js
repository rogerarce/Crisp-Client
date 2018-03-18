import React from 'react'
import { render } from 'react-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'

let Home = () => {
  return (
    <div>
      <ul>
        <li>Login</li>
        <li>Signup</li>
        <li>Dashboard</li>
        <li>User Profile</li>
        <li>Product Details</li>
        <li>Store Detail</li>
        <li>Basket Details</li>
        <li>Payment Process</li>
      </ul>
      <Login />
      <Signup />
      <Dashboard />
    </div>
  )
}

render(
  <Home />,
  document.getElementById("root")
)
