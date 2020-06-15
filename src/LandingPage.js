import React from "react";
import ReactTyped from "react-typed";
import { Container, Row, Col } from "reactstrap";

function LandingPage() {
  return (
    <div>
      <section class="cd-section cd-section--bg-fixed">
        <Col className="text" xs="12" sm={{ size: 8, offset: 1 }}>
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
      </section>
    </div>
  );
}

export default LandingPage;
