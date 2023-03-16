import React from 'react'
import './Header.css'
import Cta from './Cta'
import Social from './Social'
import me from '../../assets/wallpaper1.jpg'
const Header = () => {
  return (
    <header id="Home" >
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Martin Nkemakolam</h1>
        <h5 className="text-light"> an aspiring fullstack developer</h5>
        <Cta />
        <Social />
        <div className="me">
          <img src={me} alt="" />
        </div>
        <a href="#Contact" className="scroll_down">scroll down</a>
      </div>
    </header>
  )
}

export default Header