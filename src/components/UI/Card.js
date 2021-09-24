import React from "react";
import clasess from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={`${clasess.Card} ${props.className}`}>
      {props.children}{" "}
    </div>
  );
};
export default Card;
