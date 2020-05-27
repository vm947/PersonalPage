import React from "react";
import WavesTop from "./worksLayout/WavesTop";
import WavesBottom from "./worksLayout/WavesBottom";
import BackGround from '../components/AboutComponents/BackGround';
import Interests from '../components/AboutComponents/Interests';

export const About = () => {
  const containerStyle = {
    position: "relative",
    textAlign: "center",
  };

  const h1Style = {
    position: "absolute",
    top: "25%",
    left: "50%",
    transform: ` translate(-50%, -50%)`,
    bottom: "55%",
  };
  return (
    <div>
      <div style={containerStyle}>
      <WavesTop />
      <h1 style={h1Style}>A Litte About Me</h1>
      </div>
      <div className="about-container">
        <BackGround/>
        <Interests/>
      </div>
      <WavesBottom />
    </div>
  );
};

export default About;
