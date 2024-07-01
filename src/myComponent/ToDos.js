import React from "react";
import { ToDositem } from "./ToDositem";

export const ToDos = (props) => {
  return (
    <div className="container">
      <h2 className="my-3">Todos list</h2>
      {props.todos.length === 0
        ? "No Todos to display"
        : props.todos.map((todo) => {
            return (
              <ToDositem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
export default ToDos;
