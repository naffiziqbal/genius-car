import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import "./Banner.css";

const Bannar = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="carusel_img">
          <img src={img1} className="w-full" />
          </div>
          <div className="absolute flex top-3/4 left-3/4  ">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <div className="carusel_img">
          <img src={img2} className="w-full" />
          </div>
          <div className="absolute top-1/4 left-24  bg-gradient-to-r">
            <div className="text-5xl font-bold ">
              <p>Affordable</p>
              <p>Price For </p>
              <p>Servicing Car</p>
            </div>
            <div className="">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                explicabo, rem id sapiente ut perspiciatis dolorem voluptatem
                cupiditate dignissimos ratione ipsam enim tempora necessitatibus
                nam corporis aperiam unde officiis! Dolorem?
              </p>
            </div>
            <div className="">
              <button className="btn btn-secondary">Button</button>
              <button className="btn btn-secondary ml-4">Button</button>
            </div>
          </div>
          .
          <div className="absolute flex top-3/4 left-3/4  ">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <div className="carusel_img">
          <img src={img3} className="w-full" />
          </div>
          <div className="absolute flex top-3/4 left-3/4  ">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
        <div className="carusel_img">
          <img src={img4} className="w-full" />
          </div>
          <div className="absolute flex top-3/4 left-3/4  ">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
