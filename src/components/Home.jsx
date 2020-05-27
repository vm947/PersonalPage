import React from "react";
import RedDivide from "./RedDivide";
import WavesTop from "./worksLayout/WavesTop";
import WavesBottom from "./worksLayout/WavesBottom";

export const Home = () => {
  const containerStyle ={
    position: 'relative',
    textAlign: 'center',
  }

  const h1Style ={
    position: 'absolute',
  top: '25%',
  left: '50%',
  transform:` translate(-50%, -50%)`,
  bottom: '55%',
  }

  return (
    <div>
    <div style={containerStyle}>
      <WavesTop />
        <h1 style={h1Style}>Welcome</h1>
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
