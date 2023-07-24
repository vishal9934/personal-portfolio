import React from 'react'
import Button from 'react-bootstrap/Button';
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
          className="linkedin social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="fa-bounce" />
        </a>
        <a href="https://github.com/vishal9934/" className="github social">
          <FontAwesomeIcon icon={faGithub} className="fa-flip" size="2x" />
        </a>
       
        <a
          href="https://www.instagram.com/itz_mr._vishu/"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" spin />
        </a>
        <a href="mailto:vk99344305@gmail.com" className="gmail social">
          <FontAwesomeIcon icon={faGoogle} size="2x" className="fa-beat-fade" />
        </a>
        <br /> <br />
        <br />
        <Button 
        href='https://drive.google.com/file/d/1-hplmkWFHjQsFeRNj8yPA77MDG1vvRBY/view?usp=sharing'
        target="_blank"
        style={{ color: 'white' ,fontFamily:"large"}} variant="custom" size='lg'>See My Resume</Button>
        </div>
    </section>
  )
}

export default MediaLink
