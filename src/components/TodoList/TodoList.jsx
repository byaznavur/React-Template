import React from "react";
import TodoItem from "../TodoItem/TodoItem";

function TodoList({ todos, deleteTodo, editTodo, toggleComplete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
