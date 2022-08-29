import React from "react";
import { Card } from "../../UI/card/Card";
import styles from "./UserList.module.css";

export const UserList = ({ users }) => {
  return (
    <Card cssClass={styles.users}>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
