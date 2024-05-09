import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/screen2.jpg";
import project from "../assets/projects/screen5.jpg";
import lift from "../assets/projects/screen4.jpg";
import kickstart from "../assets/projects/screen6.jpg";
import screen7 from '../assets/projects/screen7.png'

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={screen7}
              isBlog={false}
              title="Ryadhs Bus web page"
              description="We made this site for Saudi Arabia. We have made this site to regulate the main Bus traffic and to bring relief to Saudi citizens. We made this site together with our team. This site is perfectly built in React JS. A very beautiful design has been created based on tailwind, and the responsive design is amazingThis personal website does not have an API server built with programming languages ​​such as HTML.CSS and Javascript. Data is retrieved from the API server and displayed in a user-friendly interface built using React and styled components for a seamless experience."
              ghLink="https://github.com/Behruz1227/Saudi-project"
              demoLink="http://xconnect.uz/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects