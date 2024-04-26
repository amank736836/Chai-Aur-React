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
            className="mt-4 flex justify-between items-center
                bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <div>
              {props.id !== todo.id && (
                <button
                  onClick={ () => {
                    changeValue(todo);
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
