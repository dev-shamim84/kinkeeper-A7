"use client";
import React from "react";
import { FiPlus } from "react-icons/fi";
const Banner = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center space-y-3 my-10">
          <h1 className="text-5xl font-bold">
            Friends to keep close in your life
          </h1>
          <p className="text-center text-gray-500 ">
            Your personal shelf of meaningful connections. Browse, tend, and{" "}
            <br />
            nurture the relationships that matter most.
          </p>
          <div>
            <button className="flex items-center btn bg-[#244D3F] text-white">
              <FiPlus />
              Add a Friend
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
