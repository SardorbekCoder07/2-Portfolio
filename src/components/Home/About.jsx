import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { SiTelegram } from "react-icons/si";


const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello, my name is <span className="yellow">Sardorbek Sayfullayev </span>
              and
              I am from  <span className="yellow">Karshi, Uzbekistan.</span>
              <br />
              <br />
              I was recently accepted as a student at one of the best universities in Uzbekistan in 2022
              <br />
              <br />
              As a 
              <b className="yellow"> front end  </b>developer,
              I enjoy solving new problems and constantly expanding my skills.
              <br />
              <br />
              I have a passion for working
              with 
              <i>
                <b className="yellow">
                  {" "}
                  modern Javascript libraries and frameworks.
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="yellow"> React.js</b>
              </i>
              <br />
              <br />
              I am also interested in building new
              <i>
                <b className="yellow"> Web Technologies and Products, </b>
                as well as exploring areas related to
                <b className="yellow"> Artificial Intelligence.</b>
              </i>
              <br />

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SardorbekCoder07"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/Tuit_ki_student"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <SiTelegram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sardorbek_abdurashidovich/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
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

export default About