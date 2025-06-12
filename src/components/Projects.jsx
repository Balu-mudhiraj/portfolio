import React from 'react';

const projectsData = [
  {
    title: 'Phishing URL Detection',
    technologies: 'Python, Machine Learning, Adaptive Boosting',
    imgSrc: 'Purl.png',
    readMoreLink: '/phishing-url-detection',
  },
  {
    title: 'College Hostel App',
    technologies: 'React, Node.js, MongoDB',
    imgSrc: 'https://jklu.edu.in/siteassets/images/boys-hostel1.webp',
    readMoreLink: '/college-hostel-app',
  },
  {
    title: 'Student Easy Website',
    technologies: 'Django, HTML, CSS, JavaScript',
    imgSrc: 'https://img.freepik.com/free-photo/apply-online-application-form-recruitment-concept_53876-125603.jpg',
    readMoreLink: '/student-easy-website',
  },
];

const Projects = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">My Projects</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map(({ title, technologies, imgSrc, readMoreLink }, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={imgSrc}
              alt={title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">{title}</h3>
              <p className="text-gray-700 mb-4"><strong>Technologies:</strong> {technologies}</p>
              <a
                href={readMoreLink}
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2 rounded-md transition"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
