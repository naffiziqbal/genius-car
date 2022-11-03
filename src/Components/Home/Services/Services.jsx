import React, { useEffect, useState } from "react";
import Service from "./Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <p className="text-2xl font-bold text-orange-400 ">Services</p>
        <p className="text-5xl font-semibold">Our Services</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint earum
          cumque sed aspernatur dolorem ducimus suscipit, quasi cum adipisci
          quam libero. Nihil, perspiciatis labore. Modi dolore recusandae ullam
          quod debitis.
        </p>
      </div>
      <div className="services grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-x-5 gap-y-10">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
