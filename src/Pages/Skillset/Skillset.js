import React from "react";
import "./Skillset.css"
import { Container } from "react-bootstrap";


import Techstack from "../../components/SkillSet/Techstack";
import Toolstack from "../../components/SkillSet/Toostack";
import Leetcode from "../../components/SkillSet/Leetcode";
import Github from "../../components/SkillSet/Github";
import Background from "../../components/Background";
import Footer from "../../components/Footer"

const Skillset = () => {
  return (
    <section>
    <Container fluid className="about-section">
      <Background />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="yellow">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="yellow">Tools</strong> I use
        </h1>
        <Toolstack />

        <Leetcode />
        <Github />
        
      </Container>
      
    </Container>
    <Footer/>
    </section>
    
  )
}

export default Skillset