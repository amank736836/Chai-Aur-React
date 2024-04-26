import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo , updateTodo } from "../features/todo/todoSlice";

function Todos() {
  
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = React.useState(null);
  const [editText, setEditText] = React.useState("");

  const handleEditSave = (id) => {
    if(editText.trim() !== "") {
      dispatch(updateTodo({ id: id, text: editText.trim() }));
      setEditingId(null);
    }else{
      dispatch(removeTodo(id));
      setEditingId(null);
    }
  }

  return (
    <>
      <div className="mt-4">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center
                bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editingId === todo.id ? (
              <input
                type="text"
                value={editText}
                // value={editingId === todo.id ? editText : todo.text}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={() => { handleEditSave(todo.id) }}
                // readOnly={editingId !== todo.id}
                className="bg-gray-800 rounded border border-gray-700
                        focus:ring-2 focus:ring-indigo-900 text-base outline-none
                        text-gray-100 py-1 px-3 leading-8 transition-colors
                        duration-200 ease-in-out"
              />
            ) : (
              // Rendr todo text
              <div className="text-white">{todo.text}</div>
            )}
            <div>
              {editingId !== todo.id && (
                <button
                  onClick={() => {
                    setEditingId(todo.id);
                    setEditText(todo.text);
                  }}
                  className="text-white bg-green-900 border-0 mr-4
                            py-1 px-4 focus:outline-none hover:bg-black
                            rounded text-lg"
                >
                  ✏️
                </button>
              )}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-green-900 border-0
              py-1 px-4 focus:outline-none hover:bg-black
              rounded text-lg"
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
