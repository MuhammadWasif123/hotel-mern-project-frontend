import React from 'react'
import Navbar from "../src/components/Navbar"
import {useLocation} from "react-router-dom"
import HomePage from './pages/HomePage'

const App = () => {

  const  isOwnerPath=useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwnerPath && <Navbar/>}
      <HomePage/>
    </div>
  )
}

export default App
