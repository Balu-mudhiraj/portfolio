import React from 'react';

const AboutMe = () => {
  return (
    <section className="w-screen min-h-screen bg-white py-12 px-6 flex flex-col items-center font-sans">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-indigo-800 mb-8">About Me</h2>

        {/* Introductory Paragraph */}
        <p className="text-lg text-gray-700 text-center mb-12 leading-relaxed max-w-3xl mx-auto">
          I am <strong>Balakrishna Sripathi</strong>, a dedicated and enthusiastic Computer Science graduate
          with a specialization in Data Science. Passionate about web development, programming, and solving complex problems
          using efficient algorithms and clean code. My journey through academics and hands-on experience has
          equipped me with a strong foundation in technologies like Python, Java, React.js, and SQL. I'm always eager
          to contribute, learn, and grow in the ever-evolving tech space.
        </p>

        {/* Education Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* B.Tech */}
            <div className="border border-indigo-300 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-bold text-indigo-700 mb-1">Vignan Institute of Technology and Science</h4>
              <p className="text-gray-800 font-medium">Bachelor of Technology (CSE - Data Science)</p>
              <p className="text-gray-600">2020 – 2024 | Hyderabad, Telangana</p>
              <p className="text-gray-600">Percentage: 73%</p>
            </div>

            {/* Intermediate */}
            <div className="border border-indigo-300 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-bold text-indigo-700 mb-1">Government Junior College</h4>
              <p className="text-gray-800 font-medium">Branch: MPC</p>
              <p className="text-gray-600">2018 – 2020 | Narayanapuram</p>
              <p className="text-gray-600">Percentage: 80%</p>
            </div>

            {/* SSC */}
            <div className="border border-indigo-300 p-6 rounded-xl shadow hover:shadow-lg transition md:col-span-2">
              <h4 className="text-xl font-bold text-indigo-700 mb-1">ZPHS Kompally, Munugode</h4>
              <p className="text-gray-800 font-medium">Telangana State Board of Secondary Education</p>
              <p className="text-gray-600">2017 – 2018 | Nalgonda</p>
              <p className="text-gray-600">Percentage: 77%</p>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-300 p-6 rounded-lg shadow bg-gray-50">
              <h4 className="font-semibold text-indigo-700 mb-2">Programming Languages:</h4>
              <p className="text-gray-700">Python, Java, C</p>
            </div>
            <div className="border border-gray-300 p-6 rounded-lg shadow bg-gray-50">
              <h4 className="font-semibold text-indigo-700 mb-2">Data Structures and Algorithms:</h4>
              <p className="text-gray-700">Array, Linked List, Stacks, Queues</p>
            </div>
            <div className="border border-gray-300 p-6 rounded-lg shadow bg-gray-50">
              <h4 className="font-semibold text-indigo-700 mb-2">Database:</h4>
              <p className="text-gray-700">ORACLE (SQL & PL/SQL)</p>
            </div>
            <div className="border border-gray-300 p-6 rounded-lg shadow bg-gray-50">
              <h4 className="font-semibold text-indigo-700 mb-2">Web Technologies:</h4>
              <p className="text-gray-700">HTML, CSS, JavaScript, React.js</p>
            </div>
          </div>
        </div>

        {/* Soft Skills & Interests */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Soft Skills */}
          <div className="border border-blue-300 p-6 rounded-xl shadow-md bg-blue-50">
            <h4 className="text-xl font-bold text-blue-700 mb-4">Soft Skills</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Problem Solving</li>
              <li>Time Management</li>
              <li>Team Work</li>
              <li>Effective Communication</li>
            </ul>
          </div>

          {/* Interests */}
          <div className="border border-green-300 p-6 rounded-xl shadow-md bg-green-50">
            <h4 className="text-xl font-bold text-green-700 mb-4">Interests</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Programming</li>
              <li>Listening to Music</li>
              <li>Playing Cricket</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
