import React from "react";
import Covid from '../components/worksLayout/Covid';

export const Works = () => {
  return (
    <div className="card-container">
      <Covid />
      <div className="card card-style">
        <div className="card-body second-card">
          <h4 className="card-subtitle mb-2">
            <u>Rock Paper Scissors</u>
          </h4>
          <p className="card-text">
            A practice page using React to play Rock Paper Scissors against
            Skynet.
          </p>
          <a
            href="https://arinapaperscissors.netlify.app/"
            target="_blank"
            className="card-link"
          >
            Battle Skynet here!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Works;
