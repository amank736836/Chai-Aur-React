import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log("App component rendered" + Math.random())
  // const [value, setValue] = useState(1)
  const [value, setValue] = useState({
    value: 1,
  })
  // const [multipliedValue, setMultipliedValue] = useState(1)
  // let multipliedValue = value * 5


  // const multiplyByfive = () => {
  //   // setMultipliedValue(value * 5)
  //   setValue(value + 1)
  // }

  // useEffect(() => {
  //   multipliedValue()
  // }),[value]

  const clickMe = () => {
    console.log('logged')
    // setValue(value * 5)
    // setValue(1)
    // setValue(3)
    setValue({
      value: 1
    });
  }

  return (
    <>
      <h1> Main Value : {value.value}</h1>
      <button
        onClick={clickMe}
      >Click to multiply by 5</button>
      {/* <h1> Multiplied Value : {multipliedValue} </h1> */}
    </>
  )
}

export default App
