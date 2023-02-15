import React from "react";
import styles from "../styles/Project.module.scss";

function Project({ name, date }: { name: string; date: string }) {
  return (
    <div className={styles.project}>
      <div className={styles.content}>
        <p>{name}</p>
        {/* <p className={styles.date}>{date}</p> */}
      </div>
      <p style={{ fontFamily: "serif" }}>&rarr;</p>
    </div>
  );
}

export default Project;
