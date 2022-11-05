import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/Authprovider";

const OrderRow = ({ order }) => {
  const [serviceData, setServiceData] = useState([]);
  const { user } = useContext(AuthContext);
  const { service, img, custommerName, price, serviceName } = order;
  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setServiceData(data))
      .catch((err) => console.log(err));
  }, [service]);
  console.log(serviceData);

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
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
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default OrderRow;
