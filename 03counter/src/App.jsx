import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    // counter = counter + 1
    if(counter === 25){
      alert("Value can not be greater than 25")
    }
    else{
    setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if(counter === 0){
      alert("Value can not be below 0")
    }
    else{
    setCounter(counter - 1)
    } 
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br /><br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
