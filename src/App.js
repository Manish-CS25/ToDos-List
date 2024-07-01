// import logo from "./logo.svg";
import "./App.css";
import Header from "./myComponent/header";
// import ToDositem from "./myComponent/ToDositem";
import Footer from "./myComponent/Footer";
import ToDos from "./myComponent/ToDos";

import { AddTodo } from "./myComponent/addTodo";
import React, { useState } from "react";

function App() {
  // let myName = "John Doe";
  const onDelete = (todo) => {
    console.log("I am on delete todos", todo);
    setTodos(
      todos.filter((e) => {
        return e.sno !== todo.sno;
      })
    );
  };

  const addTodo = (title, desc) => {
    console.log("Adding todo", title, desc);
    let sno = 0;
    if (todos.length - 1 === undefined) {
      sno = 1;
    } else sno = todos[todos.length - 1].sno + 1;

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done",
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the mall to get this job done",
    },
    {
      sno: 3,
      title: "Go to the store",
      desc: "You need to go to the store to get this job done",
    },
  ]);
  return (
    <>
      <Header title="My ToDos List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <ToDos todos={todos} onDelete={onDelete} />

      <Footer />
    </>
  );
}

export default App;
