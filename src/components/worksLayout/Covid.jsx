import React from "react";

const Covid = () => {
  const imgStyle = {
    width: "30rem",
    height: "250px",
  };
  return (
    <div className="card covid-card">
      <img
        style={imgStyle}
        src="https://images.unsplash.com/photo-1590251979938-f04c85e0db7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <p className="card-text">
          A practice page using React and an API that lets you sort countries by
          name to see statistics of Covid-19.
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
  );
};

export default Covid;

{
  /* <div className="card card-style">
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
      </div> */
}
