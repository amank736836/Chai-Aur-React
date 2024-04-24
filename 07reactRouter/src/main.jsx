import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'/',
//         element:<Home/>
//       },
//       {
//         path:'/about',
//         element:<About/>
//       },
//       {
//         path:'/contact',
//         element:<Contact/>
//       }
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
