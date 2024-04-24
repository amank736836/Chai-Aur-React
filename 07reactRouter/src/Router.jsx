import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github from "./components/Github/Github";
import GithubInfoLoader from "./components/Github/GithubInfoLoader";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user/:userid" element={<User />} />
      <Route loader={GithubInfoLoader} path="/github" element={<Github />} />
      <Route
        loader={GithubInfoLoader}
        path="/github/:userid"
        element={<Github />}
      />
    </Route>
  )
);

export default Router;
