import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/LogIn/Login";
import Main from "./Layout/Main";
import Service from "./Components/Home/Services/Service/Service";
import Checkout from "./Components/Checkout/Checkout";

function App() {
  const route = createBrowserRouter([
    { path: "/", element: <Main />, children : [
      {path:'/home', element: <Home/>},
      {path:'/', element: <Home/>},
      {path:'/signup', element: <SignUp/>},
      {path:'/checkout/:id', element: <Checkout/>, loader: ({params})=>{
        return fetch(`http://localhost:5000/services/${params.id}`)
      }},
      {path:'/login', element: <Login/>},

    ] }]);

  return (
    <div className="App max-w-screen-xl mx-auto ">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
