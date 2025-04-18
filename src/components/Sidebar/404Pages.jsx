import React, { useState } from "react";
import { RiHtml5Fill } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa6";
import { SiReact } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { Link } from "react-router-dom";


const NotFoundPages = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6  p-4 lg:h-[750px] ">
      <div className="w-full lg:w-[600px] max-sm:h-[750px] max-sm:w-[350px]  rounded-lg p-4 bg-[#1E1E1E] border border-gray-700 shadow-md">
      <div className="h-full w-full bg-black flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 tracking-widest drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">
          404
        </h1>
        <p className="mt-4 text-xl md:text-2xl tracking-wider font-semibold">
          PAGE NOT FOUND
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-2 border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-colors duration-300"
        >
          HOMEPAGE
        </Link>
      </div>
      </div>
    </div>
    </div>
  );
};

const CustomCardGrid = () => {
    return (
      <div className="min-h-screen mt-[53px] max-sm:mt-0 p-6 flex justify-center items-center">
        <div className="grid grid-cols-1  sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {[...Array(30)].map((_, index) => (
            <NotFoundPages key={index} />
          ))}
        </div>
      </div>
    );
  };
  
  export default CustomCardGrid;



