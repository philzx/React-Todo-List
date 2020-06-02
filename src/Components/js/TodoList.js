import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, changeStatus }) => {
  const todoList = todos.map((todo) => {
    return (
      <TodoItem
        changeStatus={changeStatus}
        deleteTodo={deleteTodo}
        todo={todo}
        key={todo.id}
      />
    );
  });

  return <div className="todo-list">{todoList}</div>;
};

export default TodoList;
