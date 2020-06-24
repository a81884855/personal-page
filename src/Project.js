import React from "react";

const Project = (data) => {
  const { name, description, images, website } = data;
  console.log(images);
  return (
    <div className="project-detail">
      <a href={website}>
        <div className="corner">#</div>
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
