// import React, { useState } from "react";

// const CustomCard = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     alert(`Logging in with ${email} / ${password}`);
//   };

//   return (
//     <div className="flex flex-col">
    //   <div className="lg:w-98 h-98 w-98 lg:h-98 bg-[#212121] overflow-hidden rounded-xl flex justify-center items-center p-4 shadow-lg relative">
//         <div className="w-[280px] h-auto rounded-[20px] bg-[#f5f5f5] p-6 border-2 border-[#c3c6ce] transition duration-500 ease-out hover:border-[#008bf8] hover:shadow-[0_4px_18px_rgba(0,0,0,0.25)]">
//           <form onSubmit={handleLogin} className="flex flex-col gap-4">
//             <h2 className="text-2xl font-bold text-center text-black">Login</h2>

//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="px-4 py-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="px-4 py-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <button
//               type="submit"
//               className="bg-[#008bf8] text-white py-2 px-4 rounded-lg hover:opacity-90 transition"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// const CustomCardGrid = () => {
//     return (
//       <div className="min-h-screen mt-[53px] p-6 flex justify-center items-center">
//         <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
//           {[...Array(6)].map((_, index) => (
//             <CustomCard key={index} />
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default CustomCardGrid;
  

// import React, { useState } from "react";

// const CustomCard = () => {
//     return (
//       <div className="lg:w-150 h-200 w-98 lg:h-130 bg-[#212121] overflow-hidden rounded-xl flex justify-center items-center p-4 shadow-lg relative">
//         <div className="max-w-[350px] bg-gradient-to-t from-white to-[#f4f7fb] rounded-[40px] p-[25px] px-[35px] border-[5px] border-white shadow-[0_30px_30px_-20px_rgba(133,189,215,0.88)]">
//           <div className="text-center font-extrabold text-[30px] text-[#1089d3]">Sign In</div>
//           <form className="mt-5">
//             <input
//               required
//               type="email"
//               name="email"
//               placeholder="E-mail"
//               className="w-full bg-white border-none px-5 py-[15px] rounded-[20px] mt-4 shadow-[0_10px_10px_-5px_#cff0ff] focus:outline-none focus:border-x-2 focus:border-[#12B1D1] placeholder:text-[#aaaaaa]"
//             />
//             <input
//               required
//               type="password"
//               name="password"
//               placeholder="Password"
//               className="w-full bg-white border-none px-5 py-[15px] rounded-[20px] mt-4 shadow-[0_10px_10px_-5px_#cff0ff] focus:outline-none focus:border-x-2 focus:border-[#12B1D1] placeholder:text-[#aaaaaa]"
//             />
//             <span className="block mt-2 ml-2 text-[11px] text-[#0099ff]">
//               <a href="#">Forgot Password ?</a>
//             </span>
//             <input
//               type="submit"
//               value="Sign In"
//               className="block w-full font-bold text-white bg-gradient-to-r from-[#1089d3] to-[#12b1d1] py-[15px] mt-6 rounded-[20px] border-none shadow-[0_20px_10px_-15px_rgba(133,189,215,0.88)] transition-transform duration-200 hover:scale-105 hover:shadow-[0_23px_10px_-20px_rgba(133,189,215,0.88)] active:scale-95 active:shadow-[0_15px_10px_-10px_rgba(133,189,215,0.88)]"
//             />
//           </form>
    
//           <div className="mt-6">
//             <span className="block text-center text-[10px] text-[#aaaaaa]">Or Sign in with</span>
//             <div className="flex justify-center gap-4 mt-2">
//               {/* Google Button */}
//               <button className="bg-gradient-to-r from-black to-gray-600 border-[5px] border-white p-1.5 rounded-full w-[40px] aspect-square grid place-content-center shadow-[0_12px_10px_-8px_rgba(133,189,215,0.88)] hover:scale-110 active:scale-90 transition-transform duration-200">
//                 <svg
//                   className="fill-white w-4 h-4"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 488 512"
//                 >
//                   <path d="M488 261.8C488 403.3..." />
//                 </svg>
//               </button>
//               {/* Apple Button */}
//               <button className="bg-gradient-to-r from-black to-gray-600 border-[5px] border-white p-1.5 rounded-full w-[40px] aspect-square grid place-content-center shadow-[0_12px_10px_-8px_rgba(133,189,215,0.88)] hover:scale-110 active:scale-90 transition-transform duration-200">
//                 <svg
//                   className="fill-white w-4 h-4"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 384 512"
//                 >
//                   <path d="M318.7 268.7..." />
//                 </svg>
//               </button>
//               {/* Twitter Button */}
//               <button className="bg-gradient-to-r from-black to-gray-600 border-[5px] border-white p-1.5 rounded-full w-[40px] aspect-square grid place-content-center shadow-[0_12px_10px_-8px_rgba(133,189,215,0.88)] hover:scale-110 active:scale-90 transition-transform duration-200">
//                 <svg
//                   className="fill-white w-4 h-4"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 512 512"
//                 >
//                   <path d="M389.2 48..." />
//                 </svg>
//               </button>
//             </div>
//           </div>
    
//           <span className="block text-center mt-4 text-[#0099ff] text-[9px]">
//             <a href="#">Learn user licence agreement</a>
//           </span>
//         </div>
//         </div>
//       );
//     };


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import { Bookmark, BookmarkCheck, Share2 } from "lucide-react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

const CustomCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div>
        <div
      className="lg:w-150 h-200 w-98 lg:h-130 bg-[#212121] border-2 border-purple-400 overflow-hidden rounded-xl flex justify-center items-center p-4 shadow-lg relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating top-left buttons */}
      <div className="flex w-full px-4 justify-between items-center absolute top-3 left-0 right-0 z-10">
        {/* GetCode link */}
        <div
          className={`flex flex-row items-center gap-x-2 transition-all duration-200 ease-in-out ${
            isHovered ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <Link
            to="/cart/getcode"
            className="flex items-center gap-x-2 text-white text-sm hover:text-blue-300"
          >
            Get Code <FaCode size={16} />
          </Link>
        </div>

        {/* Save and Share */}
        <div className="flex gap-x-3">
          <button
            onClick={() => setSaved(!saved)}
            className="text-white hover:scale-110 transition-transform"
            title="Save"
          >
            {saved ? <BookmarkCheck size={18} color="blue" /> : <Bookmark size={18} />}
          </button>

          <button
            onClick={() => alert("Shared!")}
            className="text-white hover:scale-110 transition-transform"
            title="Share"
          >
            <Share2 size={18} />
          </button>
        </div>
      </div>

      {/* Actual Card */}
      <div className="max-w-[350px] bg-gradient-to-t from-white to-[#f4f7fb] rounded-[40px] p-[25px] px-[35px] border-[5px] border-white shadow-[0_30px_30px_-20px_rgba(133,189,215,0.88)]">
        <div className="text-center font-extrabold text-[30px] text-[#1089d3]">Sign In</div>
        <form className="mt-5">
          <input
            required
            type="email"
            name="email"
            placeholder="E-mail"
            className="w-full bg-white border-none px-5 py-[15px] rounded-[20px] mt-4 shadow-[0_10px_10px_-5px_#cff0ff] focus:outline-none focus:border-x-2 focus:border-[#12B1D1] placeholder:text-[#aaaaaa]"
          />
          <input
            required
            type="password"
            name="password"
            placeholder="Password"
            className="w-full bg-white border-none px-5 py-[15px] rounded-[20px] mt-4 shadow-[0_10px_10px_-5px_#cff0ff] focus:outline-none focus:border-x-2 focus:border-[#12B1D1] placeholder:text-[#aaaaaa]"
          />
          <span className="block mt-2 ml-2 text-[11px] text-[#0099ff]">
            <a href="#">Forgot Password ?</a>
          </span>
          <input
            type="submit"
            value="Sign In"
            className="block w-full font-bold text-white bg-gradient-to-r from-[#1089d3] to-[#12b1d1] py-[15px] mt-6 rounded-[20px] border-none shadow-[0_20px_10px_-15px_rgba(133,189,215,0.88)] transition-transform duration-200 hover:scale-105 active:scale-95"
          />
        </form>

        <div className="mt-6">
          <span className="block text-center text-[10px] text-[#aaaaaa]">Or Sign in with</span>
          <div className="flex justify-center gap-4 mt-2">
            {/* Google */}
            <button className="bg-gradient-to-r from-black to-gray-600 border-[5px] border-white p-1.5 rounded-full w-[40px] aspect-square grid place-content-center shadow-[0_12px_10px_-8px_rgba(133,189,215,0.88)] hover:scale-110 active:scale-90 transition-transform duration-200">
              <svg className="fill-white w-4 h-4" viewBox="0 0 488 512"><path d="M488 261.8..." /></svg>
            </button>
            {/* Apple */}
            <button className="bg-gradient-to-r from-black to-gray-600 border-[5px] border-white p-1.5 rounded-full w-[40px] aspect-square grid place-content-center shadow-[0_12px_10px_-8px_rgba(133,189,215,0.88)] hover:scale-110 active:scale-90 transition-transform duration-200">
              <svg className="fill-white w-4 h-4" viewBox="0 0 384 512"><path d="M318.7 268.7..." /></svg>
            </button>
            {/* Twitter */}
            <button className="bg-gradient-to-r from-black to-gray-600 border-[5px] border-white p-1.5 rounded-full w-[40px] aspect-square grid place-content-center shadow-[0_12px_10px_-8px_rgba(133,189,215,0.88)] hover:scale-110 active:scale-90 transition-transform duration-200">
              <svg className="fill-white w-4 h-4" viewBox="0 0 512 512"><path d="M389.2 48..." /></svg>
            </button>
          </div>
        </div>

        <span className="block text-center mt-4 text-[#0099ff] text-[9px]">
          <a href="#">Learn user licence agreement</a>
        </span>
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
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {[...Array(30)].map((_, index) => (
            <CustomCard key={index} />
          ))}
        </div>
      </div>
    );
  };
  
  export default CustomCardGrid;
  