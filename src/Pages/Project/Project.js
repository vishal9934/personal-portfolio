import React from "react";
import "./Project.css";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Background from "../../components/Background";
import car from "../../Assets/car.png";
import cred from "../../Assets/cred.png";
import imdb from "../../Assets/imdb.png";
import library from "../../Assets/library.png";
 import project from "../../Assets/project.png";
import tictac from "../../Assets/tictac.png";
import typing from "../../Assets/typing.png";
import Footer from "../../components/Footer";
import Button from 'react-bootstrap/Button';


const Projects = () => {
  return (
    <section>
    <Container fluid className="project-section">
      <Background />
      <Container>
      <Row >
            <Col md={6} className="project-head">
               <img src={project} alt="project" className="img-fluid"/>
            </Col>
            <Col md={6} className="project-head">
             <h1 style={{textAlign:"center",fontSize:"80px",color:"rgb(207, 204, 11) "}}>Projects</h1>
             <h4 style={{color:"white"}}>I Don't believe on only Acquire Knowledge I Believe on Practically Implement that Knowledge.
             My projects makes use of vast variety of latest technology tools. My best experience is to create Web Develop projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.  </h4>
            </Col>
        </Row>

        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white",paddingTop:"1rem" ,textAlign:"center"}}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" ,marginTop:"3rem"}}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={typing}
              isBlog={false}
              title="Typing Speed Trainer"
              description="This Website is Done  Using  REACT.JS, MUI, FIREBASE, STYLED COMPONENT.Implemented a multimode typing test website with the ability to save results for
              better analysis.Used firebase to implement login/signup auth and also used a database to save
              results.Used various react hooks and Context Api to implement major functionalities like
              theme and test modes."
              ghLink="https://github.com/vishal9934/speed-typing"
              demoLink="https://typing-speed-weld.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imdb}
              isBlog={false}
              title="Movie Website"
              description="This Website is Done Using REACT.JS, REACT-ROUTER, REACT LOADING SKELETON.It is a platform that allows You to see about IMDB rating,Popular movies,Most rated
              movie and other information about movie. Also use react responsive carousel and font awesome.The data is fetching from the API’s and giving the outputs on UI."
              ghLink="https://github.com/vishal9934/IMDB-clone-react"
              demoLink="https://imdb-clone-react.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Car Game"
              description=" This Project is Done Using HTML,CSS,JAVASCRIPT. User can Play the Game and when user hit the car to the enemy car or hit to the side boundary the game will be over ,message will shown on Ui ,You can also restart the game. third party and promote direct dialogue between hotel vendors and buyers."
              demoLink="https://vishal9934.github.io/Car-Game/"
              ghLink="https://github.com/vishal9934/Car-Game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={library}
              isBlog={false}
              title="Library Management System"
              description=" This Project is Done using HTML, CSS, JAVASCRIPT. ibrary management is a project that manages and stores books information electronically according to students needs. The system helps both students and library manager to keep a constant track of all the books available in the library. It allows both the admin and the student to search for the desired book. It becomes necessary for colleges to keep a continuous check on the books issued and returned and even calculate fine."
              ghLink="https://github.com/vishal9934/frontend2-contest"
              demoLink="https://vishal9934.github.io/frontend2-contest/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cred}
              isBlog={false}
              title="Cred Website"
              description="This Website is created  using  HTML, Css, and JavaScript. It is a platform that allows credit card users to manage multiple cards along with an
              analysis of their credit score.
              In this project i used different animation and transition effect.
             Sliding and Scrolling effect functionality are used using javascript and css.."
              ghLink="https://github.com/vishal9934/CRED_Clone"
              demoLink="https://vishal9934.github.io/CRED_Clone/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictac}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="This Game is a simple game which is created using REACT.JS,REACT HOOKS. Tic-Tac-Toe is played on a 3×3 grid. The player who has the first move is X . The player who plays second is O . The first player to occupy three spaces in a row, column, or diagonal wins.."
              ghLink="https://github.com/vishal9934/tic-tac-toe-2"
              demoLink="https://tic-tac-toe-2-vert.vercel.app"
            />
          </Col>
         
        </Row>
       
      </Container>
      <div  className="more">
      <Button 
       href='https://github.com/vishal9934'
       target="_blank"
      className="btn" 
      style={{ color: 'white' ,fontFamily:"large", backgroundColor:"#ff1493",fontSize:"1.5rem"}} variant="custom" size='lg'
      >More Projects(Github)..</Button>
      </div>
    </Container>
      <Footer/>
    </section>
  )
}

export default Projects