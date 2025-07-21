import React, { useState } from "react";
import { useTodoContext } from "../context/useTodoContext";

function TodoForm() {
  const { addTodo } = useTodoContext();
  const [todoText, setTodoText] = useState("");

  const addTodoFn = (event) => {
    event.preventDefault();
    if (todoText.trim()) {
      addTodo({ id: Date.now(), task: todoText, completed: false });
      setTodoText("");
    }
  };

  return (
    <form className="flex" onSubmit={addTodoFn}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border rounded-l-lg px-3 outline-none duration-150 bg-gray-50 dark:bg-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 py-2 text-sm"
        value={todoText}
        onChange={(event) => {
          setTodoText(event.target.value);
        }}
      />
      <button
        type="submit"
        className="rounded-r-lg px-4 py-2 bg-green-500 text-white text-sm hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-600 duration-150"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
