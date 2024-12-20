import React from 'react';
import "./ContactUs.css";

export const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  const handleReset = () => {
    alert('Form reset!');
  };

  return (
    <div className="contact-form-container">
      <main>
        <section className="contact-section">
          <h2>Contact us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc.</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" />

            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" placeholder="Your phone number" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" />

            <div className="button-container">
              <button type="submit">Submit</button>
              
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};
