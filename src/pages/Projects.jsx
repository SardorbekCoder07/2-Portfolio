import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import screen7 from '../assets/projects/screen7.png'
import coin from '../assets/projects/coin.png'
import railway from '../assets/projects/railway.png'

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coin}
              isBlog={false}
              title="Coin web page"
              description="This site is a site made for the Learning Center to find out the level of knowledge of the students on this site and conduct online tests and share coins with them as an incentive.This site is built on React JS, a JavaScript library"
              ghLink="https://github.com/abdulazizsaidovcode/coin"
              demoLink="/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={railway}
              isBlog={false}
              title="Coin web page"
              description="This site is a site made for the Learning Center to find out the level of knowledge of the students on this site and conduct online tests and share coins with them as an incentive.This site is built on React JS, a JavaScript library"
              ghLink="https://github.com/abdulazizsaidovcode/coin"
              demoLink="/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects