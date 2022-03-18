import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App