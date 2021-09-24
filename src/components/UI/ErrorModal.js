import React from "react";
import Button from "./Button";
import Card from "./Card";
import classess from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <>
      <div className={classess.backdrop} onClick={props.onConfirm}>
        <Card className={classess.modal}>
          <header className={classess.header}>
            <h2> {props.title}</h2>
          </header>
          <div className={classess.content}>
            <p>{props.message} </p>
          </div>
          <footer className={classess.actions}>
            <Button onClick={props.onConfirm}> Okay</Button>
          </footer>
        </Card>
      </div>
    </>
  );
};
export default ErrorModal;
