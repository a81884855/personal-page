import React from "react";
import { Element } from "react-scroll";
import { Row, Col, Container, Dropdown } from "react-bootstrap";

const Experiences = () => {
  return (
    <Element name="experiences" className="experiences">
      <Container className="experiences-container">
        <h1 id="title">Experiences</h1>
        {/* <h5 id="description">I'm a creative javascript web developer</h5> */}

        <h3 id="type">Careers</h3>

        <Row className="detail">
          <Col className="job-detail" lg={3} md={3} sm={12}>
            <strong className="job-title">Software Engineer</strong>
            <div>
              <strong className="origanization">CXO Nexus</strong>
            </div>
            <i>July 2019 - current</i>
          </Col>
          <Col lg={8} md={9} sm={12}>
            <ul>
              <li>
                Lead the development of Node server infrastructure for the
                transition from PHP to Node.JS, utilize the AWS Cognito and
                building back-end systems and API to manage user accounts,
                insert data from excel document into the database, and organize
                regular events
              </li>
              <li>
                Work closely with PM and design teams to define feature
                specifications and build the next generation of products
                leveraging frameworks using Javascript, CSS, HTML, implement new
                Javascript libraries to reduce 60% file loading time{" "}
              </li>
              <li>
                Develop UI and back-end logic to balance system loading and
                improve user experience by routing clients, participate in
                design discussions, testing, and code reviews
              </li>
              <li>
                Diagnose, troubleshoot, and resolve software, or other network
                and system problems, and replace defective components when
                necessary
              </li>
              <li>
                Interact positively with non-tech teammates, both in-person and
                remotely, to develop and refine great ideas and communicate
                issues; collaborate with, mentor, and influence members within
                your team and across other teams at the company
              </li>
              <li>
                Identify and suggest improvements in methods, plan projects of
                limited duration and scope, troubleshoot when erroneous or
                unexpected results occur
              </li>
            </ul>
          </Col>
        </Row>

        <h3 id="type">Education</h3>
        <Row className="detail">
          <Col className="job-detail" md={9} sm={12}>
            <strong className="origanization">Hack Reactor</strong>
            <i>Advanced Software Engineering Program</i>
          </Col>
          <Col>
            <i>Feb 2019 - May 2019</i>
          </Col>
        </Row>

        <Row className="detail">
          <Col className="job-detail" md={9} sm={12}>
            <strong className="origanization">
              University of California,Davis
            </strong>
            <i>Bachelor's Degree, Economics</i>
          </Col>
          <Col>
            <i>Graduated at Dec 2014</i>
          </Col>
        </Row>
      </Container>
    </Element>
  );
};

export default Experiences;
