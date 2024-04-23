import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {jsx as _jsz} from 'react/jsx-runtime'

function MyApp(){
  return (
    <div>Custom App</div>
  )

}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   children: "Chai Aur react | Aman Kumar",
// };

const anotherElement = (
  <a href="https://www.google.com" target="_blank">
  Chai Aur react | Aman Kumar</a>
)

const anotherUser = "Aman Kumar";

const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank'
  },
  'Chai Aur react | ',
  anotherUser

)



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    //  <App />
    // <MyApp /> 
    // anotherElement
    reactElement
    // {/* MyApp() */}
  //  </React.StrictMode>

  // <App/>
)
