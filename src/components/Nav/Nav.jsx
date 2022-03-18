import React from 'react'
import './Nav.css'
import { useState } from 'react'
const Nav = () => {
  const[activeNav, setActive] = useState('#')
  return (
    <nav>
      <a href="#Home" onClick={()=> setActive('#Home')} className={activeNav === '#Home' ? 'active':""}>home</a>
      <a href="#About" onClick={()=> setActive('#About')} className={activeNav === '#About' ? 'active' : ''}>about</a>
      <a href="#Portfolio" onClick={()=> setActive('#port')} className={activeNav === '#port' ? 'active' : ''}>portfolio</a>
      <a href="#Services" onClick={()=> setActive('#serv')} className={activeNav === '#serv' ? 'active' : ''}>Services</a>
      <a href="#Contact" onClick={()=> setActive('#cont')} className={activeNav === '#cont' ? 'active' : ''}>contacts</a>
    </nav>
  )
}
export default Nav