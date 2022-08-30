import React from "react";
import styles from "./Button.module.css";

export const Button = ({ children, type, cssClass, onClick }) => {
  return (
    <button className={`${styles.button} ${cssClass}`} type={type || "button"} onClick={onClick}>
      {children}
    </button>
  );
};
