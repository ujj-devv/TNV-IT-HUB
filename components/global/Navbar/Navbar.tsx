"use client"
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-[#1E293B] font-extrabold text-2xl">
          TNV IT-HUB
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-[#1E293B] hover:text-blue-800 transition">Home</a>
          <a href="#services" className="text-[#1E293B] hover:text-blue-800 transition">Services</a>
          <a href="#about" className="text-[#1E293B] hover:text-blue-800 transition">About</a>
          <a href="#contact" className="text-[#1E293B] hover:text-blue-800 transition">Contact</a>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-600">
            {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-center py-4 space-y-4">
          <a href="#" className="text-[#1E293B] hover:text-blue-800 block">Home</a>
          <a href="#services" className="text-[#1E293B] hover:text-blue-800 block">Services</a>
          <a href="#about" className="text-[#1E293B] hover:text-blue-800 block">About</a>
          <a href="#contact" className="text-[#1E293B] hover:text-blue-800 block">Contact</a>
        </div>
      )}
    </nav>
  );
}
