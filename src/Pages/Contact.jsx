import React from 'react';

const Contact = () => (
  <section id="contact" className="py-5 bg-white text-center">
    <h2 className="text-pink fw-bold mb-4">Contact Me</h2>
    <div className="container d-flex flex-column flex-md-row align-items-center gap-4 px-3">
      <img src="src/assets/images/WhatsApp Image 2025-04-02 at 13.46.14.jpeg" alt="Profile" className="rounded-circle shadow" width="160" height="160" />
      <form className="w-100" style={{ maxWidth: 500 }}>
        <input className="form-control mb-3" type="text" placeholder="Your Name" required />
        <input className="form-control mb-3" type="email" placeholder="Your Email" required />
        <textarea className="form-control mb-3" rows="4" placeholder="Your Message" required />
        <button type="submit" className="btn btn-pink w-100 text-white">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;

