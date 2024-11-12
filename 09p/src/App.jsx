import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Cards from './components/Cards'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<div><Header />
      <Footer />
      <Cards /></div>} />
      </Routes>
    </>
  )
}

export default App
