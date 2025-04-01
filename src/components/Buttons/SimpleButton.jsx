import React from 'react';
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";

const code = [
  {}, {}, {}, {}
];

const SimpleButton = () => {
  return (
    <div className='p-5 w-full h-full bg-gray-500'>
      {/* Grid Layout: 1 column on mobile, 2 on tablets, and 3 on large screens */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
        {
          code.map((item, index) => (
            <section key={index} className='flex flex-col'>
              {/* Card with button */}
              <div className='border flex flex-col items-center justify-center bg-gray-800 rounded-xl overflow-hidden p-4'>
                <button className='bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 w-full'>
                  Click Me
                </button>
              </div>

              {/* Icons and Text */}
              <div className='flex justify-between p-3 items-center'>
                <span className='flex items-center gap-x-3 cursor-pointer'>
                  <FaCode size={29} /> Get Code
                </span>
                <div className='flex gap-x-3'>
                  <span className='flex items-center gap-x-1.5 text-xl hover:text-gray-500 cursor-pointer'>
                    <AiOutlineLike size={29} /> 10
                  </span>
                  <span className='flex items-center gap-x-1.5 text-xl hover:text-gray-500 cursor-pointer'>
                    <AiOutlineComment size={29} /> 50
                  </span>
                </div>
              </div>
            </section>
          ))
        }
      </div>
    </div>
  );
};

export default SimpleButton;
