// import React , {useState} from "react";
// import { Bookmark } from "lucide-react";

// const CustomCard = () => {
//   return (
//     <div className="flex flex-col" >
//     <div className=" w-74 h-72  bg-zinc-900 rounded-xl flex justify-between p-4 shadow-lg">
//           <div className="flex-1 flex justify-center items-center">
//               <button className="bg-gradient-to-b from-cyan-400 to-cyan-700 text-white px-6 py-2 rounded-lg shadow-md font-semibold hover:opacity-90 transition">
//                   Button
//               </button>
//           </div>
//     </div>
//         <div className="flex flex-row items-center mt-4">
//             <Like/>
//             <h3 className="text-lg font-semibold text-gray-800">Card Title</h3>
//             <p className="text-gray-600">This is a description of the card.</p>
//         </div>
//     </div>
          
//   );
// };

// const CustomCardGrid = () => {
//   return (
//     <div className="min-h-screen mt-[53px] border-2 border-blue-700 bg-zinc-100 p-6 flex justify-center items-center">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {[...Array(12)].map((_, index) => (
//           <CustomCard key={index} />
//         ))}
//       </div>
      
//     </div>
//   );
// };

// const Like = () => {
//     const [liked, SetLiked] = useState("")
//     return 
//     (
//     <div>
//         <ThumbLike
//                 Active={true} 
//                 IconWidth="32" 
//                 IconHeight="32"
//                 Image="https://example.com/custom-thumb-icon.png" 
//                 Speed={{
//                 Min: 200, // Minimum animation speed in milliseconds (optional, default: 100)
//                 Max: 600, // Maximum animation speed in milliseconds (optional, default: 400)
//                 }}
//                 Spread={70} // Control the spread of confetti particles (optional, default: 50)
//                 Count={{
//                 Min: 30, // Minimum number of confetti particles (optional, default: 20)
//                 Max: 60, // Maximum number of confetti particles (optional, default: 50)
//                 }}
//                 Fill="blue" 
//             />
//     </div>
//     );
// };

// export default CustomCardGrid;
import React, { useState } from "react";
import { Bookmark, BookmarkCheck, Share2 } from "lucide-react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaCode } from "react-icons/fa";

const CustomCard = () => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="flex flex-col ">
      <div className="lg:w-72  group h-36 w-36 lg:h-72 bg-zinc-900 overflow-hidden rounded-xl flex justify-center items-center p-4 shadow-lg relative">
        <button className="bg-gradient-to-b from-cyan-400 to-cyan-700 text-white px-6 py-2 rounded-lg shadow-md font-semibold hover:opacity-90 transition">
          Button
        </button>
       <div className="flex lg:w-11/12 w-9/12 border-white  lg:justify-between justify-center items-center max-sm:px-1 absolute top-2 left-3 ">
       <div className=" flex flex-row items-center gap-x-2 invisible group-hover:visible transition-all duration-200 ease-in-out">
            GetCode <FaCode size={20} />
        </div>

        <div className="flex lg:gap-x-4 gap-x-1.5">
          {/* Save Button */}
          <button
            onClick={() => setSaved(!saved)}
            className="text-white  hover:scale-110 transition-transform"
            title="Save"
          >
            {saved ? <BookmarkCheck size={20}/> : <Bookmark size={20}  />}
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

      <div className="flex flex-row justify-between  items-center mt-4  px-2">
        {/* Like Button */}
        <button
          onClick={() => setLiked(!liked)}
          className={`transition-all hover:scale-110 ${
            liked ? "text-blue-600" : "text-gray-500"
          }`}
          title="Like"
        >
          {liked ? <AiFillLike size={22} /> : <AiOutlineLike size={22} />}
        </button>

  
          <h3 className="text-md font-semibold text-gray-800">Card Title</h3>
          <h3 className="text-md font-semibold text-gray-800"> 110 Views</h3>
        
      </div>
    </div>
  );
};

const CustomCardGrid = () => {
  return (
    <div className="min-h-screen mt-[53px] border-2 border-blue-700 bg-zinc-100 p-6 flex justify-center items-center">
      <div className="grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(30)].map((_, index) => (
          <CustomCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default CustomCardGrid;
