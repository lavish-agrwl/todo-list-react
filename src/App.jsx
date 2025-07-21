import React, { useEffect, useState } from "react";
import { useTodoContext, TodoProvider } from "./context/useTodoContext";
import TodoForm from "./components/TodoForm";
import TodoCard from "./components/TodoCard";

const AppContent = () => {
  const { todos, setTodos } = useTodoContext();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todoList"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-lg rounded-lg px-6 py-4 bg-white dark:bg-gray-800">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
              Manage Your Todos
            </h1>
            <button
              className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg"
              onClick={() => setIsDarkMode((prev) => !prev)}
            >
              {isDarkMode ? "🌞 Light Mode" : "🌕 Dark Mode"}
            </button>
          </div>
          <div className="mb-6">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-4">
            {todos.map((todoItem) => (
              <div key={todoItem.id} className="w-full">
                <TodoCard todo={todoItem} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <TodoProvider>
      <AppContent />
    </TodoProvider>
  );
};

export default App;
