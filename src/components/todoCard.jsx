import { useState } from "react";
import { useTodoContext } from "../context/useTodoContext";

function TodoCard({ todo }) {
  const { toggleCompleted, updateTodo, removeTodo } = useTodoContext();
  const [todoMsg, setTodoMsg] = useState(todo.task);
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const editTodo = () => {
    updateTodo(todo.id, { task: todoMsg });
    setIsTodoEditable(false);
  };

  const deleteTodo = (id) => {
    removeTodo(id);
  };
  return (
    <div
      className={`flex border rounded-lg px-4 py-2 gap-x-3 shadow-md duration-300 text-gray-800 dark:text-gray-200 ${
        todo.completed
          ? "bg-green-100 dark:bg-green-900"
          : "bg-gray-100 dark:bg-gray-800"
      } border-gray-300 dark:border-gray-700`}
    >
      <input
        type="checkbox"
        className="cursor-pointer accent-green-500 dark:accent-green-700"
        checked={todo.completed}
        disabled={isTodoEditable}
        onChange={() => toggleCompleted(todo.id)}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg text-sm ${
          isTodoEditable
            ? "border-gray-300 px-2 dark:border-gray-600"
            : "border-transparent"
        } ${
          todo.completed ? "line-through text-gray-500 dark:text-gray-400" : ""
        }`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border justify-center items-center bg-white hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 shrink-0 disabled:opacity-50 border-gray-300 dark:border-gray-600"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border justify-center items-center bg-white hover:bg-red-200 text-red-500 dark:bg-gray-700 dark:hover:bg-red-800 dark:text-red-400 shrink-0 border-gray-300 dark:border-gray-600"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoCard;
