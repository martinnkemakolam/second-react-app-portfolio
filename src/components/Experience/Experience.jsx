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
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className='exp_detail'>
            <BsPatchCheckFill className="icon"/>
            <div>
            <h4>CSS</h4>
              <small className='text-light'>average</small>
            </div>
            </article>
            <article className='exp_detail'>
            <BsPatchCheckFill className="icon"/>
            <div>
            <h4>Java Script</h4>
              <small className='text-light'>average</small>
            </div>
            </article>
            <article className='exp_detail'>
            <BsPatchCheckFill className="icon"/>
            <div>
            <h4>React</h4>
              <small className='text-light'>Beginner</small>
            </div>
            </article>
            <article className='exp_detail'>
            <BsPatchCheckFill className="icon"/>
            <div>
            <h4>UI/UX Design</h4>
              <small className='text-light'>Beginner</small>
            </div>
            </article>
          </div>
        </div>
        <div className="exp_backend">
          <h3>Backend Development</h3>
            <div className="exp_content">
              <article className='exp_detail'>
                <BsPatchCheckFill className="icon"/>
                <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermidiate</small>
                </div>
              </article>
              <article className='exp_detail'>
              <BsPatchCheckFill className="icon"/>
              <div>
              <h4>Mysql</h4>
                <small className='text-light'>average</small>
              </div>
              </article>
              <article className='exp_detail'>
              <BsPatchCheckFill className="icon"/>
              <div>
              <h4>PHP</h4>
                <small className='text-light'>average</small>
              </div>
              </article>
              <article className='exp_detail'>
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>Node js</h4>
                <small className='text-light'>Beginner</small>
                </div>
              </article>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Experience