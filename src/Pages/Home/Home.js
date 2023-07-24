import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
 import picture from "../../Assets/picture.png";
 import Background from "../../components/Background";
import Type from "./Type";
import MediaLink from "../../components/Socialmedia/MediaLink"
import Home2 from "./Home2"
import Footer from "../../components/Footer";
import Button from 'react-bootstrap/Button';
import "./Home.css"
function Home() {
  return (
    <section>
        
      <Container fluid className="home-section" id="home">
      <Background />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> VISHAL KUMAR</strong>
              </h1>
                   
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type/>
                
              </div>
              
            </Col>
            
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={picture}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
              
            </Col>
            
          </Row>
          
        </Container>
        
        
      </Container>
      <MediaLink/>
      <Button 
        variant="custom" 
        href='https://drive.google.com/file/d/1-hplmkWFHjQsFeRNj8yPA77MDG1vvRBY/view?usp=sharing'
        target="_blank"
        style={{ color: 'white' ,fontFamily:"large"}} size='lg'>See My Resume</Button>
      <Home2/>
      <Footer/>
    </section>
    
  );
}

export default Home;