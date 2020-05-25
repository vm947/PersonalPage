import React from "react";

export const Works = () => {
  return (
    <div className="card-container">
      <div className="card card-style">
        <div className="card-body">
          <h5 className="card-title"></h5>
          <h4 className="card-subtitle mb-2">
            <u>Covid-19 Search</u>
          </h4>
          <p className="card-text">
            A practice page using React and an API that lets you sort countries
            by name to see statistics of Covid-19.
          </p>
          <a
            href="https://arinacovistats.netlify.app/"
            target="_blank"
            className="card-link"
          >
            Check out stats here!
          </a>
        </div>
      </div>
      <div className="card card-style">
        <div className="card-body second-card">
          <h4 className="card-subtitle mb-2">Rock Paper Scissors</h4>
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
