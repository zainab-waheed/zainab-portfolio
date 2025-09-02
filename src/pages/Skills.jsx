import React from "react";
import "./Skills.css";

// My Skills
import htmlImg from "../assets/html.gif";
import cssImg from "../assets/css2.gif";
import jsImg from "../assets/java.gif";
import reactImg from "../assets/react.gif";
import nodeImg from "../assets/nj.gif";
import mongoImg from "../assets/mongo.gif";
import supaImg from "../assets/supa.gif";
import cvImg from "../assets/cv.gif";

// Other Skills
import figmaImg from "../assets/figma2.gif";
import cppImg from "../assets/c++.gif";
import pythonImg from "../assets/py.gif";

// Currently Learning
import phpImg from "../assets/php.gif";
import angularImg from "../assets/ang.gif";
import expressImg from "../assets/ex.gif";

const skills = [
  { name: "HTML", img: htmlImg, level: 98, desc: "Semantic and responsive layouts." },
  { name: "CSS", img: cssImg, level: 94, desc: "Responsive design, Grid and modern styling." },
  { name: "JavaScript", img: jsImg, level: 75, desc: "DOM, ES6+, async patterns and vanilla JS." },
  { name: "React", img: reactImg, level: 88, desc: "Components, hooks, state and routing." },
  { name: "Node.js", img: nodeImg, level: 80, desc: "Basic APIs, Express and server-side logic." },
  { name: "MongoDB", img: mongoImg, level: 60, desc: "CRUD, collections and basic schema design." },
  { name: "SupaBase", img: supaImg, level: 55, desc: "Authentication, table manage, database schema." },
  { name: "Computer Vision", img: cvImg, level: 50, desc: "Image processing, object detection, feature extraction." }
];

const otherSkills = [
  { name: "Figma", img: figmaImg, level: 85, desc: "UI/UX design, prototypes and components." },
  { name: "C++", img: cppImg, level: 70, desc: "OOP, data structures, and algorithms." },
  { name: "Python", img: pythonImg, level: 65, desc: "Scripting, data handling, and automation." }
];

const learningSkills = [
  { name: "PHP", img: phpImg, desc: "Learning backend web development using PHP." },
  { name: "Angular", img: angularImg, desc: "Exploring frontend framework with TypeScript." },
  { name: "Express.js", img: expressImg, desc: "Building server-side applications and REST APIs." }
];

const Skills = () => {
  return (
    <>
      {/* My Skills */}
      <section className="skill-section">
        <h1 className="heading">My Skills</h1>
        <div className="skills-container">
          {skills.map((s) => (
            <div className="skill-card" key={s.name}>
              <div className="skill-top">
                <img src={s.img} className="skill-img" alt={`${s.name} logo`} />
                <div
                  className="skill-level"
                  style={{ "--percent": s.level }}
                  title={`${s.level}%`}
                >
                  <span>{s.level}%</span>
                </div>
              </div>
              <h2 className="skill-name">{s.name}</h2>
              <p className="skill-info">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Skills */}
      <section className="skill-section">
        <h1 className="heading">Other Skills</h1>
        <div className="skills-container">
          {otherSkills.map((s) => (
            <div className="skill-card" key={s.name}>
              <div className="skill-top">
                <img src={s.img} className="skill-img" alt={`${s.name} logo`} />
                <div
                  className="skill-level"
                  style={{ "--percent": s.level }}
                  title={`${s.level}%`}
                >
                  <span>{s.level}%</span>
                </div>
              </div>
              <h2 className="skill-name">{s.name}</h2>
              <p className="skill-info">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Currently Learning */}
      <section className="skill-section">
        <h1 className="heading">Currently Learning</h1>
        <div className="skills-container">
          {learningSkills.map((s) => (
            <div className="skill-card" key={s.name}>
              <div className="skill-top">
                <img src={s.img} className="skill-img" alt={`${s.name} logo`} />
                {/* No percentage circle here */}
              </div>
              <h2 className="skill-name">{s.name}</h2>
              <p className="skill-info">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
