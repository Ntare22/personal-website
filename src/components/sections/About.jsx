import React from 'react';
import '../styles/about.scss';

const About = () => {
  return (
    <React.Fragment>
      <div id="about-section">
        <div className="about">
          <h2 className="about_heading">About Me</h2>
          <p className="about_text">
            Hi, my name is Jim – Software Engineer / Blogger from Kigali. 
            I am interested in everything technology and entreprenuership.
            <br/>
            <br/>
            Formerly at Andela, I’m currently doing Freelance consultancy work, 
            contributing to open source and pursuing personal projects.
            <br/>
            <br/>
            Hire me to build you a website, moblie application, or speak at your event.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
