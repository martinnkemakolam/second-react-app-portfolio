import React from 'react'
import './Portfolio.css'
import image1 from '../../assets/Shortlyview.jpg'
import image2 from '../../assets/TodoList.jpg'
import image3 from '../../assets/RockPaperScisssor.jpg'
import image5 from '../../assets/Joblister.jpg'
import image4 from '../../assets/Country.png'

const data = [
  {
    id: 1,
    image: image1,
    tittle: 'full responsive Landing page for a URL shortenner',
    github: 'https://martinnkemakolam.github.io/Shortly-landing-page/'
  },
  {
    id: 2,
    image: image2,
    tittle: 'full responsive to-do list using react',
    github: 'https://martinnkemakolam.github.io/to-do-list/'
  },
  {
    id: 3,
    image: image3,
    tittle: 'full responsive rock paper scissor game using react',
    github: 'https://martinnkemakolam.github.io/RockPaperScissor-react/'
  },
  {
    id: 4,
    image: image4,
    tittle: 'full responsive Country finder using react',
    github: 'https://martinnkemakolam.github.io/rest-country-api/'
  },
  {
    id: 5,
    image: image5,
    tittle: 'full responsive Job lister with react',
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
                  <a href={github} className="btn">Live</a>
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