import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

import PropTypes from 'prop-types';
Todos.propTypes = {
  setEditText: PropTypes.func.isRequired,
  setId: PropTypes.func.isRequired,
  id: PropTypes.number,
  editText: PropTypes.string
};

function Todos(props) {
  
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const changeValue = (todo) => {
    props.setEditText(todo.text);
    props.setId(todo.id);
  }

  return (
    <>
      <div className="mt-4">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="flex items-center justify-between px-4 py-2 mt-4 rounded bg-zinc-800"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <div>
              {props.id !== todo.id && (
                <button
                  onClick={ () => {
                    changeValue(todo);
                  }}
                  className="px-4 py-1 mr-4 text-lg text-white bg-green-900 border-0 rounded focus:outline-none hover:bg-black"
                >
                  ✏️
                </button>
               )}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="px-4 py-1 text-lg text-white bg-green-900 border-0 rounded focus:outline-none hover:bg-black"
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
