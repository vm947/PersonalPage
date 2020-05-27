import React from "react";
import RedDivide from "./RedDivide";
import WavesTop from "./worksLayout/WavesTop";
import WavesBottom from "./worksLayout/WavesBottom";

export const Home = () => {
  const style={
    height: '100%',
  }
  return (
    <div style={style}>
      <div className="wave-container">
        <WavesTop />
        <h1 className="wave-header">Welcome</h1>
      </div>
      <div className="home-container">
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
