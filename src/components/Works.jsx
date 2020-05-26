import React from "react";
import Covid from "../components/worksLayout/Covid";
import RockPaper from "./worksLayout/RockPaper";
import WavesTop from './worksLayout/WavesTop';
import WavesBottom from './worksLayout/WavesBottom';

export const Works = () => {
  return (
    <div>
      <WavesTop/>
      <div className="card-container">
        <Covid />
        <RockPaper />
      </div>
      <WavesBottom />
    </div>
  );
};



export default Works;
