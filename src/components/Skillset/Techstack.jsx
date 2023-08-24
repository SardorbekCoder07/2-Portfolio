import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiCss3,
  DiGithubBadge,
  DiBootstrap,
  DiSass,
  DiCodepen
} from "react-icons/di";
import {
  SiHtml5
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCodepen />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge/>
      </Col>
    </Row>
  );
}

export default Techstack;
