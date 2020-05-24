import React from "react";
import '../index.css';

const Jumbo = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid jumbotron-image">
        <div className="container">
          <h1 className="display-4">Fluid jumbotron</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jumbo;
