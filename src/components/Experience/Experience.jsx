import React from 'react'
import './Experience.css'
import { BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='Exprience'>
        <h5>what skills i have</h5>
        <h2>my Experience</h2>
      <div className="section">
        <div className="exp_frontend">
          <h3>frontend Development</h3>
          <div className="exp_content">
            <article className='exp_detail'>
              <BsPatchCheckFill className="icon"/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Advance</small>
              </div>
            </article>
            <article className='exp_detail'>
            <BsPatchCheckFill className="icon"/>
            <div>
            <h4>CSS</h4>
              <small className='text-light'>Advance</small>
            </div>
            </article>
            <article className='exp_detail'>
            <BsPatchCheckFill className="icon"/>
            <div>
            <h4>Java Script</h4>
              <small className='text-light'>Intermidiate</small>
            </div>
            </article>
            <article className='exp_detail'>
            <BsPatchCheckFill className="icon"/>
            <div>
            <h4>React</h4>
              <small className='text-light'>Intermidiate</small>
            </div>
            </article>
            <article className='exp_detail'>
            <BsPatchCheckFill className="icon"/>
            <div>
            <h4>SCSS</h4>
              <small className='text-light'>Intermidiate</small>
            </div>
            </article>
            <article className='exp_detail'>
            <BsPatchCheckFill className="icon"/>
            <div>
            <h4>Git</h4>
              <small className='text-light'>average</small>
            </div>
            </article>
            <article className='exp_detail'>
            <BsPatchCheckFill className="icon"/>
            <div>
            <h4>Git-pages</h4>
              <small className='text-light'>average</small>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience