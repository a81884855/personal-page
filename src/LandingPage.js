import React, { useContext } from "react";
import ReactTyped from "react-typed";
import { Col } from "react-bootstrap";
import { Link } from "react-scroll";
import { FaAngleDown } from "react-icons/fa";
import { Waypoint } from "react-waypoint";
import { Context as NavContext } from "./context/NavContext";

function LandingPage() {
  const { Toggle } = useContext(NavContext);

  return (
    <Waypoint onEnter={() => Toggle(false)} onLeave={() => Toggle(true)}>
      <section className="cd-section cd-section--bg-fixed">
        <Col
          className="text"
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 8, offset: 1 }}
        >
          <ReactTyped
            strings={[
              "Hi, I'm Gary, nice to meet you!<br> I'm a Software Engineer",
              "Hi, I'm Gary, nice to meet you!<br> I'm a Web Developer",
              "Hi, I'm Gary, nice to meet you!<br> I'm a Full-Stack Developer!",
            ]}
            typeSpeed={100}
            backSpeed={60}
            backDelay={5}
            smartBackspace
          />
        </Col>
        <Link to="profile" spy={true} smooth={true} duration={500}>
          <Col className="d-none d-md-block scroll-btn">
            <FaAngleDown />
          </Col>
        </Link>

        <Link to="profile" spy={true} smooth={true} duration={500}>
          <Col className="d-block d-md-none scroll-btn full">
            <FaAngleDown />
          </Col>
        </Link>
      </section>
    </Waypoint>
  );
}

export default LandingPage;
