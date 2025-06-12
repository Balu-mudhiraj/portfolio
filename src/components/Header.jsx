// src/components/Header.js
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // For hamburger menu icon

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold z-20">Balakrishna</div> {/* z-20 to keep it above mobile menu */}

        {/* Hamburger menu icon for small screens */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Navigation - always visible on md and larger */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="/" className="hover:text-blue-400 transition duration-300">Home</a></li>
          <li><a href="/projects" className="hover:text-blue-400 transition duration-300">Projects</a></li>
          <li><a href="/about" className="hover:text-blue-400 transition duration-300">About Me</a></li>
          <li><a href="/contact" className="hover:text-blue-400 transition duration-300">Contact Me</a></li>
        </ul>

        {/* Mobile Navigation - slides in from the side */}
        <ul
          className={`
            fixed top-0 left-0 w-full h-full bg-gray-800 z-10
            flex flex-col items-center justify-center space-y-8
            transform transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            md:hidden
          `}
        >
          <li><a onClick={() => setIsOpen(false)} href="/" className="text-white text-3xl hover:text-blue-400 transition duration-300">Home</a></li>
          <li><a onClick={() => setIsOpen(false)} href="/projects" className="text-white text-3xl hover:text-blue-400 transition duration-300">Projects</a></li>
          <li><a onClick={() => setIsOpen(false)} href="/about" className="text-white text-3xl hover:text-blue-400 transition duration-300">About Me</a></li>
          <li><a onClick={() => setIsOpen(false)} href="/contact" className="text-white text-3xl hover:text-blue-400 transition duration-300">Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;