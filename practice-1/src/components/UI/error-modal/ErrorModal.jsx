import React from "react";
import { Card } from "../card/Card";
import { Button } from "../button/Button";
import styles from "./ErrorModal.module.css";

export const ErrorModal = ({ title, message, handleClick }) => {
  return (
    <>
      <div onClick={handleClick} className={styles.backdrop} />
      <Card cssClass={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={handleClick}>Upss..</Button>
        </footer>
      </Card>
    </>
  );
};
