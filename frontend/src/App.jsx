import React from 'react'
import Navbar from './sections/Navbar'
import * as motion from "motion/react-client"
import Menu from './sections/Menu'
import Hero from './sections/Hero'
import Style from './sections/Style'
import NewArrival from './sections/NewArrival'
import Redifine from './sections/Redifine'
import FAQ from './sections/FAQ'



function App() {
  return (
    <div>
      <Navbar />
      <Menu />
      <Hero />
      <Style />
      <NewArrival />
      <Redifine />
      <FAQ />
    </div>
  )
}

export default App