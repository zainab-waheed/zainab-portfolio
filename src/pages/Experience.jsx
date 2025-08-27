// src/pages/Experience.jsx
import React from "react";
import "./Experience.css";
import studyGif from "../assets/project.gif"; // ✅ apna gif yahan rakhna assets folder me
import { Briefcase } from "lucide-react"; // lucide-react icons

const Experience = () => {
  return (
    <div className="experience-page">
      {/* Heading (Top Right) */}
      <h1 className="experience-heading">Experience</h1>

      {/* Gif + Cards Section */}
      <div className="experience-content">
        {/* Gif */}
        <div className="experience-gif">
          <img src={studyGif} alt="experience gif" />
        </div>

        {/* Cards */}
        <div className="experience-cards">
          <div className="exp-card">
            <h2>
                <Briefcase className="exp-icon green" />
                Teaching</h2>
            <p>
              I have taught children at home for 3 years, helping them learn and
              grow in their studies.
            </p>
          </div>

          <div className="exp-card">
            <h2>
                <Briefcase className="exp-icon green" />
                Internship</h2>
            <p>
              I completed an internship at Tara Technology Software House where
              I worked on web development projects and improved my skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
