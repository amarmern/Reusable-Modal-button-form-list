import React, { useState } from "react";
import AddUsers from "../src/components/Users/AddUsers";
import UserList from "./components/Users/UserList";
export default function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandle = (state) => {
    console.log("added user", state);
    setUserList((prevUserList) => {
      return [...prevUserList, { userName: state.userName, age: state.age }];
    });
  };
  return (
    <div>
      <AddUsers onAddUser={addUserHandle} />
      <UserList users={[userList]} />
    </div>
  );
}
