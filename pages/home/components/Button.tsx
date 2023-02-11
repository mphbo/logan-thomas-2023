import React from "react";
import styles from "../styles/Button.module.scss";

function Button({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <button className={active ? styles.activeButton : styles.button}>
      {label}
    </button>
  );
}

export default Button;
