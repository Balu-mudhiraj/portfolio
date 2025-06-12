// src/components/Footer.js
import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-center md:text-left">&copy; {new Date().getFullYear()} Balakrishna. All rights reserved.</p>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/balakrishna-sripathi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/Balu-mudhiraj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.instagram.com/balu_mudhiraj._/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-400 transition duration-300"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://leetcode.com/u/balu_06/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
              alt="LeetCode"
              className="w-7 h-7 object-contain hover:opacity-80 transition"
            />
          </a>
          <a
            href="https://www.codechef.com/users/balu_06"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CodeChef"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkKaRCV7xzDjdiNCwPbUzVnZCSE2SwNr3CfA&s"
              alt="CodeChef"
              className="w-7 h-7 object-contain hover:opacity-80 transition"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
