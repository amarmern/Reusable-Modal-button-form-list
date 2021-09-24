import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classess from "../Users/AddUsers.module.css";

export default function AddUsers(props) {
  const [state, setState] = useState({
    userName: "",
    age: "",
    id: Math.random(toString(32).substring(6))
  });
  const [error, setError] = useState();
  const handleChange = (e) => {
    const updateState = { ...state };
    const { name, value } = e.target;
    updateState[name] = value;
    setState(updateState);
  };
  const handleUserSubmit = (e) => {
    e.preventDefault();
    //validations
    if (state.userName.trim().length === 0 || state.age.trim().length === 0) {
      setError({ title: "Invalid Input", message: "Please Enter the Name" });
      return true;
    }
    if (state.age.trim().length <= -1) {
      setError({ title: "Invalid Input", message: "Please Enter the Age" });
      return true;
    }

    props.onAddUser(state);
    console.log(state);
    setState({ userName: "", age: "" });
  };

  const errorHandle = () => {
    setError(null);
  };

  return (
    <>
      <div>
        {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandle}
          />
        )}
        <Card className={classess.input}>
          <form onSubmit={handleUserSubmit}>
            <label htmlFor="userName">User Name </label>
            <input
              type="text"
              value={state.userName}
              name="userName"
              onChange={handleChange}
            />
            <label htmlFor="age"> Age </label>
            <input
              type="number"
              value={state.age}
              name="age"
              onChange={handleChange}
            />
            <Button type="submit"> Add User </Button>
          </form>
        </Card>
      </div>
    </>
  );
}
