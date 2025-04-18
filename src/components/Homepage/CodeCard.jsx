import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IoIosArrowRoundForward } from "react-icons/io";
import Homenav from "../../assets/Navabr_Image/HomepageNav.png";
import { Link } from "react-router-dom";

const Custom = () => {
    const codeString = `import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

const Ecomm = () => {
  const navItems = ["Home", "Products", "New In", "Contact Us", "About Us"];

  return (
    <div className="w-full font-serif bg-purple-900 sticky top-0 text-white py-5 shadow-lg z-[999]">
      <nav className="w-11/12 flex mx-auto items-center justify-between">
        {/* Logo Section */}
        <div className="text-2xl font-bold">Logo</div>

        {/* Navigation Links */}
        <ul className="flex gap-x-6 text-lg tracking-wide">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              <p className="px-5 py-1 bg-white rounded-md transition-all duration-300 ease-in-out 
                  hover:bg-purple-950 hover:text-white text-black cursor-pointer">
                {item}
              </p>
            </li>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className="flex gap-x-5 text-lg">
          <span className="cursor-pointer transition-all duration-300 hover:scale-110">
            <IoLogoGithub size={25} />
          </span>
          <span className="cursor-pointer transition-all duration-300 hover:scale-110">
            <FaXTwitter size={25} />
          </span>
          <span className="cursor-pointer transition-all duration-300 hover:scale-110">
            <FaInstagram size={25} />
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Ecomm;`;

    return (
        <div className="w-full px-4 py-10 bg-gradient-to-br from-black via-purple-950 to-purple-800 text-white">
            {/* Code Editor Dual Panels */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-[80px]">
                {[1, 2].map((_, idx) => (
                    <div key={idx} className="w-full lg:w-[650px]">
                        <div className="w-full bg-gradient-to-br from-purple-900 to-black text-white rounded-lg shadow-lg">
                            {/* Title Bar */}
                            <div className="flex justify-between items-center px-4 py-2 bg-purple-800 rounded-t-lg">
                                <span className="text-sm text-gray-300">Code Editor</span>
                            </div>

                            {/* Code Block */}
                            <div className="overflow-y-auto max-h-[700px] scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-black p-3">
                                <SyntaxHighlighter
                                    language="jsx"
                                    style={dracula}
                                    showLineNumbers
                                    customStyle={{
                                        borderRadius: "5px",
                                        padding: "15px",
                                        fontSize: "14px",
                                        background: "transparent"
                                    }}
                                >
                                    {codeString}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Output Preview */}
            <div className="flex flex-col gap-y-5 w-full lg:w-[900px] mt-16 bg-purple-900 border border-purple-400 py-10 px-5 lg:px-10 rounded-lg shadow-xl mx-auto">
                <h1 className="text-xl text-purple-100 tracking-wide font-semibold font-serif">
                    Output 
                </h1>
                <img
                    src={Homenav}
                    alt="Component Output"
                    className="rounded-lg shadow-md border border-purple-700"
                />
            </div>

            {/* Buttons */}
            <div className="flex  lg:flex-row gap-y-5 lg:gap-x-5 mx-auto mt-10 w-full lg:w-auto items-center justify-center">
                <Link to="/cart">
                <button className="text-xl tracking-wide flex items-center underline gap-x-1.5 underline-offset-8 cursor-pointer text-purple-200 hover:text-white transition-all">
                    Try another component <IoIosArrowRoundForward size={30} className="mt-0.5" />
                </button>
            
                </Link>
            </div>
        </div>
    );
};

export default Custom;
