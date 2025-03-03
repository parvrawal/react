import { useState } from 'react'

import './App.css'

function App() {
 
    const [counter, setCounter] = useState(15)
    //here the first value is variable and the second value is function or method
    // let counter = 15
    
    const addValue = () => {
     /*setCounter(counter + 1)
     setCounter(counter + 1)
     setCounter(counter + 1)
     setCounter(counter + 1)
     setCounter(counter + 1)*/

     // this is becouse of betching and it would not work for solving this we can use a callback in setCounter which is method

     // react takes thoes all the batch and act like fireing only one method and so here the batching actually gives you a problem 

     setCounter((prevCounter) => prevCounter +1)
     setCounter((prevCounter) => prevCounter +1)
     setCounter((prevCounter) => prevCounter +1)
     setCounter((prevCounter) => prevCounter +1)

     // now they are not batched becouse you have extract the previous value

    }

    const removeValue = () => {
    // setCounter(counter - 1)

    setCounter((prevCounter) => prevCounter - 1)
    setCounter((prevCounter) => prevCounter - 1)
    setCounter((prevCounter) => prevCounter - 1)
    setCounter((prevCounter) => prevCounter - 1)
    }

  return (
    <>
    <h1>React course for learning {counter}</h1>
    <h2>Counter value: {counter}</h2>
    <button
    onClick={addValue}
    >Add value</button> {" "}
    <button
      onClick={removeValue}
    >Remove value</button>
    <p>footer: {counter} </p>
    </>
  )
}

export default App
