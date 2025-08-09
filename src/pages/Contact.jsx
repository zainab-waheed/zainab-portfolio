import React from "react";
import "./Contact.css";
import { FaRegEnvelope, FaRegThumbsUp, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Left Section */}
      <div className="contact-info">
        <h1>Get in Touch</h1>
        <h3>I’d like to hear from you!</h3>
        <p>
          If you have any inquiries or just want to say hi, please use the contact form!
        </p>

        <div className="icon-email-wrapper">
          <div className="icon-row">
            <FaRegEnvelope className="icon-with-border" />
            <a href="mailto:zch671689@gmail.com" className="email-link">zch671689@gmail.com</a>
          </div>
          <div className="icon-row thumb-social-row">
            <FaRegThumbsUp className="icon-with-border" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/zainabwaheed02" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/zainab-waheed" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/_zainab_ch/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email *" required />
        <textarea placeholder="Message" rows="5"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
