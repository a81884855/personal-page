import React from "react";
import { Element } from "react-scroll";
import { Col, Container, DropdownItem, Row } from "reactstrap";

const Profile = () => {
  return (
    <Element
      name="profile"
      style={{
        minHeight: 800,
      }}
      className="profile"
    >
      <Container className="profile-container">
        <h1 id="title">Profile</h1>
        <h5 id="description">I'm a creative javascript web developer</h5>
        <DropdownItem divider />

        <Row>
          <Col
            sm={{ size: 10, order: 2 }}
            md={{ size: 4, order: 1 }}
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
            sm={{ size: 10, order: 1 }}
            md={{ size: 4, order: 2 }}
            className="selfie"
          ></Col>

          <Col
            sm={{ size: 10, order: 3 }}
            md={{ size: 4, order: 3 }}
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
                <header>Hack Reactor</header>
                <i>Feb 2019 - May 2019</i>
              </p>
              <p>
                <header>University of California, Davis</header>
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
