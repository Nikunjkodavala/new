
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Bookmark, BookmarkCheck, Share2 } from "lucide-react";
// import { AiFillLike, AiOutlineLike } from "react-icons/ai";
// import { FaCode } from "react-icons/fa";

// const CustomCard = () => {
//   const [liked, setLiked] = useState(false);
//   const [saved, setSaved] = useState(false);
//   return (
//     <div className="flex flex-col ">
//       <div className="lg:w-98  group h-44 w-44  lg:h-98 bg-[#212121] overflow-hidden rounded-xl flex justify-center items-center p-4 shadow-lg relative">
//       <div className="w-[190px] h-[254px] rounded-[20px] bg-[#f5f5f5] p-6 border-2 border-[#c3c6ce] relative overflow-visible transition duration-500 ease-out hover:border-[#008bf8] hover:shadow-[0_4px_18px_rgba(0,0,0,0.25)] group">
//       {/* Card Details */}
//       <div className="text-black h-full grid place-content-center gap-2">
//         <p className="text-[1.5em] font-bold">Card title</p>
//         <p className="text-[#868686]">Here are the details of the card</p>
//       </div>

//       {/* Button (hidden until hover) */}
//       <button className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[125%] opacity-0 w-[60%] rounded-xl bg-[#008bf8] text-white text-base py-2 px-4 transition-all duration-300 ease-out group-hover:translate-y-[50%] group-hover:opacity-100">
//         More info
//       </button>
//     </div>
//        <div className="flex lg:w-11/12 w-9/12 border-white  lg:justify-between justify-center items-center max-sm:px-1 absolute top-2 left-3 ">
//        <div className=" flex flex-row items-center gap-x-2 invisible group-hover:visible transition-all duration-200 ease-in-out">
//             <Link to="/cart/getcode" className="flex items-center gap-x-2">GetCode <FaCode size={20} /></Link>
//         </div>

//         <div className="flex lg:gap-x-4 gap-x-1.5">
//           {/* Save Button */}
//           <button
//             onClick={() => setSaved(!saved)}
//             className="text-white  hover:scale-110 transition-transform"
//             title="Save"
//           >
//             {saved ? <BookmarkCheck size={20} color="blue"/> : <Bookmark size={20} />}
//           </button>

//           {/* Share Button */}
//           <button
//             onClick={() => alert("Shared!")}
//             className="text-white hover:scale-110 transition-transform"
//             title="Share"
//           >
//             <Share2 size={20} />
//           </button>
//         </div>
//        </div>
//       </div>

//       <div className="flex flex-row justify-between gap-x-6 items-center mt-4  px-2">
//         {/* Like Button */}
//         <button
//           onClick={() => setLiked(!liked)}
//           className={`transition-all hover:scale-110 ${
//             liked ? "text-blue-600" : "text-white"
//           }`}
//           title="Like"
//         >
//           {liked ? <AiFillLike size={22} /> : <AiOutlineLike size={22} />}
//         </button>

  
//           <h3 className="text-md font-semibold text-white">Card Title</h3>
//           <h3 className="text-md font-semibold text-white"> 110 Views</h3>
        
//       </div>
//     </div>
//   );
// };

// const CustomCardGrid = () => {
//   return (
//     <div className="min-h-screen mt-[53px] p-6 flex justify-center items-center">
//       <div className="grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
//         {[...Array(30)].map((_, index) => (
//           <CustomCard key={index} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CustomCardGrid;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bookmark, BookmarkCheck, Share2 } from "lucide-react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaCode } from "react-icons/fa";

const CustomCard = () => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // to manage hover manually
  const [isButtonVisible, setIsButtonVisible] = useState(false); // to manage button visibility

  return (
    <div
      className="flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      
    >
      <div className="lg:w-98 h-98 w-98 lg:h-98 bg-[#212121] overflow-hidden rounded-xl flex justify-center items-center p-4 shadow-lg relative">
        <div 
        onMouseEnter={() => setIsButtonVisible(true)}
        onMouseLeave={() => setIsButtonVisible(false)}
        className="w-[190px] h-[254px] rounded-[20px] bg-[#f5f5f5] p-6 border-2 border-[#c3c6ce] relative overflow-visible transition duration-500 ease-out hover:border-[#008bf8] hover:shadow-[0_4px_18px_rgba(0,0,0,0.25)]">
          {/* Card Details */}
          <div className="text-black h-full grid place-content-center gap-2">
            <p className="text-[1.5em] font-bold">Card title</p>
            <p className="text-[#868686]">Here are the details of the card</p>
          </div>

          {/* Hover Button */}
          <button
          
            className={`absolute left-1/2 bottom-0 translate-x-[-50%] cursor-pointer transition-all duration-300 ease-out w-[60%] rounded-xl bg-[#008bf8] text-white text-base py-2 px-4 ${
              isButtonVisible ? "translate-y-[50%] opacity-100" : "translate-y-[125%] opacity-0"
            }`}
          >
            More info
          </button>
        </div>

        {/* Floating top-left buttons */}
        <div className="flex lg:w-11/12 w-9/12 border-white lg:justify-between justify-center items-center max-sm:px-1 absolute top-2 left-3">
          {/* GetCode link - show on hover */}
          <div
            className={`flex flex-row items-center gap-x-2 transition-all duration-200 ease-in-out ${
              isHovered ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            <Link to="/cart/getcode" className="flex items-center gap-x-2 text-white">
              GetCode <FaCode size={20} />
            </Link>
          </div>

          {/* Save and Share Buttons */}
          <div className="flex lg:gap-x-4 gap-x-1.5">
            <button
              onClick={() => setSaved(!saved)}
              className="text-white hover:scale-110 transition-transform"
              title="Save"
            >
              {saved ? <BookmarkCheck size={20} color="blue" /> : <Bookmark size={20} />}
            </button>

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

      {/* Bottom row: like, title, views */}
      <div className="flex flex-row justify-between gap-x-6 items-center mt-4 px-2">
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
        <h3 className="text-md font-semibold text-white">110 Views</h3>
      </div>
    </div>
  );
};


const CustomCardGrid = () => {
  return (
    <div className="min-h-screen mt-[53px] p-6 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {[...Array(30)].map((_, index) => (
          <CustomCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default CustomCardGrid;

