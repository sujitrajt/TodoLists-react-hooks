import React, { useState, useEffect } from "react";
import Todo from "../Todo/todo";
import TodoList from "../Lists/Lists";
const Tasks = props => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    console.log("render");
    fetch("https://hooks-todo-6ddd1.firebaseio.com/todoTasks.json")
      .then(response => response.json())
      .then(responseData => {
        const loadTodoTasks = [];
        for (const key in responseData) {
          loadTodoTasks.push({
            id: key,
            task: responseData[key].task
          });
        }
        setTasks(loadTodoTasks);
      });
  }, []);

  const addTodoList = todoTasks => {
    fetch("https://hooks-todo-6ddd1.firebaseio.com/todoTasks.json", {
      method: "POST",
      body: JSON.stringify(todoTasks),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        setTasks(prevTasks => [
          ...prevTasks,
          { id: responseData.name, ...todoTasks }
        ]);
      });
  };

  const removeIngredientHandler = tasksId => {
    fetch(
      `https://hooks-todo-6ddd1.firebaseio.com/todoTasks/${tasksId}.json/`,
      {
        method: "DELETE"
      }
    ).then(reponse => {
      setTasks(prevTasks =>
        prevTasks.filter(todoTasks => todoTasks.id !== tasksId)
      );
    });
  };
  return (
    <div>
      <Todo onAddTask={addTodoList} />
      <TodoList todoList={tasks} onRemoveItem={removeIngredientHandler} />
    </div>
  );
};
export default Tasks;
