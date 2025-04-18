import React from 'react';
import { AiFillLike } from "react-icons/ai";
import { BiSolidDownload } from "react-icons/bi";
import { RiShareFill } from "react-icons/ri";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";

const demo = [
  {
    photo: "",
    Name: "",
    description: "",
    icons: [AiFillLike, AiFillLike, BiSolidDownload, RiShareFill]
  },
  {
    photo: "",
    Name: "",
    description: "",
    icons: [AiFillLike, AiFillLike, BiSolidDownload, RiShareFill]
  },
  {
    photo: "",
    Name: "",
    description: "",
    icons: [AiFillLike, AiFillLike, BiSolidDownload, RiShareFill]
  }
];

const Carthome = () => {
  return (
    <div className="my-10 px-5 sm:px-10 bg-gradient-to-br from-black via-purple-950 to-purple-900 text-white py-10 rounded-xl">
      {/* Title Section */}
      <div className="flex flex-col items-start gap-y-3 mb-10">
        <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center">
          <RiCheckboxMultipleBlankFill size={65} className="text-white" />
        </div>
        <h1 className="text-3xl font-semibold tracking-wide text-purple-300">
          Custom Cart & Responsive and Easy to Use
        </h1>
        <p className="max-w-xl text-justify text-purple-200">
          We specialize in crafting custom buttons with stunning colors and unique designs to enhance your website's aesthetics. Our creations blend functionality with eye-catching visuals, ensuring seamless user experiences. Elevate your brand with beautifully designed UI elements tailored to your needs.
        </p>
      </div>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {demo.map((demos, index) => (
          <div
            key={index}
            className={`rounded-md transition-all duration-500 shadow-md ${
              index === 2
                ? "border border-s-0 border-b-0 border-r-0 border-yellow-50 bg-gradient-to-t from-gray-800 to-black p-4 cursor-pointer"
                : index === 1
                ? "border border-purple-800 bg-purple-950 p-5"
                : "bg-purple-900 p-4"
            }`}
          >
            {/* For index === 2: Image on top and text appears on hover */}
            {index === 2 ? (
              <div className="group relative">
                {/* Image Section */}
                <div className="w-full h-[240px] rounded-md overflow-hidden mb-4  transition-all duration-700 ease-in-out">
                  <img
                    src="https://img.freepik.com/free-photo/green-iguana-closeup-wood-animal-closeup-reptile-closeup_488145-2581.jpg"
                    alt="Card"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Text Section */}
                <div className="group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out">
                  <h1 className="text-lg font-semibold text-purple-200">Title of Year’s</h1>
                  <p className="text-purple-300 text-sm mt-1 mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam mollitia maiores hic reiciendis quas.
                  </p>
                </div>

                {/* Icons */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-x-3 text-xl text-purple-400">
                    <AiFillLike className="hover:text-yellow-400 cursor-pointer" />
                    <BiSolidDownload className="hover:text-yellow-400 cursor-pointer" />
                    <RiShareFill className="hover:text-yellow-400 cursor-pointer" />
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* Normal Card */}
                <div className="w-full h-[240px] rounded-md overflow-hidden mb-4">
                  <img
                    src="https://img.freepik.com/free-photo/green-iguana-closeup-wood-animal-closeup-reptile-closeup_488145-2581.jpg"
                    alt="Card"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
                  />
                </div>

                <h1 className="text-lg font-semibold text-purple-200">Title of Year’s</h1>
                <p className="text-purple-300 text-sm mt-1 mb-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam mollitia maiores hic reiciendis quas.
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex gap-x-3 text-xl text-purple-400">
                    <AiFillLike className="hover:text-yellow-400 cursor-pointer" />
                    <BiSolidDownload className="hover:text-yellow-400 cursor-pointer" />
                    <RiShareFill className="hover:text-yellow-400 cursor-pointer" />
                  </div>
                  {index === 0 && (
                    <button
                      type="button"
                      className="bg-red-500 px-3 py-1 rounded-sm text-sm hover:opacity-85 transition"
                    >
                      View History
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carthome;
