import React from "react";
import { Image } from "react-bootstrap";

const Project = (data) => {
  const { images, website } = data;
  return (
    <div className="project-detail">
      <a href={website}>
        <Image className="project-image" src={images} alt="personal-page" />
      </a>
    </div>
  );
};

export default Project;
