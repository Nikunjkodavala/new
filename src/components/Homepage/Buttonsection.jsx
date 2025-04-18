import React from 'react';
import { IoIosRadioButtonOn, IoMdArrowForward } from "react-icons/io";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CustomBtnbutton from './CustomBtnbutton';
import { Link } from 'react-router-dom';

const Buttonsection = () => {
  const reactcode = `<div className='flex gap-x-3'>
     <button type="button" className='border px-5 py-2 rounded-md'>Button A</button>
     <button type="button" className='border hover:border-blue-500 transition-all duration-200 ease-linear hover:text-blue-500 px-5 py-2 rounded-md'>Button B</button>
     <button type="button" className='border hover:border-blue-500 transition-all duration-200 ease-linear hover:bg-blue-500 px-5 py-2 rounded-md'>Button C</button>
</div>`;

  const htmlcode = `<div class="button-container">
    <button class="btn">Button A</button>
    <button class="btn btn-b">Button B</button>
    <button class="btn btn-c">Button C</button>
</div>`;

  const csscode = `.button-container {
  display: flex;
  gap: 12px;
}
.btn {
  border: 1px solid black;
  padding: 8px 20px;
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.btn-b:hover {
  border-color: blue;
  color: blue;
}
.btn-c:hover {
  border-color: blue;
  background-color: blue;
  color: white;
}`;

  return (
    <div className="my-10 px-5 sm:px-10 bg-gradient-to-br from-black via-purple-950 to-purple-900 text-white py-10 rounded-xl">
      <div className="flex flex-col lg:flex-row gap-12 justify-between items-start">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-y-4">
          <span>
            <IoIosRadioButtonOn size={55} className="text-yellow-400" />
          </span>
          <span className="text-yellow-400 tracking-wide text-3xl font-bold">
            Custom Buttons and Beautiful Color/Design
          </span>
          <p className="text-purple-100 text-base leading-relaxed max-w-3xl">
            We specialize in crafting custom buttons with stunning colors and unique designs to enhance your website's aesthetics. Our creations blend functionality with eye-catching visuals, ensuring seamless user experiences. Elevate your brand with beautifully designed UI elements tailored to your needs.
          </p>
          <button className="flex items-center gap-x-2 mt-3 text-purple-300 hover:text-yellow-300 transition">
            <Link to="/cart">
            View all Buttons <IoMdArrowForward size={20} />
            </Link>
          </button>

          {/* Button examples */}
          <div className="flex gap-x-3 my-8">
            <button type="button" className="border px-5 py-2 rounded-md text-white border-white hover:bg-purple-800 transition">Button A</button>
            <button type="button" className="border hover:border-blue-400 hover:text-blue-400 transition-all duration-200 ease-linear px-5 py-2 rounded-md">Button B</button>
            <button type="button" className="border hover:border-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-200 ease-linear px-5 py-2 rounded-md">Button C</button>
          </div>

          {/* React Code */}
          <div className="flex flex-col gap-y-3 text-start w-full">
            <h1 className="text-purple-300 font-semibold text-lg">React JS</h1>
            <SyntaxHighlighter style={dracula} wrapLongLines customStyle={{ borderRadius: "5px", padding: "20px", background: "#1e1e2e" }}>
              {reactcode}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          {/* HTML Code */}
          <div className="flex flex-col gap-y-3 text-start">
            <h1 className="text-purple-300 font-semibold text-lg">HTML</h1>
            <SyntaxHighlighter style={dracula} wrapLongLines customStyle={{ borderRadius: "5px", padding: "20px", background: "#1e1e2e" }}>
              {htmlcode}
            </SyntaxHighlighter>
          </div>

          {/* CSS Code */}
          <div className="flex flex-col gap-y-3 text-start">
            <h1 className="text-purple-300 font-semibold text-lg">CSS</h1>
            <SyntaxHighlighter style={dracula} wrapLongLines customStyle={{ borderRadius: "5px", padding: "20px", background: "#1e1e2e" }}>
              {csscode}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>

      {/* Custom Button Component */}
      <div className="mt-10">
        <CustomBtnbutton />
      </div>
    </div>
  );
};

export default Buttonsection;
