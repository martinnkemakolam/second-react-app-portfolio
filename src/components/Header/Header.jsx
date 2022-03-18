import React from 'react'
import './Header.css'
import Cta from './Cta'
import Social from './Social'
import wallpaper from './wallpaper.jpg'
const Header = () => {
  return (
    <header id="Home" >
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Martin Nkemakolam</h1>
        <h5 className="text-light"> an aspiring fullstack developer</h5>
        <Cta/>
        <Social/>
        <div className="me">
          <img src={wallpaper} alt="" />
        </div>
        <a href="#contact" className="scroll_down">scroll down</a>
      </div>
    </header>
  )
}

export default Header