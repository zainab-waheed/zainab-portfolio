import React from "react";
import "./Projects.css";

import portfolioImg from "../assets/portfolio.png";
import secondProjectImg from "../assets/project2.png";
import thirdProjectImg from "../assets/project3.png";
import carBarrierImg from "../assets/project4.png";
import obstacleImg from "../assets/pic5.jpg";
import ecomrcImg from "../assets/pic6.png";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "My Portfolio Website",
      img: portfolioImg,
      role: "Frontend Developer | React Enthusiast",
      tools: ["React", "JavaScript", "GitHub"],
      desc: "A personal portfolio showcasing my frontend development skills with React, smooth scrolling navigation, and responsive design."
    },
    {
      id: 2,
      title: "Hostel Management System",
      img: secondProjectImg,
      role: "Coding",
      tools: ["C++"],
      desc: "A web-based system to manage hostel operations, including room allocation, student management, and fee tracking with secure authentication."
    },
    {
      id: 3,
      title: "Final Year Project",
      img: thirdProjectImg,
      role: "Team Lead | Software Engineer",
      tools: ["React", "Django", "REST API", "PostgreSQL"],
      desc: "An AI-powered web app built as a final year project, focusing on intelligent recommendations and user-friendly dashboards."
    },
    {
      id: 4,
      title: "Car Barrier System",
      img: carBarrierImg,
      role: "IoT Developer",
      tools: ["Arduino", "C++", "Sensors", "Motor Driver","Jumper-Wires"],
      desc: "An IoT-based smart car barrier system using Arduino and sensors to automate vehicle access management in parking lots."
    },
    {
      id: 5,
      title: "Obstacle Avoidence",
      img: obstacleImg,
      role: "IoT Developer",
      tools: ["Arduino UNO", "IR Sensors", "Motor Driver (L298N)", "DC Motors"],
      desc: "An IoT-powered track detection and obstacle avoidance car designed to sense paths using IR sensors and move accordingly"
    },
    {
      id: 6,
      title: "Ecommerce Website",
      img: ecomrcImg,
      role: "Frontend Web Developer",
      tools: ["HTML5", "CSS3", "JavaScript"],
      desc: "A responsive clothing store website built using HTML, CSS, and JavaScript, featuring product listings, category filters, and a dynamic shopping cart."
    }
  
  ];
  const shadowColors = ["#ff6ec4", "#4ade80", "#7873f5", "#facc15"];
  return (
    <div className="projects-container">
      <h2 className="projects-heading">My Work</h2>
      <p className="projects-intro">Below are some of my highlighted projects</p>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div
            key={project.id}
            className="project-card"
            style={{
              animationDelay: `${index * 0.2 + 0.3}s`,
              boxShadow: `0 8px 20px ${shadowColors[index % shadowColors.length]}`
            }}
          >
            <img src={project.img} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            
            <p className="project-role">{project.role}</p>

            <div className="project-tools">
              {project.tools.map((tool, i) => (
                <span key={i} className="tool-badge">{tool}</span>
              ))}
            </div>

            <p className="project-desc">{project.desc}</p>

            <div className="project-links">
              <a href={project.demo} target="_blank" rel="noreferrer">🌐 Demo</a>
              <a href={project.code} target="_blank" rel="noreferrer">💻 Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
