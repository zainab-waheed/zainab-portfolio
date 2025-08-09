import React from 'react';
import './Home.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg';

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
        <h1>Hi! My self Zainab Ch</h1>
        <p>I am a Junior Frontend Developer and interested in UI | UX development. I love building clean user-friendly interfaces.</p>
        
        <div className="icons">
          <a href="https://github.com/zainab-waheed" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/zainabwaheed02/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>

        <div className="buttons">
          <button onClick={handleContactClick}>Contact Me</button>
          <button>Hire Me</button>
        </div>
      </div>

      <div className="right">
        <img src={profile} alt="Zainab Ch" />
      </div>
    </motion.div>
  );
};

export default Home;
