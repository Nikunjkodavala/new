import React, { useState } from "react";
import { RiHtml5Fill } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa6";
import { SiReact } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const GetCode = () => {
  const [activeTab, setActiveTab] = useState("html");
  const [html, setHtml] = useState(`
<button class="button">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text">Download Now</span>
    </span>
</button>`);
  const [css, setCss] = useState(`/* From Uiverse.io by mrhyddenn */ 
.button {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  background: none;
  color: #0f1923;
  cursor: pointer;
  position: relative;
  padding: 8px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  transition: all .15s ease;
}

.button::before,
.button::after {
  content: '';
  display: block;
  position: absolute;
  right: 0;
  left: 0;
  height: calc(50% - 5px);
  border: 1px solid #7D8082;
  transition: all .15s ease;
}

.button::before {
  top: 0;
  border-bottom-width: 0;
}

.button::after {
  bottom: 0;
  border-top-width: 0;
}

.button:active,
.button:focus {
  outline: none;
}

.button:active::before,
.button:active::after {
  right: 3px;
  left: 3px;
}

.button:active::before {
  top: 3px;
}

.button:active::after {
  bottom: 3px;
}

.button_lg {
  position: relative;
  display: block;
  padding: 10px 20px;
  color: #fff;
  background-color: #0f1923;
  overflow: hidden;
  box-shadow: inset 0px 0px 0px 1px transparent;
}

.button_lg::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  background-color: #0f1923;
}

.button_lg::after {
  content: '';
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 4px;
  height: 4px;
  background-color: #0f1923;
  transition: all .2s ease;
}

.button_sl {
  display: block;
  position: absolute;
  top: 0;
  bottom: -1px;
  left: -8px;
  width: 0;
  background-color: #ff4655;
  transform: skew(-15deg);
  transition: all .2s ease;
}

.button_text {
  position: relative;
}

.button:hover {
  color: #0f1923;
}

.button:hover .button_sl {
  width: calc(100% + 15px);
}

.button:hover .button_lg::after {
  background-color: #fff;
}
`);
  const [reactCode, setReactCode] = useState("// React code here");

  // Combine HTML and CSS for live preview
  const combinedCode = `
    <html>
      <head><style>${css}</style></head>
      <body>${html}</body>
    </html>
  `;

  // Styling for active/inactive tabs
  const getTabStyle = (tab) =>
    `px-4 py-2 text-sm font-semibold rounded-t-lg transition ${
      activeTab === tab
        ? "bg-gray-800 text-white shadow"
        : "bg-gray-600 text-gray-300 hover:bg-gray-700"
    }`;

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 lg:h-[750px]  text-white ">
      {/* Left Side: Code Editor */}
      <div className="w-full lg:w-1/2 rounded-lg bg-[#1E1E1E] border border-gray-700 shadow-md">
        {/* Tab Buttons */}
        <div className="flex space-x-2 px-4 pt-4 border-b border-gray-700">
          <button
            onClick={() => setActiveTab("html")}
            className={`${getTabStyle("html")} flex items-center gap-x-2`}
          >
            HTML <RiHtml5Fill size={24}  className="text-[#E34C26]" />
          </button>
          <button
            onClick={() => setActiveTab("css")}
            className={`${getTabStyle("css")} flex items-center gap-x-2`}
          >
            CSS <FaCss3 size={24} className=" text-[#264DE4]" />
          </button>
          <button
            onClick={() => setActiveTab("react")}
            className={`${getTabStyle("react")} flex items-center gap-x-2 sm:  flex-col`}
          >
            REACT <SiReact size={24} className="flex  text-[#61DBFB]" />  + TAILWINDCSS <RiTailwindCssFill size={24} className="flex  text-sky-400" />
          </button>
        </div>

        {/* Code Editors */}
        <div className="flex p-4 ">
          {activeTab === "html" && (
            <textarea
              value={html}
              onChange={(e) => setHtml(e.target.value)}
              className="w-full  lg:h-125 max-sm:h-125 bg-black text-green-400 font-mono p-3 rounded focus:outline-none"
            />
          )}
          {activeTab === "css" && (
            <textarea
              value={css}
              onChange={(e) => setCss(e.target.value)}
              className="w-full h-[500px] bg-black text-pink-400 font-mono p-3 rounded focus:outline-none"
            />
          )}
          {activeTab === "react" && (
            <textarea
              value={reactCode}
              onChange={(e) => setReactCode(e.target.value)}
              className="w-full h-125 bg-black text-blue-400 font-mono p-3 rounded focus:outline-none"
            />
          )}
        </div>
      </div>

      {/* Right Side: Output */}
      <div className="w-full lg:w-1/2 rounded-lg bg-[#212121] border border-gray-700 p-4 shadow-md">
        
        <div className="flex mt-[220px] lg:ml-[180px] max-sm: ml-[80px] ">
          <iframe
            srcDoc={combinedCode}
            title="Live Preview"
            sandbox="allow-scripts"
            className="w-full lg:h-[500px] max-sm: h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default GetCode;
