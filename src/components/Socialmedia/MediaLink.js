import React from 'react'
import "./MediaLink.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faGoogle,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";

const MediaLink = () => {
  return (
    <section className='contact'>
        <div className="container-fluid">
        <a
          href="https://linkedin.com/in/vishal-chandrawanshi-a31a56232"
          target="_blank"
          className="linkedin social" rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="fa-bounce" />
        </a>
        <a href="https://github.com/vishal9934/" 
        target="_blank"
        className="github social" rel="noreferrer">

          <FontAwesomeIcon icon={faGithub} className="fa-flip" size="2x" />
        </a>
       
        <a
          href="https://www.instagram.com/itz_mr._vishu/"
          target="_blank"
          className="instagram social" rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" spin />
        </a>
        <a href="mailto:vk99344305@gmail.com" 
        target="_blank"
        className="gmail social" rel="noreferrer">
          <FontAwesomeIcon icon={faGoogle} size="2x" className="fa-beat-fade" />
        </a>
        <br /> <br />
        <br />
        </div>
    </section>
  )
}

export default MediaLink
