import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home2.css"
import img from "../../Assets/vk2.png"

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="pink"> INTRODUCE </span> MYSELF 🤷‍♂️
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="pink"> Java, Javascript and React.js. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="pink">Web Technologies and Products. </b> 
               
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="pink">Javascript</b> and
              <i>
                <b className="pink">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="pink"> React.js.</b>
              </i>
              <br />
              <br />
              <i>
              I am Vishal <b className="pink"> Chandrawanshi</b> from <b className="pink">Dhanbad</b>, India.  <br />
I have done my Graduation <b className="pink">(B.sc) </b>from Pk roy memorial college Dhanbad <b className="pink">Jharkhand in 2021</b> <br />
Additionally, I am Trainee in <b className="pink">Acciojob</b> Working on Technical skill as well as communication skill,<br />
Learn Full Stack <b className="pink">Web Development</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
          
              <img src={img} className="Myimg" alt="{img}" />
            
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="pink">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vishal9934/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/vishal-chandrawanshi-a31a56232"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/itz_mr._vishu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;