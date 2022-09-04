import React, { useState, useEffect, useReducer, useContext } from "react";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import { Input } from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { AuthContext } from "../../context/auth-context";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.payload, isValid: action.payload.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.payload, isValid: action.payload.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: "", isValid: null });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });
  const { onLogin } = useContext(AuthContext);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailState, passwordState]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", payload: event.target.value });

    setFormIsValid(emailState.value.includes("@") && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", payload: event.target.value });

    setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          type="email"
          id="email"
          label="Email"
          value={emailState.value}
          isValid={emailState.isValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          type="password"
          id="password"
          label="Password"
          value={passwordState.value}
          isValid={passwordState.isValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
