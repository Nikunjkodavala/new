// import React from "react";
// import { Link } from "react-router-dom";

// const ProjectCategories = () => {
//   const categories = [
//     { name: "Hotel Booking", color: "bg-red-400", icon: "📷" },
//     { name: "Bike rental", color: "bg-pink-300", icon: "💄" },
//     { name: "Wether web app", color: "bg-green-300", icon: "🏡" },
//     { name: "courese selling", color: "bg-yellow-300", icon: "👜" },
//     { name: "job portal", color: "bg-blue-400", icon: "👗" },
//     { name: "Men's Clothing", color: "bg-orange-400", icon: "👔" },
   
//   ];


//   return (
//     <div className=" mx-auto p-6 min-h-screen bg-gray-200">
//       {/* Header Section */}
//       <h1 className="flex flex-col justify-center items-center text-6xl font-semibold mt-2">Projects</h1>
//       <div className=" p-4 rounded-lg flex items-center justify-between">
//       <img src="https://th.bing.com/th/id/OIP.IaEUC6dZJOoKeM9QMG_9ZgHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className=" rounded-2xl h-[380px] w-[1400px]"/>
//       </div>
     

//       {/* Categories */}
      
//       <div className="grid grid-cols-3 md:grid-cols-4 gap-14 mt-12">
//         {categories.map((cat, index) => (
      
//             <><div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
//             <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
//             <img src="https://th.bing.com/th/id/OIP.IaEUC6dZJOoKeM9QMG_9ZgHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
//             </div>
//             <div class="p-6">
//               <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
//                 {cat.icon}
//               </h5>
//               <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
//                 <span>{cat.name}</span>
//               </p>
//             </div>
//             <div class="p-6 pt-0">
//               <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
//                 <Link to="/Projects">Read More</Link>
//               </button>
//             </div>
//           </div></>
          
//         ))}

//       </div>
      

//     </div>
//   );
// };

// export default ProjectCategories;

import React from "react";
import { Link } from "react-router-dom";

const ProjectCategories = () => {
  const categories = [
    { name: "Hotel Booking", color: "bg-red-400", icon: "📷" },
    { name: "Bike Rental", color: "bg-pink-300", icon: "💄" },
    { name: "Weather Web App", color: "bg-green-300", icon: "🏡" },
    { name: "Course Selling", color: "bg-yellow-300", icon: "👜" },
    { name: "Job Portal", color: "bg-blue-400", icon: "👗" },
    { name: "Men's Clothing", color: "bg-orange-400", icon: "👔" },
  ];

  return (
    <div className="mx-auto p-6 min-h-screen bg-gray-200">
      {/* Header Section */}
      <h1 className="flex flex-col justify-center items-center text-4xl sm:text-5xl md:text-6xl font-semibold mt-2">Projects</h1>
      <div className="p-4 rounded-lg flex items-center justify-center">
        <img 
          src="https://th.bing.com/th/id/OIP.IaEUC6dZJOoKeM9QMG_9ZgHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
          alt="Project Banner" 
          className="rounded-2xl w-full max-w-6xl h-auto object-cover"
        />
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-12 justify-items-center">
        {categories.map((cat, index) => (
          <div key={index} className="relative flex w-72 sm:w-80 flex-col rounded-xl bg-white shadow-md">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
              <img 
                src="https://th.bing.com/th/id/OIP.IaEUC6dZJOoKeM9QMG_9ZgHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
                alt="Category" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h5 className="mb-2 text-xl font-semibold text-blue-gray-900">{cat.icon}</h5>
              <p className="text-base font-light text-gray-700">{cat.name}</p>
            </div>
            <div className="p-6 pt-0 text-center ">
            <a href="/Projects">
              <button 
                className="rounded-lg cursor-pointer border-2 border-red-500 bg-blue-500 py-3 px-6 text-white text-xs font-bold uppercase shadow-md transition-all hover:shadow-lg hover:bg-blue-600 focus:outline-none"
              >
                Read More
              </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCategories;

