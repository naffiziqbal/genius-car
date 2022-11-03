import React from "react";
import abtimg from "../../../assets/images/about_us/person.jpg";
import abtimg2 from "../../../assets/images//about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero py-20 bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" relative w-1/2">
          <img src={abtimg} alt="d" className="w-4/5 h-full rounded-lg shadow-2xl" />
          <img
            src={abtimg2}
            alt="d"
            className="absolute w-3/5  right-5 top-3/4  rounded-lg shadow-2xl border-8"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-orange-300 text-center">
            About us
          </h1>

          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
