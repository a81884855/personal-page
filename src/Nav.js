import React, { useState, useContext } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { Context as NavContext } from "./context/NavContext";

const Nav = () => {
  const [show, setShow] = useState(false);
  const {
    state: { leaveLandingPage },
  } = useContext(NavContext);

  return (
    <div>
      <div className={`nav d-lg-none ${leaveLandingPage ? "active" : ""}`}>
        <div className="toggle" onClick={() => setShow(!show)}>
          <AiOutlineMenu />
        </div>
        {show && (
          <ul className="list">
            <Link
              activeClass="active-drop"
              to="profile"
              onClick={() => {
                setShow(false);
              }}
              spy={true}
              smooth={true}
              duration={500}
            >
              <li>Profile </li>
            </Link>
            <Link
              activeClass="active-drop"
              to="experiences"
              onClick={() => {
                setShow(false);
              }}
              spy={true}
              smooth={true}
              duration={500}
            >
              <li>Experiences</li>
            </Link>
            <Link
              activeClass="active-drop"
              to="projects"
              onClick={() => {
                setShow(false);
              }}
              spy={true}
              smooth={true}
              duration={500}
            >
              <li>Projects</li>
            </Link>
            <Link
              activeClass="active-drop"
              to="contact"
              onClick={() => {
                setShow(false);
              }}
              spy={true}
              smooth={true}
              duration={500}
            >
              <li>Contact</li>
            </Link>
          </ul>
        )}
      </div>

      <div
        className={`side-nav d-none d-lg-block ${
          leaveLandingPage ? "" : "active"
        }`}
      >
        <ul>
          <Link
            activeClass="active"
            to="profile"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li>Profile</li>
          </Link>
          <Link
            activeClass="active"
            to="experiences"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li>Experiences</li>
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li>Projects</li>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li>Contact</li>
          </Link>
          <a id="resume" href="/resume.pdf">
            <li>Resume</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
