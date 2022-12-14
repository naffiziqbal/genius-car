import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/Authprovider";

const OrderRow = ({ order, handeleDelete, handleStatusUpdate }) => {
  const [serviceData, setServiceData] = useState([]);
  const { user } = useContext(AuthContext);
  const { _id, service, img, custommerName, price, serviceName, status } = order;
  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setServiceData(data))
      .catch((err) => console.log(err));
  }, [service]);

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => handeleDelete(_id)}
            className="rounded-full w-8 h-8 border justify-center items-center flex border-slate-600  hover:bg-slate-600 hover:text-white  duration-300 "
          >
            X
          </button>
          <div className="avatar">
            <div className="rounded w-44 h-44">
              {serviceData?.img && (
                <img
                  src={serviceData.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        {custommerName}
        <br />
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span>
      </td>
      <td>{price}</td>
      <th>
        <button
          className="btn btn-ghost btn-xs"
          onClick={() => handleStatusUpdate(_id)}
        >
          {status ? status : "pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrderRow;
