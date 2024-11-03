// src/components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [touched, setTouched] = useState({ name: false, email: false, message: false }); // Track field focus

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error and success messages
    setError('');
    setSuccess('');

    // Basic validation
    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }

    // Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Simulate form submission (you can replace this with your actual submission logic later)
    console.log("Form submitted:", { name, email, message });

    // Simulate a success message
    setSuccess('Thank you for your message!');

    // Clear form fields for the next submission
    setName('');
    setEmail('');
    setMessage('');
    setTouched({ name: false, email: false, message: false }); // Reset touched states
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          onBlur={() => handleBlur('name')} 
        />
        {touched.name && !name && <p style={{ color: 'red' }}>This field is required.</p>}

        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          onBlur={() => handleBlur('email')} 
        />
        {touched.email && !email && <p style={{ color: 'red' }}>This field is required.</p>}

        <textarea 
          placeholder="Message" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          onBlur={() => handleBlur('message')} 
        />
        {touched.message && !message && <p style={{ color: 'red' }}>This field is required.</p>}

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
