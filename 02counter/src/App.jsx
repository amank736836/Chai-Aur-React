import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(15)

  // let counter = 15;

  const addValue = () => {
    // console.log("value added" , Math.random())
    // counter = counter + 1;
    if(counter < 20){
      setCounter(++counter);
      // setCounter(prevCounter => prevCounter + 1);
    }
    // console.log("clicked" , Math.random())
    // console.log("clicked" , counter)

  }

  const subtractValue = () => {
    if(counter > 0){
      // counter = counter - 1;
      setCounter(counter - 1); 
    }
  }



  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter} </h2>
      <button onClick={addValue}>Add value {counter} </button>
      <br/>
      <br/>
      <button onClick={subtractValue}>Subtract value {counter} </button>
      <p>footer : {counter} </p>
    </>
  )
}

export default App
