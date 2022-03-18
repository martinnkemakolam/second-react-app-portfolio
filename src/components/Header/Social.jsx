import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineDribbbleSquare} from 'react-icons/ai'
const social = () => {
  return (
    <div className="header_social">
        <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin/></a>
        <a href="http://github.com" target="_blank" rel="noopener noreferrer"><AiOutlineGithub/></a>
        <a href="http://dribble.com" target="_blank" rel="noopener noreferrer"><AiOutlineDribbbleSquare/></a>
    </div>
  )
}

export default social