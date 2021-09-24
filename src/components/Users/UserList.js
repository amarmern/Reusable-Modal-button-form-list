import React from "react";
import Card from "../UI/Card";
import classess from "./UserList.module.css";

const UserList = (props) => {
  console.log("user details", props.users);
  return (
    <Card className={classess.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.userName} age {user.age} old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
