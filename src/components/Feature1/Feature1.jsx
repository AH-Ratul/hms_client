import React from "react";
import { NavLink } from "react-router-dom";

const Feature1 = () => {
  return (
    <div className="flex mt-56 pl-10">
      <div className="w-[600px]">
        <img src="../../../public/img/comb1.jpg" alt="" />
      </div>
      <div className=" ml-20 mt-20">
        <p className="text-xl text-gray-600 ">WELCOME TO PARADISE INN</p>
        <h1 className="text-[55px] font-bold mt-2 mb-4">Beach Paradise</h1>
        <p className="text-gray-500 leading-7 w-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tenetur
          asperiores quaerat, delectus accusamus saepe quisquam! Exercitationem
          minima magni culpa quis hic minus veritatis. Qui neque eos amet at
          delectus.
        </p>
        <div className="mt-4 flex items-center">
          <div className="flex items-center w-60 mr-9">
            <img
              src="../../../public/img/icon2.png"
              alt=""
              className="w-12 mr-4"
            />
            <p className="font-semibold text-gray-600">
              Realistic Summer Vacation
            </p>
          </div>
          <div className="flex items-center w-52">
            <img
              src="../../../public/img/icon3.png"
              alt=""
              className="w-12 mr-4"
            />
            <p className="font-semibold text-gray-600">5 Star Luxury Motels</p>
          </div>
        </div>
        <div className="mt-9 bg-teal-400 w-fit py-4 px-5 text-white text-lg font-serif font-semibold hover:shadow-lg">
          <NavLink>Discover More</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Feature1;
