import React from 'react';
import './Home.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profile from '../assets/pic1.gif';

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");  // Contact page route pe le jaye
  };

  return (
    <motion.div 
      className="home-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="left">
        <h1>
          Hi! My self <span className="gradient-text">Zainab</span>
        </h1>
        <p>I am a Junior <spna className="gradient-text">Frontend Developer</spna> and <br></br>
          interested in <spna className="gradient-text">UI | UX development.</spna></p>
        <div className="icons">
          <a href="https://github.com/zainab-waheed" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/zainabwaheed02/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/_zainab_ch/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>

        <div className="buttons">
          <button onClick={handleContactClick} className= "btn-contact">Contact Me</button>
          <button className="btn-hire">Hire Me</button>
        </div>
      </div>

      <div className="right">
        <img src={profile} alt="Zainab Ch" />
      </div>
    </motion.div>
  );
};

export default Home;
