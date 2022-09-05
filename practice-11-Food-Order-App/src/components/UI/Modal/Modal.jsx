import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

export const Modal = ({children}) => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        {ReactDOM.createPortal(children, document.getElementById('modal-root'))}
      </div>
    </div>
  );
};
