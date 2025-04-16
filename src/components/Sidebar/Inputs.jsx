
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
        <input
            required
            type="text"
            name="text"
            className="peer h-[45px] w-full px-3 pt-5 pb-1 text-sm text-white rounded-md bg-transparent outline-none border-none shadow-[3px_3px_10px_rgba(0,0,0,1),-1px_-1px_6px_rgba(255,255,255,0.4)] focus:shadow-[3px_3px_10px_rgba(0,0,0,1),-1px_-1px_6px_rgba(255,255,255,0.4),inset_3px_3px_10px_rgba(0,0,0,1),inset_-1px_-1px_6px_rgba(255,255,255,0.4)] transition-all"
        />
        <label
            className="absolute left-3 top-3 text-white text-[15px] pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-3 peer-placeholder-shown:text-[15px] peer-focus:top-[-20px] peer-focus:left-1 peer-focus:text-sm"
        >
            Username
        </label>
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
