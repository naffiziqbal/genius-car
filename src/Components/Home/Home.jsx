import React from "react";
import { useLoaderData } from "react-router-dom";
import About from "./About/About";
// import Users from "../Users/Users";
import Bannar from "./Banner/Bannar";
import Services from "./Services/Services";

const Home = () => {
  const users = useLoaderData();
  console.log(users);

  return (
    <div className="p-10">
        <Bannar/>
        <About/>
        <Services/>
    </div>
  );
};

export default Home;
