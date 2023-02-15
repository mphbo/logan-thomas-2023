import React from "react";
import Project from "./components/Project";
import styles from "./styles/Projects.module.scss";

function Projects() {
  return (
    <div className={styles.projects}>
      <p className={styles.title}>Projects</p>
      <Project name="Music Corner" date="November 2022" />
      <Project name="Climate Globe" date="November 2022" />
      <Project name="Better Place" date="November 2022" />
      <Project name="Scheduler" date="November 2022" />
    </div>
  );
}

export default Projects;
