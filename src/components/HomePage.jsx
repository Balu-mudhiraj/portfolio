import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPython, FaJava, FaReact, FaJs, FaDatabase } from 'react-icons/fa';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-white overflow-x-hidden font-sans px-6 py-18 sm:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row items-center justify-center text-left">
        {/* Left Section */}
        <div className="md:w-1/2 lg:w-3/5 mb-8 md:mb-0 md:pr-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Hi, I'm <span className="text-blue-600 animate-pulse">Balakrishna Sripathi</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
            Motivated and enthusiastic <strong>Software Developer</strong> with strong problem-solving skills and proficiency.
            A fresh graduate eager to apply theoretical knowledge gained from academic studies to real-world
            projects. Committed to continuous learning and growth in the field of software development. Passionate
            about creating efficient and innovative solutions to complex problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/hire-me')}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
            >
              Hire Me
            </button>

            <a
              href="Balakrishna Sripathi Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              View My Resume
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 lg:w-2/5 flex flex-col items-center justify-center p-4 relative">
          {/* Icons */}
          <div className="absolute top-0 flex gap-4 animate-bounce z-10">
            <FaPython className="text-blue-500 text-3xl hover:scale-125 transition" title="Python" />
            <FaJava className="text-red-600 text-3xl hover:scale-125 transition" title="Java" />
            <FaReact className="text-cyan-500 text-3xl hover:scale-125 transition" title="React" />
            <FaJs className="text-yellow-400 text-3xl hover:scale-125 transition" title="JavaScript" />
            <FaDatabase className="text-purple-600 text-3xl hover:scale-125 transition" title="Database" />
          </div>

          <img
            src="javadevpng.png"
            alt="Developer working on a laptop"
            className="max-w-full h-auto rounded-xl mt-16 transition-transform duration-500 hover:scale-105"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/400x400/CCCCCC/FFFFFF?text=Image+Not+Found";
              e.target.alt = "Placeholder image for developer illustration";
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
