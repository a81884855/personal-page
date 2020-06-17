import React, { useState, useContext } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { Context as NavContext } from "./context/NavContext";

const Nav = () => {
  const [show, setShow] = useState(false);
  const {
    state: { leaveLandingPage },
  } = useContext(NavContext);
  console.log(leaveLandingPage);

  return (
    <div>
      <div className={`nav d-md-none ${leaveLandingPage ? "active" : ""}`}>
        <div className="toggle" onClick={() => setShow(!show)}>
          <AiOutlineMenu />
        </div>
        {show && (
          <ul className="list">
            <li>
              <Link
                to="profile"
                onClick={() => {
                  setShow(false);
                }}
                spy={true}
                smooth={true}
                duration={500}
              >
                Profile
              </Link>
            </li>
            <li>Experiences</li>
            <li>Profiles</li>
            <li>Contact</li>
          </ul>
        )}
      </div>

      <div
        className={`side-nav d-none d-md-block ${
          leaveLandingPage ? "" : "active"
        }`}
      >
        <ul>
          <li>
            <Link to="profile" spy={true} smooth={true} duration={500}>
              Profile
            </Link>
          </li>
          <li>Experiences</li>
          <li>Profiles</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
