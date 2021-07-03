import React from 'react'
import PropTypes from 'prop-types'

const Dashboard = () => {
  return (
    <div>
      <ul>
        <li>Product 1 | Image 1</li>
        <li>Product 2 | Image 2</li>
        <li>Product 3 | Image 3</li>
        <li>Product 4 | Image 4</li>
        <li>Product 5 | Image 5</li>
        <li>Product 6 | Image 6</li>
        <li>Product 7 | Image 7</li>
        <li>Product 8 | Image 8</li>
        <li>Product 9 | Image 9</li>
        <li>Product 10 | Image 10</li>
      </ul>
    </div>
  )
}

Dashboard.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }))
}

export default Dashboard
