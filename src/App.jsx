import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/LogIn/Login";
import Main from "./Layout/Main";

function App() {
  const route = createBrowserRouter([
    { path: "/", element: <Main />, children : [
      {path:'/home', element: <Home/>, loader: ()=>{
        return fetch('http://localhost:5000/users');
      }},
      {path:'/signup', element: <SignUp/>},
      {path:'/login', element: <Login/>},
      {path:'/home', element: <Home/>},

    ] }]);

  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
