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

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Components", href: "/cart" },
    { name: "About Us", href: "#" },
    { name: "Our Verticals", href: "#" },
    { name: "Templates", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <div className="sticky top-0 w-full z-[50] bg-gray-800 text-purple-500 border-b border-indigo-500">
      <div className="w-11/12 mx-auto  flex justify-between items-center py-4 relative">
        {/* Logo */}
        <a href="/">
          <h1 className="text-2xl font-bold">LOGO</h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-x-8 font-medium">
          {navItems.map((item) => (
            <li key={item.name} className="cursor-pointer hover:text-blue-500">
              <a href={item.href} className="block p-2 rounded transition">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex gap-x-5">
          <FaFacebook size={24} className="cursor-pointer hover:text-blue-500" />
          <FaTwitter size={24} className="cursor-pointer hover:text-blue-500" />
          <FaInstagram size={24} className="cursor-pointer hover:text-blue-500" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-[60] relative"
          onClick={() => setMenuOpen(true)}
        >
          <AiOutlineMenu size={28} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-[75%] max-w-[300px] h-full bg-gray-900 text-white shadow-lg p-6 transition-transform duration-300 ease-in-out md:hidden z-[70] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5"
        >
          <AiOutlineClose size={28} />
        </button>

        <ul className="flex flex-col gap-6 mt-14 text-xl font-medium">
          {navItems.map((item) => (
            <li key={item.name} className="cursor-pointer hover:text-blue-500">
              <a href={item.href} onClick={() => setMenuOpen(false)}>{item.name}</a>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex gap-x-6">
          <FaFacebook size={28} className="cursor-pointer hover:text-blue-500" />
          <FaTwitter size={28} className="cursor-pointer hover:text-blue-500" />
          <FaInstagram size={28} className="cursor-pointer hover:text-blue-500" />
        </div>
      </div>

      {/* Overlay when Sidebar is Open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 md:hidden z-[60]"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Ecomm;

