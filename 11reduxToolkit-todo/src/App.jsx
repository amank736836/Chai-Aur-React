import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import store from './app/store'
// import store from './features/todo/todoSlice'


function App() {

  const [editText , setEditText] = useState("");
  const [id , setId] = useState(null);

  return (
    <>
      <Provider store={store}>
      <h1>Learn about redux toolkit</h1>
      <AddTodo editText={editText} setEditText={setEditText}
        id={id} setId={setId} />
      <Todos editText={editText} setEditText={setEditText}
        id={id} setId={setId} />
      </Provider>
    </>
  )
}

export default App
