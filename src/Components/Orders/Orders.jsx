import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/Authprovider";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState({});

  console.log(user);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  }, [user?.email]);

  return (
    <div>
      <h2 className="text-5xl">Total Orders : {orders.length}</h2>
      <p>{user?.displayName}</p>
    </div>
  );
};

export default Orders;
