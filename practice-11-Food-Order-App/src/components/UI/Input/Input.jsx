import React from 'react';
import classes from './Input.module.css';

export const Input = (props) => {
  const {input, label, onChange} = props;
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} onChange={onChange} />
    </div>
  );
};
