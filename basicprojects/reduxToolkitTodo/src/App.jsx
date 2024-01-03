import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1>
        To main tain the state of the Application we use Redux,Redux Toolkit
        this Todo is working based on the Reduxtoolkit
      </h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
