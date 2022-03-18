import React from 'react'
import './About.css'
import me from '../../assets/wallpaper1.png'
const About = () => { 
  return (
    <section id="About">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="image">
            <img src={me} alt=""/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>
            <article className="about_card">
              <h5>clients</h5>
              <small>3+ clients</small>
            </article>
            <article className="about_card">
              <h5>projects</h5>
              <small>3+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nihil deserunt eum eos ex. Rerum voluptas tenetur culpa totam corrupti, earum facere qui maiores consectetur neque obcaecati natus deserunt eos.
          </p>
          <a href="#Contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About