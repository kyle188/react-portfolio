import React from 'react';
import profileImage from "../assets/profile-image.jpg"


function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <img
                    src={profileImage}
                    width={400}
                    height={300}
                    alt={"Profile-Image"}
                  />
        </div>
        <h2>
          Hi, I'm Kyle.  I'm a Robot Programmer who became interested in Full Stack Development while working on Unity game development tutorials.  I signed up for a Full Stack Web Development Bootcamp through the University of Wisconsin in 2022 and earned the course Certificate in 2023.  Through the bootcamp I studied many of the leading current technologies including Node.js, Express, jQuery, Handlebars, SQL, NoSQL, MongoDB, React, HTML, CSS, Javascript, C#, and Python.  
        </h2>
        <br></br>
        <h2>
        I have a passion for learning and I enjoy being creative.  I really enjoyed building applications and websites and making them user friendly.  Working on both front end and back end aspects has really helped me get an appreciation for all of the work that goes into a full stack application.  I also really enjoyed collaborating with other students on our group projects and found out just how much you can learn from fellow developers.  I look forward to taking on new challenges and opportunities as I grow as a developer.
        </h2>
      </div>
    </section>
  );
}

export default About;
