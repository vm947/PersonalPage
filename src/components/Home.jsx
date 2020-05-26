import React from "react";
import RedDivide from "./RedDivide";

export const Home = () => {
  return (
    <div>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a52a2a" fill-opacity="0.65" d="M0,96L48,101.3C96,107,192,117,288,106.7C384,96,480,64,576,64C672,64,768,96,864,133.3C960,171,1056,213,1152,197.3C1248,181,1344,107,1392,69.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </div>
      <div className="home-container">
        <h1>Welcome</h1>
        <p className="p-home">
          Welcome to this homepage. It is a React practice homepage where I will
          try to update with future practice projects!
        </p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a52a2a" fill-opacity="0.65" d="M0,96L48,101.3C96,107,192,117,288,106.7C384,96,480,64,576,64C672,64,768,96,864,133.3C960,171,1056,213,1152,197.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>    </div>
  );
};

export default Home;
