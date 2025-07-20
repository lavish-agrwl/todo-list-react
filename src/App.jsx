import React from "react";
import { useTodoContext, TodoProvider } from "./context/useTodoContext";
import TodoForm from "./components/TodoForm";
import TodoCard from "./components/TodoCard";

const AppContent = () => {
  const { todos } = useTodoContext();

  return (
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4">
          <TodoForm />
        </div>
        <div className="flex flex-wrap gap-y-3">
          {todos.map((todoItem) => (
            <div key={todoItem.id} className="w-full">
              <TodoCard todo={todoItem} />
            </div>
          ))}
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
