// import React from 'react'
// import { IoLogoGithub } from "react-icons/io";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa6";
// import { Link } from 'react-router-dom';

// const Ecomm = () => {
//     const navpro = ["Home", "Products", "New In", "Contact Us", "About Us"]
//     return (
//         <div className='w-full font-serif  bg-purple-900 z-[999]  sticky top-0 text-white py-5 overflow-hidden '>
//             <nav className=' w-11/12 flex mx-auto items-center  justify-between  '>
//                 <div className=' w-1/10'>
//                     <Link to="/">
//                     Logo
//                     </Link>
//                 </div>
//                 <div>
//                     <ul className=' flex gap-x-5 text-xl tracking-wide '>
//                         {
//                             navpro.map((item, index) => (
//                                 <li key={index} className=' relative group'>
//                                     <p className=' px-5 py-0.5  bg-white rounded-sm    transition-all duration-200 ease-in-out hover:bg-purple-950 hover:text-white text-black border-gray-500 cursor-pointer'>{item}</p>
//                                     <div className=''>

//                                     </div>
//                                 </li>
//                             ))
//                         }
//                     </ul>
//                 </div>
//                 <div className='relative flex gap-x-5 text-lg tracking-wide'>
//                      <span className=' cursor-pointer'><IoLogoGithub size={25} color=''/></span>
//                      <span className=' cursor-pointer'><FaXTwitter size={25} color=''/></span>
//                      <span className=' cursor-pointer'><FaInstagram size={25} color=''/></span>
//                 </div>
//             </nav>
//         </div>
//     )
// }

// export default Ecomm

import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Ecomm = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className=" max-sm:fixed sticky top-0 w-full border border-b-indigo-500 z-[99] bg-gray-800 text-purple-500"
    >
      <div className="w-11/12 mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <a href="/"><h1 className="text-2xl font-bold">LOGO</h1></a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-x-8  font-medium">
          {["Home", "About Us", "Our Verticals", "Career", "Contact Us"].map(
            (item) => (
              <li key={item} className="cursor-pointer hover:text-blue-500">
                {item}
              </li>
            )
          )}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex gap-x-5">
          <FaFacebook
            size={24}
            className="cursor-pointer hover:text-blue-500"
          />
          <FaTwitter size={24} className="cursor-pointer hover:text-blue-500" />
          <FaInstagram
            size={24}
            className="cursor-pointer hover:text-blue-500"
          />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <AiOutlineClose size={28} />
          ) : (
            <AiOutlineMenu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white shadow-lg p-6 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5"
        >
          <AiOutlineClose size={28} />
        </button>
        <ul className="flex flex-col gap-6 mt-14 text-xl font-medium">
          {["Home", "Products", "New In", "Contact Us", "About Us"].map(
            (item) => (
              <li key={item} className="cursor-pointer hover:text-blue-500">
                {item}
              </li>
            )
          )}
        </ul>
        <div className="mt-8 flex gap-x-6">
          <FaFacebook
            size={28}
            className="cursor-pointer hover:text-blue-500"
          />
          <FaTwitter size={28} className="cursor-pointer hover:text-blue-500" />
          <FaInstagram
            size={28}
            className="cursor-pointer hover:text-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Ecomm;
