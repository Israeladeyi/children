import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Roadmap from './components/Roadmap'
function App() {

  return (
    <main className='overflow-hidden'>
     <Header /> 
     <Hero />
     <About />
     <Roadmap/>
      <Footer />
    </main>
  )
}

export default App
