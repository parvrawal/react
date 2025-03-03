import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  

  return (
    <>

    <h1 className='text-3xl bg-green-500 p-3 rounded-b-md'>Vite with Tailwind</h1>
    <Card username="luffy" />
    <Card />
    <Card />
      </>
  )
}

export default App
