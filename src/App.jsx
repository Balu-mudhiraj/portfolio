import { useState } from 'react'
import './App.css'
import HomePage from './components/Homepage'
import { Route, Routes } from 'react-router-dom';
import GoogleSheetForm from './components/GoogleSheetForm';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import AboutMe from './components/About';
import PhishingProject from './projects/phishing-url-detection';
import CollegeHostelApp from './projects/CollegeHostelApp';
import StudentWebsiteProject from './projects/StudentWebsiteProject';
import ContactForm from './components/ContactForm';
const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 overflow-x-hidden">
      <Header />
      
      {/* Main content grows to push footer down */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hire-me" element={<ContactForm />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/phishing-url-detection" element={<PhishingProject />} />
          <Route path="/college-hostel-app" element={<CollegeHostelApp />} />
          <Route path="/student-easy-website" element={<StudentWebsiteProject />} />
        </Routes>
      </main>

      <Footer />
      </div>
  );
};
export default App
