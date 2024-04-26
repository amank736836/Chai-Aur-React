import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo , removeTodo} from "../features/todo/todoSlice";
import PropTypes from 'prop-types';

AddTodo.propTypes = {
  setEditText: PropTypes.func.isRequired,
  setId: PropTypes.func.isRequired,
  id: PropTypes.number,
  editText: PropTypes.string
};

function AddTodo(props) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if(input.trim() !== ""){
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const updateTodoHandler = (e) => {
    e.preventDefault();
    if(input.trim() !== ""){
      dispatch(updateTodo({
        id: props.id,
        text: input
      }));
      setInput("");
      props.setEditText("");
      props.setId(null);
    }
    else{
      dispatch(removeTodo(props.id));
      setInput("");
      props.setEditText("");
      props.setId(null);
    }
  };

  useEffect(() => {
    setInput(props.editText);
  }, [props.editText]);



  return (
    <form onSubmit={(props.editText === "" && props.id === null) ? addTodoHandler : updateTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700
            focus:ring-2 focus:ring-indigo-900 text-base outline-none
            text-gray-100 py-1 px-3 leading-8 transition-colors
            duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onBlur={(props.editText === ""  && props.id === null) ? addTodoHandler : updateTodoHandler}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6
            focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        { (props.editText === ""  && props.id === null) ? "AddTodo" : "UpdateTodo"}
      </button>
    </form>
  );
}

export default AddTodo;
