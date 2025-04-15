
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bookmark, BookmarkCheck, Share2 } from "lucide-react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaCode } from "react-icons/fa";

const CustomCard = () => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="flex flex-col ">
      <div className="lg:w-72  group h-44 w-44 border-2 border-purple-400 lg:h-72 bg-[#212121] overflow-hidden rounded-xl flex justify-center items-center p-4 shadow-lg relative">
       

<div className="relative w-full max-w-[200px]">
        {/* Replace the input section with the SettingsSidebar */}
        <div className="flex gap-4 flex-wrap">
      {/* Bicycle */}
      <label className="cursor-pointer">
        <input
          type="radio"
          name="engine"
          className="peer hidden"
        />
        <div className="w-32 h-32 p-4 border-2 border-gray-300 rounded-lg peer-checked:border-blue-500 peer-checked:bg-blue-100 flex flex-col items-center justify-center transition">
          <div className="w-12 h-12 mb-2 text-gray-700">
            {/* Replace with your bicycle SVG */}
            <svg
              fill="none"
              height="48"
              width="48"
              viewBox="0 0 493.407 493.407"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              className="w-full h-full"
            >
              <path d="M488.474,270.899c-12.647-37.192-47.527-62.182-86.791-62.182..." />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-700">Bicycle</span>
        </div>
      </label>

      {/* Motorbike */}
      <label className="cursor-pointer">
        <input
          type="radio"
          name="engine"
          defaultChecked
          className="peer hidden"
        />
        <div className="w-32 h-32 p-4 border-2 border-gray-300 rounded-lg peer-checked:border-blue-500 peer-checked:bg-blue-100 flex flex-col items-center justify-center transition">
          <div className="w-12 h-12 mb-2 text-gray-700">
            {/* Replace with your motorbike SVG */}
            <svg
              fill="none"
              viewBox="0 0 467.168 467.168"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              className="w-full h-full"
            >
              <path d="M76.849,210.531C34.406,210.531,0,244.937,0,287.388..." />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-700">Motorbike</span>
        </div>
      </label>

      {/* Car */}
      <label className="cursor-pointer">
        <input
          type="radio"
          name="engine"
          className="peer hidden"
        />
        <div className="w-32 h-32 p-4 border-2 border-gray-300 rounded-lg peer-checked:border-blue-500 peer-checked:bg-blue-100 flex flex-col items-center justify-center transition">
          <div className="w-12 h-12 mb-2 text-gray-700">
            {/* Replace with your car SVG */}
            <svg
              fill="none"
              viewBox="0 0 324.018 324.017"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              className="w-full h-full"
            >
              <path d="M317.833,197.111c3.346-11.148,2.455-20.541..." />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-700">Car</span>
        </div>
      </label>
    </div>
      </div>
       <div className="flex lg:w-11/12 w-9/12 border-white  lg:justify-between justify-center items-center max-sm:px-1 absolute top-2 ">
       <div className=" flex flex-row items-center gap-x-2 invisible group-hover:visible transition-all duration-200 ease-in-out">
            <Link to="/cart/getcode" className="flex items-center gap-x-2">GetCode <FaCode size={20} /></Link>
        </div>

        <div className="flex lg:gap-x-4 gap-x-4">
          {/* Save Button */}
          <button
            onClick={() => setSaved(!saved)}
            className="text-white  hover:scale-110 transition-transform"
            title="Save"
          >
            {saved ? <BookmarkCheck size={20} color="blue"/> : <Bookmark size={20} />}
          </button>

          {/* Share Button */}
          <button
            onClick={() => alert("Shared!")}
            className="text-white hover:scale-110 transition-transform"
            title="Share"
          >
            <Share2 size={20} />
          </button>
        </div>
       </div>
      </div>

      <div className="flex flex-row justify-between gap-x-6 items-center mt-4  px-2">
        {/* Like Button */}
        <button
          onClick={() => setLiked(!liked)}
          className={`transition-all hover:scale-110 ${
            liked ? "text-blue-600" : "text-white"
          }`}
          title="Like"
        >
          {liked ? <AiFillLike size={22} /> : <AiOutlineLike size={22} />}
        </button>

  
          <h3 className="text-md font-semibold text-white">Card Title</h3>
          <h3 className="text-md font-semibold text-white"> 110 Views</h3>
        
      </div>
    </div>
  );
};

const CustomCardGrid = () => {
  return (
    <div className="min-h-screen mt-[53px] p-6 flex justify-center items-center">
      <div className="grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(30)].map((_, index) => (
          <CustomCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default CustomCardGrid;


