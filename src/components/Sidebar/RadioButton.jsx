import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bookmark, BookmarkCheck, Share2 } from "lucide-react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaCode } from "react-icons/fa";

const CustomCard = () => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [selected, setSelected] = useState(0);

const getBgPosition = (index) => {
  if (index === selected) return "0px 0px";
  if (index > selected) return "0px -24px";
  return "0px 24px";
};

  return (
    <div className="flex flex-col ">
      <div className="lg:w-72  group h-44 w-44 border-2 border-purple-400 lg:h-72 bg-[#212121] overflow-hidden rounded-xl flex justify-center items-center p-4 shadow-lg relative">
      <div className="flex flex-col items-start p-4">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  onMouseDown={(e) =>
                    (e.currentTarget.style.transform = "scale(1.5)")
                  }
                  onMouseUp={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                  className="m-2 w-6 h-6 rounded-full cursor-pointer outline-none focus:outline-none"
                  style={{
                    WebkitAppearance: "none",
                    boxShadow:
                      "hsla(0,0%,100%,.15) 0 1px 1px, inset hsla(0,0%,0%,.5) 0 0 0 1px",
                    backgroundColor: "hsla(0,0%,0%,.2)",
                    backgroundImage:
                      "radial-gradient(hsla(200,100%,90%,1) 0%, hsla(200,100%,70%,1) 15%, hsla(200,100%,60%,.3) 28%, hsla(200,100%,30%,0) 70%)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: getBgPosition(i),
                    transition: "background-position 0.2s ease, transform 0.25s ease",
                  }}
                ></button>
              ))}
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





