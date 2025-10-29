import { useState } from "react";
import "./TodoApp.css";

function TodoApp() {
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    console.log("Add todo:", inputValue);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>

      <div className="add-todo-section">
        <h2>New Todo</h2>
        <input
          type="text"
          placeholder="Enter a new todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
}

export default TodoApp;
