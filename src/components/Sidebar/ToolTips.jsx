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
      
      <button className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-red-600 flex items-center justify-center cursor-pointer shadow-lg relative group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        className="h-6 fill-white group-hover:animate-jello-vertical"
      >
        <path
          d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
        ></path>
      </svg>
      <span className="absolute top-[-20px] opacity-0 bg-gradient-to-r from-yellow-400 to-red-600 text-white py-1 px-2 rounded-md group-hover:top-[-40px] group-hover:opacity-100 transition-all duration-300 ease-in-out text-xs">
        FAQ
        <span className="absolute bottom-[-15%] left-1/2 transform -translate-x-1/2 rotate-45 w-2.5 h-2.5 bg-red-600"></span>
      </span>
    </button>
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





