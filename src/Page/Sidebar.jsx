
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
//     <div className="flex flex-col md:flex-row">
//       {/* ✅ Mobile horizontal tabs */}
//       <div className="md:hidden flex overflow-x-auto max-sm:mt-[65px] space-x-2 px-2 py-3 bg-gray-900 border-b border-purple-700 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-800">
//         {navItems.map((item) => (
//           <Link
//             key={item.name}
//             to={item.href}
//             className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
//               location.pathname === item.href
//                 ? "bg-purple-600 text-white"
//                 : "bg-gray-800 text-white hover:bg-gray-700"
//             }`}
//           >
//             {item.name}
//           </Link>
//         ))}
//       </div>

//       {/* ✅ Desktop sidebar */}
//       <div className="hidden md:block w-[250px] bg-gray-900 mt-[73px] text-white border-r-2 border-purple-700 min-h-screen sticky top-[72px] self-start">
//         <div className="p-4 border-b border-purple-500 font-bold text-lg">
//           Sidebar
//         </div>

//         <div className="p-4 space-y-2">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.href}
//               className={`block p-2 rounded-lg transition-all duration-200 ${
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

//       {/* ✅ Main Content */}
//       <div className=" custom-background text-white p-4 min-h-screen border-4 border-amber-600">
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
    { name: "Buttons", href: "/cart/button" },
    { name: "Checkboxes", href: "/cart/checkbox" },
    { name: "Toggel", href: "/cart/toggel" },
    { name: "Loaders", href: "/cart/loader" },
    { name: "Card", href: "/cart/card" },
    { name: "Forms", href: "/cart/form" },
    { name: "Inputs", href: "/cart/input" },
    { name: "Radio Buttons", href: "/cart/radio" },
    { name: "Tooltips Button", href: "/cart/tooltip" },
    { name: "404 Pages", href: "/cart/tooltip" },
    { name: "Project Categories", href: "/cart/ProjectCategories" },
    { name: "Projects", href: "/Projects" },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* ✅ Mobile horizontal tabs */}
      <div className="md:hidden flex overflow-x-auto  space-x-2 px-2 py-3 bg-gray-900 border-b border-purple-700 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-800">
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
      <div className="hidden md:block w-[250px] bg-gray-900  text-white border-r-2 border-purple-700 min-h-screen sticky top-[72px] self-start">
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
      <div className="flex-1 custom-background px-1   text-white p-4 min-h-screen ">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
