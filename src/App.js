import React from "react";
import logo from "./logo.svg";
import "./App.css";

import TodoList from "./components/Tasks/tasks";
function App() {
  return (
    <div className="App">
      {/* <Todo /> */}
      <TodoList />
    </div>
  );
}

export default App;
