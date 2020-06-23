import React from "react";
import { Element } from "react-scroll";
import { Col, Container, Row } from "react-bootstrap";
import Project from "./Project";
import projectsData from "./ProjectDetail.json";

const Projects = () => {
  return (
    <Element name="projects" className="projects">
      <Container className="projects-container">
        <h1 id="title">Projects</h1>
        <Row className="project-container">
          {projectsData.map((data) => (
            <Col className="project" sm={10} md={6}>
              <Project {...data} />
            </Col>
          ))}
        </Row>
      </Container>
    </Element>
  );
};

export default Projects;
