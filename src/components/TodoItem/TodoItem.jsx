import React, { useState } from "react";

function TodoItem({ todo, deleteTodo, editTodo, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSave}>Saqlash</button>
        </>
      ) : (
        <>
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.text}
          </span>
          <button onClick={handleEdit}>Tahrirlash</button>
          <button onClick={() => deleteTodo(todo.id)}>O'chirish</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
