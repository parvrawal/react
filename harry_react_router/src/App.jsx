import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter } from "react-router-dom";
import Home from './components/Home'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {}
  ])
  

  return (
    <>
    <Navbar/>
      
       
    </>
  )
}

export default App
