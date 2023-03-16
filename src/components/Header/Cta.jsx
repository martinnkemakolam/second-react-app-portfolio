import React from 'react'
import file from '../../assets/last.pdf'
const Cta = () => {
  return (
    <div className="cta">
        <a href={file} download className="btn">download CV</a>
        <a href="#Contact" className="btn btn-primary">lets talk</a>
    </div>
  )
}

export default Cta