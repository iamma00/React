import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <Link to='/'></Link>
    <header>
        <h1>My Website </h1>
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
    
    </>
  )
}

export default Header
