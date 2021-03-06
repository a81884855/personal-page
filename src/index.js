import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./LandingPage";
import Nav from "./Nav";
import Profile from "./Profile";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";
import * as serviceWorker from "./serviceWorker";
import { Provider as NavProvider } from "./context/NavContext";
ReactDOM.render(
  <React.StrictMode>
    <NavProvider>
      <LandingPage />
      <Nav />
      <Profile />
      <Experiences />
      <Projects />
      <Contact />
    </NavProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
