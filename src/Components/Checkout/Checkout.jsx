import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/Authprovider";

const Checkout = () => {
  const {_id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);
  // console.log(serviceData, ' service data');
  // console.log(title);
  const handleFormSubmit =(e)=>{
      e.preventDefault()
    const form = e.target;
    const fname = form.fname.value;
    const lname = form.lname.value;
    const name = `${fname} ${lname}`;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value

    const order = {
        service : _id,
        serviceName : title,
        price,
        custommerName : name,
        email, 
        phone,
        message
    };
fetch('http://localhost:5000/orders',{
    method : "POST",
    headers : {
        'content-type' : 'application/json'
    },
    body: JSON.stringify(order)
})
.then(res => res.json())
.then(data => {
    if(data.acknowledged){
        form.reset()
    }
    console.log(data)})
.catch(err => console.log(err))

    console.log(order);

    console.log("hello");
    
  }
  return (
    <div className="p-5">
      <form onSubmit={handleFormSubmit}>
        <h2 className="text-4xl">{title}</h2>
        <h4 className="text-3xl">{price}</h4>
        <div className="">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-2 gap-5">
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              className="input input-bordered input-primary w-full "
            />
            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              className="input input-bordered input-primary w-full "
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              className="input input-bordered input-primary w-full "
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Number"
              className="input input-bordered input-primary w-full "
              value={user?.email ? user?.email : " "}
              readOnly
            />
          </div>
        </div>
        <div className="text-center pt-2">
          <textarea
          name="message"
            className="textarea w-full textarea-secondary"
            placeholder="Your Message here"
            rows={5}
          ></textarea>
          <br />
          <input type="submit" className="btn" />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
