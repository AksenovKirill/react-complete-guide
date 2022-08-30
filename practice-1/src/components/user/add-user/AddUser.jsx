import React, { useState } from "react";
import { Wrapper } from "../../helpers/Wrapper";
import { Button } from "../../UI/button/Button";
import { Card } from "../../UI/card/Card";
import { ErrorModal } from "../../UI/error-modal/ErrorModal";
import styles from "./AddUser.module.css";

export const AddUser = ({ addNewUser }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
  });
  const [error, setError] = useState("");

  const handleChangeName = (event) => {
    setInput((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  const handleChangeAge = (event) => {
    setInput((prevState) => ({
      ...prevState,
      age: event.target.value,
    }));
  };

  const handleAddNewUser = (event) => {
    event.preventDefault();
    if (input.name.trim().length === 0 || input.age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return null;
    }
    if (Number(input.age) < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
      return null;
    }
    addNewUser(input.name, Number(input.age));
    setInput({ name: "", age: "" });
    setError("");
  };

  const handleError = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          handleClick={handleError}
          title={error.title}
          message={error.message}
        />
      )}
      <Card cssClass={styles.input}>
        <form onSubmit={handleAddNewUser}>
          <label htmlFor="username">Username</label>
          <input
            className={styles.input}
            onChange={handleChangeName}
            value={input.name}
            type="text"
            id="username"
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            className={styles.input}
            onChange={handleChangeAge}
            value={input.age}
            id="age"
            type="number"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};
