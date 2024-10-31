import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:'mahmood',
    age: 21
  }

  let myArr = [1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4
      rounded-xl mb-4'>Tailwind Test</h1>
      <Cards username ="chaiaurcode" btnText='Click me' />
      <Cards username ="react aur me" />
    </>
  )
}

export default App
