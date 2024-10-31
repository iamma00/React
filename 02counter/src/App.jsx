import { useState } from 'react';
import './App.css'

function App() {

let [counter, setCounter] = useState(15)

const addValue = () => {
  setCounter(counter + 1)
  console.log("Value added" ,counter);
}

const removeValue = () => {
  setCounter(counter - 1)
  console.log("Value removed" ,counter);
}

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter value: {counter}</h2>

     <button
      onClick={addValue}
     >Add Value </button>
     <br />
     <button
      onClick={removeValue}
     >Remove Value</button>
    </>
  )
}

export default App
