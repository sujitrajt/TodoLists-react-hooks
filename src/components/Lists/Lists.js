import React from "react";
import classes from "./lists.module.css";
const List = props => {
  return (
    <section className={classes.lists}>
      <h2>TO DO TASKS</h2>
      <ul>
        {props.todoList.map(ig => (
          <li key={ig.id} onClick={props.onRemoveItem.bind(this, ig.id)}>
            <span>{ig.task}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default List;
