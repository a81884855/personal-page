import React from "react";
import { Element } from "react-scroll";
import { Col, Container, Dropdown, Row } from "react-bootstrap";

const Profile = () => {
  return (
    <Element
      name="profile"
      style={{
        minHeight: 800,
        paddingTop: 50,
      }}
      className="profile"
    >
      <Container className="profile-container">
        <h1 id="title">Profile</h1>
        <h5 id="description">I'm a creative javascript web developer</h5>
        <Dropdown.Divider />

        <Row className="mt-5">
          <Col
            xs={{ span: 10, order: 2 }}
            md={{ span: 8, order: 2 }}
            lg={{ span: 4, order: 1 }}
            className="aboutMe"
          >
            <h3>About me</h3>
            <p>
              My skill set as a full-stack software engineer would enable me to
              make an immediate impact on the web development team. My technical
              prowess along with my passion and personality as a creative,
              problem solver, and team plater will add immense value to your
              team. I have designed and built a responsive full-stack web apps
              using React-bootstrap based on React framework from scratch.
            </p>
          </Col>

          <Col
            xs={{ span: 10, order: 1 }}
            md={{ span: 8, order: 1 }}
            lg={{ span: 4, order: 2 }}
            className="selfie-container"
          >
            <div className="selfie"></div>
          </Col>

          <Col
            xs={{ span: 10, order: 3 }}
            md={{ span: 8, order: 3 }}
            lg={{ span: 4, order: 3 }}
            className="details"
          >
            <h3>Details</h3>
            <div>
              <strong>Name:</strong>
              <p>Gary Guan</p>
              <strong>Location:</strong>
              <p>San Francisco Bay Area</p>
              <strong>Education</strong>
              <p>
                Hack Reactor
                <br />
                <i>Feb 2019 - May 2019</i>
              </p>
              <p>
                University of California, Davis
                <br />
                <i>Sep 2013-Dec 2014</i>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Element>
  );
};

export default Profile;
