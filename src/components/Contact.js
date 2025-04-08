import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailData = {
      from: 'ashi0514guptrip@gmail.com', // Replace with your verified sender email
      to: formData.email,
      subject: formData.subject,
      html: `
        <h1>Message from ${formData.firstName} ${formData.lastName}</h1>
        <p>${formData.message}</p>
      `
    };

    try {
      const response = await axios.post(
        'https://api.resend.io/v1/email',
        emailData,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_RESEND_API_KEY}`, // API key from your .env file
            'Content-Type': 'application/json',
          },
        }
      );
      alert('Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      alert('Failed to send the message. Please try again later.');
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="background-contain">
      <div className="content my-4">
        <div className="container">
          <h2 className="my-4" style={{ fontFamily: '"Lora", serif', fontWeight: 500 }}>Let's talk</h2>
          <h4 style={{ fontFamily: '"Old Standard TT", serif', fontWeight: 700 }}>You are welcome to contact for Research Collaboration, Technical Talk and Internships</h4>
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-4 text-start">
              <label htmlFor="firstName" className="form-label text-left" style={{ fontFamily: '"Lora", serif', fontWeight: 600 }}>First Name</label>
              <input type="text"
                name="firstName"
                className="form-control"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required />
            </div>
            <div className="col-md-4 text-start">
              <label htmlFor="lastName" className="form-label" style={{ fontFamily: '"Lora", serif', fontWeight: 600 }}>Last Name</label>
              <input type="text"
                name="lastName"
                className="form-control"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required />
            </div>
            <div className="col-md-5 text-start">
              <label htmlFor="email" className="form-label" style={{ fontFamily: '"Lora", serif', fontWeight: 600 }}>Email</label>
              <input type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required />
            </div>
            <div className="col-md-8 text-start">
              <label htmlFor="subject" className="form-label" style={{ fontFamily: '"Lora", serif', fontWeight: 600 }}>Subject</label>
              <input type="text"
                name="subject"
                className="form-control"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="message" className="form-label" style={{ fontFamily: '"Lora", serif', fontWeight: 600 }}>Message</label>
              <textarea className="form-control" id="message" name="message"
                rows="4"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}></textarea>
            </div>
            <div className="col-12" style={{ marginBottom: "1%" }}>
              <button type="submit" className="btn btn-primary" style={{ fontFamily: '"Lora", serif', fontWeight: 600 }}>Send</button>
            </div>
          </form>
        </div>
      </div>
      <br />
    </div>
  );
}
