import { useState } from "react";
import React  from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border text-yellow-50 focus:text-2xl border-white/55 rounded-l-lg px-3 outline-none duration-150 bg-black/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-red-500 border border-white/65 hover:bg-yellow-500 text-black text-2xl shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
