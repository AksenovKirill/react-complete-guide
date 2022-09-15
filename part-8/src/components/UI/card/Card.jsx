import React from "react";
import styles from "./Card.module.css";

export const Card = ({ cssClass, children }) => {
  return <div className={`${styles.card} ${cssClass}`}>{children}</div>;
};
