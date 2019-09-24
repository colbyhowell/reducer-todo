import React from "react";

const ToDo = props => {
  return (
    <div
      className={`todo ${props.data.completed ? " completed" : ""}`}
      onClick={props.toggle}
    >
      <div>{props.data.item}</div>
    </div>
  );
};

export default ToDo;
