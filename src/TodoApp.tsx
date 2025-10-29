import { useState } from "react";
import "./TodoApp.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

function TodoApp() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    if (inputValue.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
      createdAt: new Date(),
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  return (
    <div className="app">
      <h1>Todo List React App</h1>

      <div className="add-todo-section">
        <input
          type="text"
          placeholder="Enter a new todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <div className="todos-list">
        <h2>My Todo:</h2>
        {todos.length === 0 ? (
          <p>No todos yet.</p>
        ) : (
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <span>{todo.text}</span>
                <small className="todo-date">
                  Created: {todo.createdAt.toLocaleDateString()} at {todo.createdAt.toLocaleTimeString()}
                </small>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TodoApp;
