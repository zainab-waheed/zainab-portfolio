import React from "react";
import "./Projects.css";

import portfolioImg from "../assets/portfolio.png";
import secondProjectImg from "../assets/project2.png";
import thirdProjectImg from "../assets/project3.png";
import carBarrierImg from "../assets/project4.png"; // apni image add kar lena assets folder me

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "My Porfolio React Project",
      img: portfolioImg,
      desc: `Developed a React.js-based personal portfolio with a focus on modern UI and responsive design. 
      Organized the src directory into three folders: assets (for storing images), components (including social links and header)
      and pages (for navigation). Created an engaging, mobile-friendly interface to showcase my skills, projects
      and contact information in a clean and professional layout.`
    },
    {
      id: 2,
      title: "Hostel Management System",
      img: secondProjectImg,
      desc: `Developed a C++-based Hostel Management System using <iostream>, <fstream>, and <string> libraries.
       Implemented an object-oriented approach by creating classes and subclasses to handle different hostel operations.
       Integrated switch statements within classes to execute functions based on user choices. Designed a menu-driven
       interface in the main() function for seamless navigation, allowing users to perform tasks like room allocation,
       student record management and data storage. This project strengthened my skills in OOP, file handling, and
       user interface design in C++.`
    },
    {
      id: 3,
      title: "Final Year Project",
      img: thirdProjectImg,
      desc: `Transport Management System – Final Year Project
Developed a full-stack Transport Management System for Superior University during my 6th and 7th semesters. The system aimed to make university transport more efficient and organized for both students and administrators.
Key features included:
Login Page as the entry point.
Student Portal with dashboard, bus timings, routes, invoices, and maps.
Admin Portal for bus details, schedule updates, and student data management.
Super Admin Portal with full access and control over the system.
The project enhanced my skills in UI design, backend development, and real-time data handling, while improving
 my problem-solving abilities and understanding of large-scale system design.
`
    },
    {
      id: 4,
      title: "Car Barrier Project",
      img: carBarrierImg,
      desc: `Developed an automated Car Barrier System with sensor-based detection. The system detects when
      a car arrives and automatically opens the barrier gate for parking. Implemented sensor integration for 
      real-time response and ensured smooth gate operation. This project improved my understanding of embedded
      systems, automation, and hardware-software interaction.`
    }
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-heading">My Work</h2>
      <p className="projects-intro">
        Below are some of my projects
      </p>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div
            key={project.id}
            className="project-card"
            style={{ animationDelay: `${index * 0.2 + 0.3}s` }} // animation delay
          >
            <img src={project.img} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <div className="project-desc">
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
