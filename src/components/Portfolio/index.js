import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  const [projects] = useState([
    {
      name: 'shoe-in-screenshot',
      description: 'MERN Stack',
      link: "https://shoe-in-188.herokuapp.com/",
      repo: "https://github.com/OilPainter1/MERN-Ecommerce"
    },
    {
      name: 'shroomies-screenshot',
      description: 'Node',
      link: "https://shroomies.herokuapp.com/",
      repo: "https://github.com/eric-simmons/shroomies"
    },
    {
      name: 'tech-blog-screenshot',
      description: 'JavaScript/Cloudinary/Mysql2/Sequelize',
      link: "https://github.com/kyle188/tech_blog",
      repo: "https://github.com/kyle188/tech_blog"
    },
    {
      name: 'weather-dashboard-screenshot',
      description: 'HTML/CSS/JS',
      link: "https://kyle188.github.io/weather_dashboard/",
      repo: "https://github.com/kyle188/weather_dashboard"
    },
    {
      name: 'coding-quiz-screenshot',
      description: 'HTML/CSS/JS',
      link: "https://kyle188.github.io/multiple-choice-coding-quiz/",
      repo: "https://github.com/kyle188/multiple-choice-coding-quiz"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
