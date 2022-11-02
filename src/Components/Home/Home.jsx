import React from "react";
import { useLoaderData } from "react-router-dom";
import Users from "../Users/Users";

const Home = () => {
  const users = useLoaderData();
  console.log(users);

  return (
    <div>
        <p>Home Page</p>
      {/* {users.map((user,idx) => (
        <Users key={idx} user={user} />
      ))} */}
    </div>
  );
};

export default Home;
