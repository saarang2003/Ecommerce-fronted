import React from 'react'
import Navbar from './sections/Navbar'
import * as motion from "motion/react-client"
import Menu from './sections/Menu'
import Hero from './sections/Hero'



function App() {
  return (
    <div>
      <Navbar />
      <Menu />
      <Hero />
    </div>
  )
}

export default App