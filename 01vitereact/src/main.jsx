import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  { href: 'https://www.google.com',target: '_blank' },
  'Click here to Visit Google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
<>
reactElement
 <App />
 </>
)
