import React, { useState } from "react";
import classes from "./todo.module.css";
const Todo = props => {
  const [task, setTask] = useState("");
  const submitHandler = event => {
    event.preventDefault();
    props.onAddTask({ task: task });
  };
  //   useEffect(() => {
  //     console.log("render");
  //   }, []);
  return (
    <div className={classes.todo_list}>
      <h2>To-do List</h2>
      <form onSubmit={submitHandler}>
        {/* <label htmlFor="todoList">Todo</label> */}
        <input
          type="text"
          id="todo"
          className={classes.todo_input}
          onChange={event => {
            setTask(event.target.value);
          }}
        />
        <div className="todo-button">
          <button type="submit">Add Task</button>
        </div>
      </form>
    </div>
  );
};
export default Todo;
