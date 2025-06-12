import React from 'react';

const StudentWebsiteProject = () => {
  const screenshots = [
    {
      src: 'Student-Registration.png',
      caption: 'Home Page with Navigation',
    },
    {
      src: 'Certificate-Application.png',
      caption: 'Certificate Application Form',
    },
    {
      src: 'Admin Review Dashboard.png',
      caption: 'Admin Review Dashboard',
    },
    {
      src: 'Application Progress.png',
      caption: 'Application Progress',
    },
  ];

  return (
    <div className="min-h-screen bg-white py-10 px-6">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Student Easy Website
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
          The <strong>Student Easy Website</strong> is a user-friendly online platform developed using Django, HTML, CSS,
          and JavaScript to simplify the certificate application process for students. It allows students to apply for
          Bonafide and Condonation certificates directly from the portal. The admin panel enables easy management and
          processing of student requests. This project demonstrates efficient form handling, user authentication, and
          database integration, making it a valuable tool for educational institutions aiming to digitize student services.
        </p>
      </div>
    </div>
  );
};

export default StudentWebsiteProject;
