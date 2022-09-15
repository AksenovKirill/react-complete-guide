import React from "react";
import ReactDOM from "react-dom";
import { Card } from "../card/Card";
import { Button } from "../button/Button";
import styles from "./ErrorModal.module.css";

const Backdrop = ({handleClick }) => {
  return <div onClick={handleClick} className={styles.backdrop} />
}
const ModalOverlay = ({title, message, handleClick}) => {
  return (<Card cssClass={styles.modal}>
    <header className={styles.header}>
      <h2>{title}</h2>
    </header>
    <div className={styles.content}>
      <p>{message}</p>
    </div>
    <footer className={styles.actions}>
      <Button onClick={handleClick}>Upss..</Button>
    </footer>
  </Card>)
}
export const ErrorModal = ({ title, message, handleClick }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop handleClick={handleClick}/>, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay title={title} message={message} handleClick={handleClick}/>,
        document.getElementById('modal-root'))}
    </>
  );
};
