import React from 'react'
import { render } from 'react-dom'

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
    </div>
  )
}

render(
  <Home />,
  document.getElementById("root")
)
