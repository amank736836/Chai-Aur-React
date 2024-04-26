import './App.css'

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL) // for react appwrite url

  console.log(import.meta.env.VITE_APPWRITE_URL) // for vite appwrite url

  return (
    <>
      <h1>
        A blog app with AppWrite
      </h1>
    </>
  )
}

export default App
