import React from "react";
import { Col, Row } from "react-bootstrap";
import './techstack.css'
import {
  DiJavascript1,
  DiReact,
  DiCss3,
  DiBootstrap,
  DiSass,
  DiGulp
} from "react-icons/di";
import {
  SiChakraui,
  SiChartdotjs,
  SiD3Dotjs,
  SiFirebase,
  SiHtml5,
  SiJquery,
  SiLeaflet,
  SiMaterialui,
  SiNextdotjs,
  SiPassport,
  SiPug,
  SiSvelte,
  SiSwiper,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiUikit,
  SiVite,
  SiWordpress
} from "react-icons/si";
import {AiOutlineMail } from "react-icons/ai";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" >
        <p className="techstackP">HTML5</p>
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="techstackP">CSS3</p>
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="techstackP">Bootstrap</p>
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="techstackP">Sass</p>
        <DiSass />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="techstackP">Tailwind CSS</p>
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="techstackP">JavaScript</p>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="techstackP">TypeScript</p>
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="techstackP">JQuery</p>
        <SiJquery />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="techstackP">Firebase JS</p>
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="techstackP">Passport JS</p>
        <SiPassport />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="techstackP">D3 JS</p>
        <SiD3Dotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="techstackP">Chart JS</p>
        <SiChartdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="techstackP">Chart JS</p>
        <SiChartdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="techstackP">Leaflet JS</p>
        <SiLeaflet />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="techstackP">Vite JS</p>
        <SiVite />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="techstackP">Svelte JS</p>
        <SiSvelte />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="techstackP">Email JS</p>
        <AiOutlineMail />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="techstackP">Swiper JS</p>
        <SiSwiper />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="techstackP">React JS</p>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="techstackP">Next JS</p>
        < SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="techstackP">Three JS</p>
        < SiThreedotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="techstackP">Gulp JS</p>
        <DiGulp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="techstackP">Pug JS</p>
        <SiPug />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="techstackP">WordPress</p>
        <SiWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="techstackP">Material UI</p>
        <SiMaterialui />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="techstackP">Chakra UI</p>
        <SiChakraui />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="techstackP">UIkit</p>
        <SiUikit />
      </Col>
    </Row>
  );
}

export default Techstack;
