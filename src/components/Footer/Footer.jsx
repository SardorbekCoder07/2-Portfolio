import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";


const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <span>Thank you for your attention</span>
          </Col>
          <Col md="4" className="footer-copywright">
            <span>Sardorbek Sayfullayev {year}</span>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">

              <li className="social-icons">
                <a
                  href="https://github.com/SardorbekCoder07"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="linkedin"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sardorbek_abdurashidovich/"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );  
}

export default Footer