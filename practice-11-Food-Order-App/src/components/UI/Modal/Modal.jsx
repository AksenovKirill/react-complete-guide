import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import {portalElement} from '../../../assets/const';
import {CartContext} from '../../../context/CartContext';
import classes from './Modal.module.css';

const BackDrop = () => {
  const {handleCloseCart} = useContext(CartContext);
  return <div onClick={handleCloseCart} className={classes.backdrop} />;
};

const ModalOverlay = ({children}) => (
  <div className={classes.modal}>
    <div className={classes.content}>{children}</div>
  </div>
);

export const Modal = ({children}) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement,
      )}
    </>
  );
};
