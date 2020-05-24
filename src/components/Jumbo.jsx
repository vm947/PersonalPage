import React from "react";
import "../index.css";

const Jumbo = () => {
  const style = {
    fontSize: '4rem',
    fontWeight: 'bold',
    fontFamily: 'Electrolize, sans-serif'

  }

  return (
    <div className="jumbotron-container">
      <div className="jumbotron jumbotron-fluid jumbotron-image">
        <div className="container">
          <h1 className="display-4">Fluid Jumbotron</h1>
          <p className="lead" style={style}>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jumbo;
