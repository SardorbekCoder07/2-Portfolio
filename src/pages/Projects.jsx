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
              imgPath={lift}
              isBlog={false}
              title="Informational web page"
              description="This platform is based on client's requirement HTML ,CSS and
              Built using JavaScript
              is an informative web page.
              The Back End part is written in the Python programming language.
              A fully functional web page. Currently, this website is working for the city administration."
              demoLink="https://islohot.pythonanywhere.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Online shopping web page"
              description="This platform has a responsive interface created with Reactjs and CSS, which helps users to easily trade and organize an affordable shopping center. The user can easily and cheaply buy the necessary household goods and other household appliances from this site. can get The backend is powered by the Python programming language servers, and Django is used as the database."
              ghLink="https://github.com/SardorbekCoder07/Olcha_clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Portfolio web page"
              description="This personal web page is a great web page with no back end created in HTML, CSS and Bootstrap. This web page is a medium difficulty web page that I gave to my friend as a gift."
              demoLink="https://behruzcoder.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="My personal web page"
              description="This personal website does not have an API server built with programming languages ​​such as HTML.CSS and Javascript. Data is retrieved from the API server and displayed in a user-friendly interface built using React and styled components for a seamless experience."
              ghLink="https://github.com/SardorbekCoder07/FolioPortfolio"
              demoLink="https://sardorbekcoderjon.netlify.app/"
            />
          </Col>
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