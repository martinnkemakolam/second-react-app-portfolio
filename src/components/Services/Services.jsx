import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return(
    <section id="Services">
      <h5>what i offer</h5>
      <h2>Services</h2>
      <div className="container services_cont">
        <article className="service">
          <div className="services_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Contact me let me build you a Landing page.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Contact me let me build the frontend for your E-commerce site.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Contact me let me build you a blog.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Contact me to optimise your website SEO.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
export default Services