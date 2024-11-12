import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <Link to='/'></Link>
      <p>&copy; {new Date().getFullYear()} Your Website Name</p>
    </div>
  )
}

export default Footer
