import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import {
  FaRegEnvelope,
  FaRegThumbsUp,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaMapMarkerAlt
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  // ✅ Store history for autocomplete
  const [history, setHistory] = useState({
    names: [],
    emails: [],
    messages: []
  });

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    emailjs
      .sendForm(
        "service_9847t8f",
        "template_p2mez29",
        form.current,
        "vl5proZnGrgchq5iK"
      )
      .then(
        (result) => {
          setStatusMessage("✅ Message Sent Successfully!");

          // ✅ Add to history
          setHistory((prev) => ({
            names: prev.names.includes(name) ? prev.names : [...prev.names, name],
            emails: prev.emails.includes(email) ? prev.emails : [...prev.emails, email],
            messages: prev.messages.includes(message) ? prev.messages : [...prev.messages, message]
          }));

          // ✅ Clear form
          form.current.reset();
        },
        (error) => {
          setStatusMessage("❌ Failed to send. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      {/* Left Section */}
      <div className="contact-info">
        <h1>Get in Touch</h1>
        <h3>I’d like to hear from you!</h3>
        <p>If you have any inquiries or just want to say hi, please use the contact form!</p>

        <div className="icon-email-wrapper">
          <div className="icon-row">
            <FaRegEnvelope className="icon-with-border" />
            <a href="mailto:zch671689@gmail.com" className="email-link">zch671689@gmail.com</a>
          </div>

          <div className="icon-row">
            <FaMapMarkerAlt className="icon-with-border location-icon" />
            <span className="location-text">H#16 , St37 Mughalpura Lahore</span>
          </div>

          <div className="icon-row thumb-social-row">
            <FaRegThumbsUp className="icon-with-border" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/zainabwaheed02" target="blank" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/zainab-waheed" target="blank" aria-label="GitHub">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-row">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            list="namesList"
          />
          <datalist id="namesList">
            {history.names.map((n, i) => (
              <option key={i} value={n} />
            ))}
          </datalist>
        </div>

        <input
          type="email"
          name="user_email"
          placeholder="Your Email *"
          required
          list="emailsList"
        />
        <datalist id="emailsList">
          {history.emails.map((e, i) => (
            <option key={i} value={e} />
          ))}
        </datalist>

        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          list="messagesList"
        ></textarea>
        <datalist id="messagesList">
          {history.messages.map((m, i) => (
            <option key={i} value={m} />
          ))}
        </datalist>

        <button type="submit">
          Send <FaPaperPlane className="send-icon" />
        </button>

        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </form>
    </div>
  );
};

export default Contact;
