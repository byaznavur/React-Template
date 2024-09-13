import { useEffect, useState } from "react";
import Filter from "./components/Filter/Filter";
import SearchBar from "./components/SearchBar/SearchBar";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    // LocalStorage'dan saqlangan ma'lumotlarni olishga harakat qilamiz
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // LocalStorage'da ma'lumotlarni saqlash
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add todo
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Edit todo
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  // Toggle complete
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Search
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filter
  const handleFilterChange = (status) => {
    setFilterStatus(status);
  };

  // Filter todos by search and status
  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.text
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter =
      filterStatus === "all" ||
      (filterStatus === "completed" && todo.completed) ||
      (filterStatus === "incomplete" && !todo.completed);

    return matchesSearch && matchesFilter;
  });
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <SearchBar onSearch={handleSearch} />
      <Filter filterStatus={filterStatus} onFilterChange={handleFilterChange} />
      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
