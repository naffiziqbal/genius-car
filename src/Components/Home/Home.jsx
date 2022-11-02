import React from "react";
import { useLoaderData } from "react-router-dom";
import Users from "../Users/Users";
import Bannar from "./Banner/Bannar";

const Home = () => {
  const users = useLoaderData();
  console.log(users);

  return (
    <div className="p-10">
        <Bannar/>
    </div>
  );
};

export default Home;
