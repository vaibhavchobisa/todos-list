import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes, //'Switch' replacement
  Route
} from "react-router-dom";
import { About } from "./MyComponents/About";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (x) => {
    console.log("I am onDelete of todo:-", x)  // how is 'x' working in replacement of 'todo' beats me- UNDERSTOOD- It's all connected!
    // This way of deletion does not work in React (works in Angular tho), one has to use 'state hooks' for this
    // let index = todos.indexOf(x);
    // todos.splice(index, 1);
    // This will work:
    setTodos(todos.filter((e) => {
      return e !== x;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    todos.length === 0 ? sno = 1 : sno = todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  // UseEffect has been used for efficient content updation on the website. It means-
  // "as soon as someone changes 'todos', run the arrow function"

  return (
    <>
      <Router>
        {/* <Header searchBar={true} /> */}
        {/* <Header title="My Todos List" /> */}
        <Header title="My Todos List" searchBar={true} />
        <Routes>
          {/* Use 'exact' keyword to avoid confusion between / and /about by the PC. 
          Exact is not needed in the new Router syntax.*/}
          <Route path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;


// render = {() => {
//   return (
//     <>
//       <AddTodo addTodo={addTodo} />
//       <Todos todos={todos} onDelete={onDelete} />
//     </>
//   )
// }}