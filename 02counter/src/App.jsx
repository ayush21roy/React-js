import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // hook - useState makes changes in UI
  let [counter, setCounter] = useState(0);   //returns array of these 2 ->  // counter is value, setCounter is function and 15 is initial value
  // let counter = 5;

  const addValue = () => {
    console.log(`clicked ${counter}`);
    if (counter !== 20)
      setCounter(counter + 1);
      // setCounter((prevCounter) => prevCounter + 1);  // arrow - functions
      // setCounter((prevCounter) => prevCounter + 1);  // arrow - functions
      // setCounter((prevCounter) => prevCounter + 1);  // arrow - functions
  }

  const removeValue = () => {
    if (counter !== 0)
      setCounter(counter - 1);
  }
  return (
    <>
      <h1>02 react counter app</h1>
      <h2>Counter : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>

      <p>COUNTER VALUE is : {counter}</p>
    </>
  )
}

export default App
