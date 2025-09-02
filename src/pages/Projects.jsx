import React from "react";
import "./Projects.css";

import portfolioImg from "../assets/portfolio.png";
import todoImg from "../assets/todo.png";
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
      desc: "A personal portfolio website highlighting  skills with React and a clean interface. It features smooth scrolling navigation and a fully responsive design to provide an engaging user experience across all devices."
    },
    {
      id: 2,
      title: "Todo App",
      img: todoImg,
      role: "FullStack Developer | React | Supabase",
      tools: ["React", "JavaScript", "Supabase", "Vite"],
      desc: "A full-stack Todo application featuring secure user authentication and responsive design. It supports real-time CRUD operations, allowing users to efficiently manage their tasks anytime, anywhere."
    },
    {
      id: 3,
      title: "Hostel Management System",
      img: secondProjectImg,
      role: "Coding",
      tools: ["C++"],
      desc: "A web-based system designed to streamline hostel operations with features like room allocation, student management. It also secure authentication to ensure data privacy and efficient control for admin and students"
    },
    {
      id: 4,
      title: "Final Year Project",
      img: thirdProjectImg,
      role: "Team Lead | Software Engineer",
      tools: ["React", "Django", "REST API", "PostgreSQL"],
      desc: "An AI-powered web application developed as a final year project, designed to deliver intelligent recommendations and insights. It features user-friendly dashboards that make data visualization and decision-making"
    },
    {
      id: 5,
      title: "Car Barrier System",
      img: carBarrierImg,
      role: "IoT Developer",
      tools: ["Arduino", "C++", "Sensors", "Motor Driver","Jumper-Wires"],
      desc: "An IoT-based smart car barrier system built with Arduino and sensors. It enhances parking efficiency by enabling automatic entry and exit control without manual intervention.."
    },
    {
      id: 6,
      title: "Obstacle Avoidence",
      img: obstacleImg,
      role: "IoT Developer",
      tools: ["Arduino UNO", "IR Sensors", "Motor Driver (L298N)", "DC Motors"],
      desc: "An IoT-powered track detection and obstacle avoidance car designed to sense paths using IR sensors and move accordingly It demonstrates autonomous movement by avoiding obstacles in real-time"
    },
    {
      id: 7,
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
