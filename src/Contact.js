import React from "react";
import { Element } from "react-scroll";
import { Row, Col, Container } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <Element name="contact" className="contact">
      <Container className="contact-container">
        <h1 id="title">Contact</h1>
        <Row className="info-container text-sm-center text-md-left">
          <Col className="info" sm={12} md={6}>
            <a href="https://www.linkedin.com/in/gary-guan" alt="linkedin">
              <FaLinkedin className="icon" />
              linkedin.com/in/gary-guan
            </a>
          </Col>

          <Col className="info" sm={12} md={6}>
            <a href="/">
              <FiMail className="icon" />
              garyguan0713@gmail.com
            </a>
          </Col>

          <Col className="info" xs={12} md={6}>
            <a href="https://github.com/a81884855" alt="github">
              <FaGithub className="icon" />
              https://github.com/a81884855
            </a>
          </Col>
        </Row>
      </Container>
    </Element>
  );
};

export default Contact;
