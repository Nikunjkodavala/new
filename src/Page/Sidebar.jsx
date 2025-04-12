// import React from "react";
// import { Link, Outlet, useLocation } from "react-router-dom";

// const Sidebar = () => {
//   const location = useLocation();

//   const navItems = [
//     { name: "Navbars", href: "/" },
//     { name: "Buttons", href: "/cart/button" },
//     { name: "Forms", href: "/cart/side" },
//     { name: "Get Code", href: "/cart/getcode" },
//     { name: "Project Categories", href: "/cart/ProjectCategories" },
//     { name: "Projects", href: "/Projects" },
    
//   ];

//   return (
//     <div className="flex ">
//       {/* Sidebar container that flows with the page */}
//       <div
//         className="w-[250px] bg-gray-900 mt-[73px] text-white border-2  border-purple-700 min-h-screen sticky top-[72px] self-start"
//       >
//         <div className="p-4 border-b border-purple-500 font-bold text-lg">
//           Sidebar
//         </div>

//         {/* Sidebar content — will grow with page */}
//         <div className="p-4 space-y-2">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.href}
//               className={`block p-2 rounded-lg transition ${
//                 location.pathname === item.href
//                   ? "bg-purple-600 text-white"
//                   : "hover:bg-gray-700"
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}

//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 bg-gray-800 text-white p-4 min-h-screen">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Sidebar;




// import React from "react";
// import { Link, Outlet, useLocation } from "react-router-dom";

// const Sidebar = () => {
//   const location = useLocation();

//   const navItems = [
//     { name: "Navbars", href: "/" },
//     { name: "Buttons", href: "/cart/button" },
//     { name: "Forms", href: "/cart/side" },
//     { name: "Get Code", href: "/cart/getcode" },
//     { name: "Project Categories", href: "/cart/ProjectCategories" },
//     { name: "Projects", href: "/Projects" },
//   ];

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gray-800">
//       {/* Sidebar */}
//       <div className="md:w-[250px] md:min-h-screen sticky md:mt-[74px] top-[72px] bg-gray-900 border-purple-700 border-t md:border-t-0 md:border-r text-white z-20">
//         {/* Mobile: horizontal scroll bar */}
//         <div className="md:hidden flex overflow-x-auto space-x-2 -mt-[8px] p-2 border-b border-purple-700 bg-gray-900 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-700">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.href}
//               className={`whitespace-nowrap px-4 py-2 rounded-full text-sm ${
//                 location.pathname === item.href
//                   ? "bg-purple-600 text-white"
//                   : "bg-gray-800 hover:bg-gray-700"
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>

//         {/* Desktop: vertical sidebar */}
//         <div className="hidden md:block p-4 border-b border-purple-500 font-bold text-lg">
//           Sidebar
//         </div>

//         <div className="hidden md:block p-4 space-y-2">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.href}
//               className={`block p-2 rounded-lg transition ${
//                 location.pathname === item.href
//                   ? "bg-purple-600 text-white"
//                   : "hover:bg-gray-700"
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-4 text-white mt-2">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Navbars", href: "/" },
    { name: "Buttons", href: "/cart/button" },
    { name: "Forms", href: "/cart/side" },
    { name: "Get Code", href: "/cart/getcode" },
    { name: "Project Categories", href: "/cart/ProjectCategories" },
    { name: "Projects", href: "/Projects" },
  ];

  return (
    <div className="flex flex-col md:flex-row">
      {/* ✅ Mobile horizontal tabs */}
      <div className="md:hidden flex overflow-x-auto max-sm:mt-[65px] space-x-2 px-2 py-3 bg-gray-900 border-b border-purple-700 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-800">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              location.pathname === item.href
                ? "bg-purple-600 text-white"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* ✅ Desktop sidebar */}
      <div className="hidden md:block w-[250px] bg-gray-900 mt-[73px] text-white border-r-2 border-purple-700 min-h-screen sticky top-[72px] self-start">
        <div className="p-4 border-b border-purple-500 font-bold text-lg">
          Sidebar
        </div>

        <div className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block p-2 rounded-lg transition-all duration-200 ${
                location.pathname === item.href
                  ? "bg-purple-600 text-white"
                  : "hover:bg-gray-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* ✅ Main Content */}
      <div className=" bg-gray-800 text-white p-4 min-h-screen border-4 border-amber-600">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;


