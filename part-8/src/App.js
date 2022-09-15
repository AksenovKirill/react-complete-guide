import React, { useState } from "react";
import { AddUser } from "./components/user/add-user/AddUser";
import { UserList } from "./components/user/user-list/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const handleAddNewUser = (name, age) => {
    setUserList((prevUsersList) => {
      return [...prevUsersList, { name, age, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser addNewUser={handleAddNewUser} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
