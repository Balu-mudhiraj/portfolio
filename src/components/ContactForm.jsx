import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Phone_Number: '',
    Email_id: '',
    Address: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(''); // Clear status before new submission
    try {
      const response = await fetch('https://sheetdb.io/api/v1/d9hblyqx5mmis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: formData })
      });
      if (response.ok) {
        setStatus('✅ Form submitted successfully!');
        setFormData({ Name: '', Phone_Number: '', Email_id: '', Address: '' });
      } else {
        setStatus('❌ Failed to submit.');
      }
    } catch (err) {
      setStatus('❌ Network error.');
    }
  };

  return (
    // This div now serves as the main content area for the ContactForm route
    // It will be centered within the space provided by the App component's layout
    <div className="flex-grow flex items-center justify-center p-9 bg-gray-100">
      {/* Container for both panels - still uses increased max-width for "fuller" display */}
      <div className="flex flex-col md:flex-row w-full max-w-screen-lg lg:max-w-screen-xl animate-fade-in">
        {/* Left Panel */}
        <div className="md:mr-10 bg-white p-4 rounded-lg shadow-md min-w-[280px] mb-6 md:mb-0 transition-all duration-300 hover:shadow-xl hover:scale-105">
          <h2 className="mb-1 text-2xl font-semibold border-b pb-1">Contact Info</h2>
          <p className="mb-1 text-lg">
            <strong>Balakrishna Sripathi</strong>
          </p>
          <p className="mb-1 text-lg">📞 (+91)807403364</p>
          <p className="text-lg">✉️ balakrishnasripathi2001.com</p>
        </div>

        {/* Form Container */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full transition-all duration-300 hover:shadow-xl">
          <h1 className="text-4xl font-bold mb-1">Let's Talk</h1>
          <p className="text-base text-gray-600 mb-4">
            Ready to start a journey together? Fill the form below and let's connect!
          </p>
          <form onSubmit={handleSubmit}>
            <input
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full p-2 mb-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg transition-all duration-200 hover:border-blue-400 hover:scale-[1.01] hover:shadow-sm"
            />
            <input
              name="Phone_Number"
              value={formData.Phone_Number}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full p-2 mb-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg transition-all duration-200 hover:border-blue-400 hover:scale-[1.01] hover:shadow-sm"
            />
            <input
              name="Email_id"
              value={formData.Email_id}
              onChange={handleChange}
              placeholder="Email ID"
              required
              className="w-full p-2 mb-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg transition-all duration-200 hover:border-blue-400 hover:scale-[1.01] hover:shadow-sm"
            />
            <textarea
              name="Address"
              value={formData.Address}
              onChange={handleChange}
              placeholder="Message"
              required
              className="w-full p-2 mb-3 rounded-md border border-gray-300 h-24 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg transition-all duration-200 hover:border-blue-400 hover:scale-[1.01] hover:shadow-sm"
            />
            <button
              type="submit"
              className="w-full py-2 mt-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xl rounded-md hover:from-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-300 hover:animate-wiggle"
            >
              Contact Me
            </button>
            {status && (
              <p className="mt-3 text-center text-gray-700 text-lg animate-status-fade-in">{status}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;