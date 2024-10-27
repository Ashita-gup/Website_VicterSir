import React, { useState } from 'react';
import emailjs from 'emailjs-com';

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
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = 'service_2mecnxa';
    const templateID = 'template_ierm5m7';
    const publicKey = 'YTIm3gTkgXpggcULw';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        alert('Message sent successfully!');
        // Clear form after submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((err) => {
        alert('Failed to send the message. Please try again later.');
      });
  };
  return (
    <div className="background-contain">
      <div className="content my-4">
    <div className="container">
      
      <div className="container  ">
      <h2 className="my-4" style={{fontFamily: '"Lora", serif',fontWeight: 500}}>Let's talk</h2>
      <h4 style={{fontFamily: '"Old Standard TT", serif',fontWeight: 700}}>You are welcome to contact for Research Collaboration, Technical Talk and Internships</h4>
    <form className="row g-3 " onSubmit={handleSubmit}>
  <div className="col-md-4 text-start">
    <label htmlFor="inputEmail4" className="form-label text-left" style={{fontFamily: '"Lora", serif',fontWeight: 600}}>First Name</label>
    <input type="text"
        name="firstName"
        className="form-control"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required />
  </div>
  <div className="col-md-4 text-start">
    <label htmlFor="inputPassword4" className="form-label" style={{fontFamily: '"Lora", serif',fontWeight: 600}}>Last Name</label>
    <input type="text"
        name="lastName"
        className="form-control"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required />
  </div>
  <div className="col-md-5 text-start">
    <label htmlFor="inputAddress" className="form-label" style={{fontFamily: '"Lora", serif',fontWeight: 600}}>Email</label>
    <input type="email"
        name="email"
        className="form-control "
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required />
  </div>
  <div className="col-md-8 text-start">
    <label htmlFor="inputAddress2" className="form-label" style={{fontFamily: '"Lora", serif',fontWeight: 600}}>Subject</label>
    <input type="text"
        name="subject"
        className="form-control"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required />
  </div>
  <div className="mb-3 text-start">
    <label htmlFor="validationTextarea" className="form-label" style={{fontFamily: '"Lora", serif',fontWeight: 600}}>Message</label>
    <textarea className="form-control" id="validationTextarea"  name="message"
    rows="4"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}></textarea>

    </div>
  <div className="col-12" style={{marginBottom: "1%"}}>
    <button type="submit" className="btn btn-primary" style={{fontFamily: '"Lora", serif',fontWeight: 600}}>Send</button>
  </div>
</form>

                                         
    </div>
    </div>
    <br></br>
    
    </div>
    
    </div>
  )
}
