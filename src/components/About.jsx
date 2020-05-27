import React from "react";
import WavesTop from "./worksLayout/WavesTop";
import WavesBottom from "./worksLayout/WavesBottom";
import BackGround from "../components/AboutComponents/BackGround";
import Interests from "../components/AboutComponents/Interests";

export const About = () => {
  return (
    <div>
      <div className="wave-container">
        <WavesTop />
        <h1 className="wave-header">A Litte About Me</h1>
      </div>
      <div className="about-container">
        <BackGround />
        <Interests />
      </div>
      <WavesBottom />
    </div>
  );
};

export default About;
