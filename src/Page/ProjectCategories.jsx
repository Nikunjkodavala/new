import React from "react";
import { Link } from "react-router-dom";

const ProjectCategories = () => {
  const categories = [
    { name: "Hotel Booking", color: "bg-red-400", icon: "🏨" },
    { name: "Bike Rental", color: "bg-pink-300", icon: "🚴" },
    { name: "Weather Web App", color: "bg-green-300", icon: "⛅" },
    { name: "Course Selling", color: "bg-yellow-300", icon: "📚" },
    { name: "Job Portal", color: "bg-blue-400", icon: "💼" },
    { name: "E-commerce", color: "bg-orange-400", icon: "🛒" },
    { name: "Portfolio Site", color: "bg-teal-300", icon: "💻" },
    { name: "Food Delivery", color: "bg-purple-300", icon: "🍔" },
  ];

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-10 py-10 min-h-screen bg-black text-white">
      {/* Header Section */}
      <h1 className="text-center text-3xl sm:text-4xl font-bold text-purple-400 mb-8">
        Project Categories
      </h1>

      {/* Responsive Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col w-full max-w-xs bg-[#0F0E17] border border-purple-800 rounded-xl shadow-md hover:shadow-purple-700/40 transition duration-300"
          >
            {/* Card Image */}
            <div className="h-40 rounded-t-xl overflow-hidden">
              <img
                src="https://th.bing.com/th/id/OIP.IaEUC6dZJOoKeM9QMG_9ZgHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5 text-center">
              <div className="text-3xl">{cat.icon}</div>
              <h3 className="mt-2 text-lg font-semibold text-purple-300">{cat.name}</h3>
            </div>

            {/* Button */}
            <div className="text-center pb-5">
              <Link to="/Projects">
                <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm cursor-pointer sm:text-base px-5 py-2 rounded-lg transition font-semibold">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCategories;
