import React from "react";
import { FaCreativeCommonsSamplingPlus } from "react-icons/fa";
const Project = (data) => {
  const { name, description, images, website } = data;
  return (
    <div className="project-detail">
      <a href={website}>
        <div className="corner">
          <FaCreativeCommonsSamplingPlus />
        </div>
        <div className="description">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <img
          className="project-image"
          src={require(`${images}`)}
          alt="personal-page"
        />
      </a>
    </div>
  );
};

export default Project;
