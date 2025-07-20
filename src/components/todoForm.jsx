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
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todoText}
        onChange={(event) => {
          setTodoText(event.target.value);
        }}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
