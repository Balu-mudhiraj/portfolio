import React from 'react';

const PhishingProject = () => {
  const screenshots = [
    {
      src: 'url1.png',
      caption: 'URL Submission Form',
    },
    {
      src: 'Url2.png',
      caption: 'Detection Result Display',
    },
    {
      src: 'url3.png',
      caption: 'Detection Result Display',
    },
    {
      src: 'Urlgraph.png',
      caption: 'ML Model Performance Metrics',
    },
  ];

  return (
    <div className="min-h-screen bg-white py-10 px-6">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Phishing URL Detection
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
          The <strong>Phishing URL Detection System</strong> is a machine learning-based web application
          developed using Python, Flask, and various data processing libraries. It analyzes structural
          and lexical features of URLs to classify them as legitimate or phishing. The system helps
          users avoid malicious websites by flagging suspicious URLs based on trained models. The project
          includes a user-friendly interface for URL submission, result display, and a secure backend
          admin dashboard. It demonstrates strong integration of data science and full-stack development.
        </p>
      </div>
    </div>
  );
};

export default PhishingProject;
