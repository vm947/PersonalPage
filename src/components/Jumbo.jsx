import React from "react";
import "../index.css";

const Jumbo = () => {
  // const style = {
  //   fontSize: '4rem',
  //   fontWeight: 'bold',
  //   fontFamily: 'Electrolize, sans-serif'
  // }

  return (
    <div className="jumbotron-container">
      <div className="jumbotron jumbotron-fluid jumbotron-image">
        <div className="container">
          <h1 className="display-4">Always Doing</h1>
          <p className="lead" id="leader">
            It's always a good time to do something, somehow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jumbo;
