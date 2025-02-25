import React from 'react'
import Navbar from './sections/Navbar'
import * as motion from "motion/react-client"
import Menu from './sections/Menu'
import Hero from './sections/Hero'
import Style from './sections/Style'



function App() {
  return (
    <div>
      <Navbar />
      <Menu />
      <Hero />
      <Style />
    </div>
  )
}

export default App