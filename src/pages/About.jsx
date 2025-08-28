import React from "react";
import "./About.css";
import { FaLinkedin, FaGithub, FaInstagram, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import profileImage from "../assets/about2.gif";
const About = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Left Side */}
      <div className="about-left">
        <img
          src={profileImage}// Apni image ka path yahan lagayen
          alt="Profile"
          className="about-img"
        />
        <h3 className="about-name">Zainab Ch</h3> {/* Naam add kiya */}

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/zainabwaheed02/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/zainab-waheed" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/_zainab_ch/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="about-right">
        <h2>Who I am?</h2>
        <p >
          I am a passionate Junior Web Developer with a strong interest in UI/UX design and a dedication to building modern,
          user-friendly and visually appealing websites. I have hands on experience in designing interactive interfaces
          on Figma and have successfully worked on multiple web projects. My development journey includes working extensively
          with React and exploring Angular, while also learning MongoDB as part of my goal to master the MERN stack.
        </p>

        {/* Download CV Button */}
        <a
          href="/Zainab(cv).pdf" // public folder me CV ka naam yeh rakho
          download="Zainab(cv).pdf"
          target="_blank"
          rel="noreferrer"
          className="cv-button"
        >
          GET RESUME
        </a>

        <div className="about-details">
          <div>
            <h3>Interests</h3>
            <ul>
              <li>MEARN Stack</li>
              <li>Book Reader</li>
              <li>Frontend Design</li>
              <li>UI|UX Design</li>
            </ul>
          </div>

          <div>
            <h3>Education</h3>
            <div className="edu-item">
              <div className="edu-header">
                <FaGraduationCap className="edu-icon" />
                <h4>BSIET (BS. Information Engineering And Technology)</h4>
              </div>
              <p>Superior University</p>
            </div>

            <div className="edu-item">
              <div className="edu-header">
                <FaGraduationCap className="edu-icon" />
                <h4>ICS (Computer, Physics, Math)</h4>
              </div>
              <p>Aspire Group of Colleges</p>
            </div>

            <div className="edu-item">
              <div className="edu-header">
                <FaGraduationCap className="edu-icon" />
                <h4>Matric (Computer Science)</h4>
              </div>
              <p>Government Muslim Girls High School</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
