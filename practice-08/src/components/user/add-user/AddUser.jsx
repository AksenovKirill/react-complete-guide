import React, { useRef, useState } from "react";
import { Button } from "../../UI/button/Button";
import { Card } from "../../UI/card/Card";
import { ErrorModal } from "../../UI/error-modal/ErrorModal";
import styles from "./AddUser.module.css";

export const AddUser = ({ addNewUser }) => {
  const nameRef = useRef();
  const ageRef = useRef();
  const [error, setError] = useState("");
  
  const handleAddNewUser = (event) => {
    event.preventDefault();
    const nameValue = nameRef.current.value;
    const ageValue = ageRef.current.value;
    if (nameValue.trim().length === 0 || ageValue.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return null;
    }
    if (Number(ageValue) < 1) {
      setError({ title: "Invalid age", message: "Please enter a valid age (> 0)" });
      return null;
    }
    addNewUser(nameValue, Number(ageValue));
    nameRef.current.value = '';
    ageRef.current.value = '';
    setError("");
  };

  const handleError = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal handleClick={handleError} title={error.title} message={error.message} />
      )}
      <Card cssClass={styles.input}>
        <form onSubmit={handleAddNewUser}>
          <label htmlFor="username">Username</label>
          <input
            ref={nameRef}
            className={styles.input}
            type="text"
            id="username"
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            ref={ageRef}
            className={styles.input}
            id="age"
            type="number"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};
