import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5,faCss3Alt,faJs,faBootstrap,faReact,faJava,faNode } from '@fortawesome/free-brands-svg-icons'

import {
    SiRedux,
    SiMongodb
    
  } from "react-icons/si";
  
  import {
    DiSqllite,
  } from "react-icons/di";
  


const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <FontAwesomeIcon icon={faHtml5} beat style={{color: "#e54c21",}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FontAwesomeIcon icon={faCss3Alt} bounce style={{color: "#016bc1",}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FontAwesomeIcon icon={faJs} beat style={{color: "#e6df19",}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FontAwesomeIcon icon={faBootstrap} beatFade style={{color: "#7e0af9",}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FontAwesomeIcon icon={faReact} shake style={{color: "#00d8ff",}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FontAwesomeIcon icon={faJava} fade />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiSqllite/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FontAwesomeIcon icon={ faNode} fade style={{color: "#102242",}} />
      </Col>
    </Row>
  );
}

export default Techstack;