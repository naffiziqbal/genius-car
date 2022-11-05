import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/Authprovider";
import OrderRow from "./OrderRow/OrderRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  console.log(orders);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  }, [user?.email]);
  const handeleDelete = (id) => {
    const proceed = window.confirm(" Are You Sure About Your Step?");
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE"
      })
        .then((res) => res.json())
        .then((data) =>{
          if(data.deletedCount > 0){
            alert(' Order Deleted')
            const remaining = orders.filter(odr => odr._id !== id)
            console.log(remaining);
            
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-5xl">Total Orders : {orders.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Service</th>
              <th>Price</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map(order => <OrderRow key={order._id} order ={order} handeleDelete= {handeleDelete}/> )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
