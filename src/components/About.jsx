import React from "react";

export const About = () => {
  return (
    <div className="about-container">
      <div className="p-parent">
        <div className="p-container">
          <h2>Background</h2>
          <p className="p-about">
            I am a self taught web designer living in Moscow Russia. I have been
            studying web design for over a year and make a conscious effort to
            study, apply what I have learned and improve everday. I have an
            affinity for using React and front-end development.
          </p>
        </div>
        </div>
        <div className="p-parent">
          <div className="p-container">
            <h2>Interests</h2>
            <p className="p-about">
              I love animals, particularly dogs. I have a Russian Spaniel, who
              is always pestering my wife and I for cookies and belly rubs.
            </p>
          </div>
        </div>
      </div>
  );
};

export default About;
