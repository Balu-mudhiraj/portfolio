import React from 'react';

const CollegeHostelApp = () => {
  const screenshots = [
    {
      src: 'Gate.png',
      caption: 'Gate Pass Request Interface',
    },
    {
      src: 'Bus.png',
      caption: 'Live Bus Route Information',
    },
    {
      src: 'studentrec.png',
      caption: 'Student Record Management',
    },
    {
      src: 'https://jklu.edu.in/siteassets/images/boys-hostel1.webp',
      caption: 'Hostel Facilities Dashboard',
    },
  ];

  return (
    <div className="min-h-screen bg-white py-10 px-6">
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-10">
        College Hostel App
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {screenshots.map((img, idx) => (
          <div key={idx} className="text-center">
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-52 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
            <p className="mt-2 text-sm font-medium text-gray-700">{img.caption}</p>
          </div>
        ))}
      </div>

      {/* Detailed Description */}
      <div className="max-w-5xl mx-auto text-lg text-gray-800 leading-relaxed bg-gray-50 p-6 rounded-xl shadow-sm">
        <p>
          The <strong>College Hostel App</strong> is a digital solution designed to manage hostel-related
          services for students. Built using modern web technologies, it streamlines the process of
          requesting gate passes, checking bus route schedules, managing hostel facilities, and maintaining
          student records. With a secure admin panel and real-time updates, the app ensures smooth
          communication between students and hostel authorities. Its clean UI and powerful backend make
          hostel management efficient and paperless.
        </p>
      </div>
    </div>
  );
};

export default CollegeHostelApp;
