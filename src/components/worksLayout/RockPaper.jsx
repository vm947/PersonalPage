import React from "react";

const RockPaper = () => {
  const imgStyle = {
    width: "30rem",
    height: "250px",
  };
  return (
    <div className="card rock-card">
      <img
        style={imgStyle}
        src="https://images.unsplash.com/photo-1522069213448-443a614da9b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
        className="card-img-top"
        alt="Covid-19 Written on Brick Wall"
      />
      <div className="card-body">
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
  );
};

export default RockPaper;

{
  /* <div className="card card-style">
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
    </div> */
}
