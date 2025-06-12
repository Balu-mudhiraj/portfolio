import React, { useState } from 'react';

const GoogleSheetForm = () => {
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

    const data = { data: formData };

    try {
      const response = await fetch('https://sheetdb.io/api/v1/d9hblyqx5mmis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('✅ Form submitted successfully!');
        setFormData({ Name: '', Phone_Number: '', Email_id: '', Address: '' });
      } else {
        setStatus('❌ Failed to submit.');
      }
    } catch (error) {
      setStatus('❌ Network error.');
      console.error(error);
    }
  };

  return (
    <div style={{
      fontFamily: 'Segoe UI, sans-serif',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#f0f4f8',
      padding: '20px'
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: 'white',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '450px'
        }}
      >
        <h2 style={{ textAlign: 'center', color: '#1e3a8a', marginBottom: '20px' }}>Submit Your Details</h2>

        <input
          type="text"
          name="Name"
          placeholder="Name"
          required
          value={formData.Name}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="tel"
          name="Phone_Number"
          placeholder="Phone Number"
          required
          value={formData.Phone_Number}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="email"
          name="Email_id"
          placeholder="Email ID"
          required
          value={formData.Email_id}
          onChange={handleChange}
          style={inputStyle}
        />
        <textarea
          name="Address"
          placeholder="Address"
          rows="4"
          required
          value={formData.Address}
          onChange={handleChange}
          style={{ ...inputStyle, resize: 'vertical' }}
        />

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#2563eb',
            color: 'white',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '6px',
            marginTop: '12px',
            cursor: 'pointer',
            transition: 'background 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
        >
          Submit
        </button>

        <p style={{ marginTop: '12px', textAlign: 'center', color: '#333' }}>{status}</p>
      </form>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '16px'
};

export default GoogleSheetForm;
