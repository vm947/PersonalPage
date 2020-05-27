import React from "react";
import Covid from "../components/worksLayout/Covid";
import RockPaper from "./worksLayout/RockPaper";
import WavesTop from "./worksLayout/WavesTop";
import WavesBottom from "./worksLayout/WavesBottom";

export const Works = () => {

  return (
    <div>
      <div className="wave-container">
        <WavesTop />
        <h1 className="wave-header">Completed Projects</h1>
      </div>
      <div className="card-container">
        <Covid />
        <RockPaper />
      </div>
      <WavesBottom/>
    </div>
  );
};

export default Works;
