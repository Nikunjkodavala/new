// import React, { useState } from "react";
// import { Outlet } from "react-router-dom";

// const Sidebar = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const navItems = [
//         { name: "Navbars", href: "#" },
//         { name: "Buttons", href: "#" },
//         { name: "Loader", href: "#" },
//         { name: "Forms", href: "#" },
//         { name: "Carts", href: "#" },
//         { name: "Footers", href: "#" },
//         { name: "Timeline", href: "#" },
//         { name: "Design Text Color", href: "#" },
//         { name: "Review Page", href: "#" },
//         { name: "Page Not Found - 404", href: "#" },
//         { name: "Internship Certificate", href: "#" },
//         { name: "Project", href: "#" },
//         { name: "Backend Node JS Code", href: "#" },
//     ];

//     return (
//         <div className="flex mt-[60px]">
//             {/* Sidebar */}
//             <div
//                 className={`${
//                     isSidebarOpen ? "block" : "hidden"
//                 } md:block flex flex-col  border-2 border-red-500 h-screen bg-gray-800 text-white w-64 md:w-72`}
//             >
//                 <div className="p-4 text-lg font-bold border-b border-gray-700">
//                     Sidebar
//                 </div>
//                 <nav className="flex-1 p-4">
//                     <ul className="space-y-4">
//                         {navItems.map((item, index) => (
//                             <li key={index}>
//                                 <button
//                                     onClick={() => alert(`Navigating to ${item.name}`)}
//                                     className="block w-full text-left p-2 rounded hover:bg-gray-700 transition"
//                                 >
//                                     {item.name}
//                                 </button>
//                             </li>
//                         ))}
//                     </ul>
//                 </nav>
//             </div>

//             {/* Mobile Menu Toggle */}
//             <button
//                 className="md:hidden fixed top-4 left-4 bg-gray-800 text-white p-3 rounded-md"
//                 onClick={() => setIsSidebarOpen(isSidebarOpen)}
//             >
//                 {isSidebarOpen ? "Close Menu" : "Open Menu"}
//             </button>

//             {/* Main Content */}
//             <div className="w-full">
//                 <Outlet />
//             </div>
//         </div>
//     );
// };

// export default Sidebar;


import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: "Navbars", href: "#" },
        { name: "Buttons", href: "/cart/" },
        { name: "Loader", href: "#" },
        { name: "Forms", href: "/cart/side" },
        { name: "Carts", href: "#" },
        { name: "Footers", href: "#" },
        { name: "Timeline", href: "#" },
        { name: "Design Text Color", href: "#" },
        { name: "Review Page", href: "#" },
        { name: "Page Not Found - 404", href: "#" },
        { name: "Internship Certificate", href: "#" },
        { name: "Project", href: "#" },
        { name: "Backend Node JS Code", href: "#" },
    ];

    return (
        <div className="flex max-sm:mt-[60px] bg-gray-500">
            <div className="relative p-[2px] rounded-xl border-purple-700 border-2">
    <div className="bg-gray-800 rounded-xl p-5 text-white">
         {/* Sidebar */}
         <div>
            <div
                className={`${
                    isSidebarOpen ? "block" : ""
                } md:block flex flex-col  h-full bg-gray-800 text-white w-64 md:w-72`}
            >
                
                <div className="p-4 text-lg font-bold border-b border-gray-700">
                    Sidebar
                </div>
                <nav className="flex-1 p-4 h-[80vh] overflow-y-scroll">
                    <ul className="space-y-4">
                        {navItems.map((item) => (
                            <li key={item.name}> {/* Use item.name as the unique key */}
                                <Link to={item.href}>
                                <button
                                    className="block w-full text-left p-2 rounded hover:bg-gray-700 transition"
                                >
                                    {item.name}
                                </button>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden fixed top-4 left-4 bg-gray-800 text-white p-3 rounded-md"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)} // Correct the toggle function
            >
                {isSidebarOpen ? "Close Menu" : "Open Menu"}
            </button>

           
    </div>
    
   </div>
    {/* Main Content */}
    <div className="w-full">
                <Outlet />
            </div>

        </div>
    );
};

export default Sidebar;
