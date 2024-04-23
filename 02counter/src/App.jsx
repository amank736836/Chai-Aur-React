import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let counter = 15;

  const addValue = () => {
    // console.log("value added" , Math.random())
    counter = counter + 1;
    // console.log("clicked" , Math.random())
    console.log("clicked" , Math.random())

  }



  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button
        onClick={addValue}
      >Add value</button>
      <br/>
      <br/>
      <button>Subtract value</button>
    </>
  )
}

export default App
