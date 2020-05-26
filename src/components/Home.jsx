import React from "react";
import RedDivide from "./RedDivide";
import WavesTop from "./worksLayout/WavesTop";
import WavesBottom from "./worksLayout/WavesBottom";

export const Home = () => {
  return (
    <div>
      <WavesTop />

      <div className="home-container">
        <h1>Welcome</h1>
        <p className="p-home">
          Welcome to this homepage. It is a React practice homepage where I will
          try to update with future practice projects!
        </p>
      </div>
      <WavesBottom />
    </div>
  );
};

export default Home;
