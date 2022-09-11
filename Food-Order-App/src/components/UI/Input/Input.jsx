import React, {forwardRef} from 'react';
import classes from './Input.module.css';

export const Input = forwardRef((props, ref) => {
  const {input, label, onChange} = props;

  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} onChange={onChange} />
    </div>
  );
});
