import React from 'react'
import './Portfolio.css'
import image1 from '../../assets/portfolio1.jpeg'
import image2 from '../../assets/portfolio2.jpeg'
import image3 from '../../assets/portfolio3.jpeg'
import image4 from '../../assets/portfolio4.jpeg'
import image5 from '../../assets/portfolio5.jpeg'
import image6 from '../../assets/portfolio6.jpeg'

const data = [
  {
    id: 1,
    image: image1,
    tittle: 'responsive website design of my portfolio using react',
    github: 'https://github.com/orgs/nkemakolammartin/repositories'
  },
  {
    id: 2,
    image: image2,
    tittle: 'task tracker using react',
    github: 'https://github.com/orgs/nkemakolammartin/repositories'
  },
  {
    id: 3,
    image: image3,
    tittle: 'rock paper scissor game using plain javascript',
    github: 'https://github.com/orgs/nkemakolammartin/repositories'
  },
  {
    id: 4,
    image: image4,
    tittle: 'text to speech web app',
    github: 'https://github.com/orgs/nkemakolammartin/repositories'
  },
  {
    id: 5,
    image: image5,
    tittle: 'currency converter without API',
    github: 'https://github.com/orgs/nkemakolammartin/repositories'
  },
  {
    id: 6,
    image: image6,
    tittle: 'full responsive webapp chat bot',
    github: 'https://github.com/orgs/nkemakolammartin/repositories'
  },

]
const portfolio = () => {
  return (
    <section id="Portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="portfolio_container">
        {
          data.map(({id, image, tittle, github})=>{
            return(
              <article key={id} className="portfolio_item">
                <div className="portfolio_image"><img src={image} alt={tittle} /></div>
                <h3>{tittle}</h3>
                <div className="cta">
                  <a href={github} className="btn">Github</a>
                </div>
              </article>
            )
          })
        }

     
      </div>
    </section>
  )
}

export default portfolio