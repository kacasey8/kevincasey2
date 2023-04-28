import React from "react";

function Project(props) {
  const { project } = props;
  return (
    <>
      <h3 id={project.name.replaceAll(" ", "_")}>{project.name}</h3>
      {project.timeframe}
      <p>
        {project.image_src != null && (
          <img
            style={{
              width: "auto",
              height: "auto",
              maxWidth: 300,
              maxHeight: 250,
              float: "right",
            }}
            src={`assets/img/experience/${project.image_src}`}
            alt="..."
          />
        )}
        {project.repo != null && (
          <a
            className="pe-2"
            href={project.repo}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        )}
        {project.demo != null && (
          <a
            className="pe-2"
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
        )}
        {project.result != null && (
          <a
            className="pe-2"
            href={project.result}
            target="_blank"
            rel="noreferrer"
          >
            Result
          </a>
        )}
        {project.repo != null ||
        project.demo != null ||
        project.result != null ? (
          <br />
        ) : null}
        ({project.language}) {project.blurb}. {project.description}
      </p>
    </>
  );
}

export default Project;
