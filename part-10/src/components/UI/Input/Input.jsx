import React, { useRef, useImperativeHandle, forwardRef } from "react";
import classes from "./Input.module.css";

export const Input = forwardRef((props, ref) => {
  const { id, type, value, onChange, onBlur, label, isValid } = props;
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div className={`${classes.control} ${isValid === false ? classes.invalid : ""}`}>
      <label htmlFor={id}>{label}</label>
      <input ref={inputRef} type={type} id={id} value={value} onChange={onChange} onBlur={onBlur} />
    </div>
  );
});
