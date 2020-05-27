import React from "react";
import Covid from "../components/worksLayout/Covid";
import RockPaper from "./worksLayout/RockPaper";
import WavesTop from './worksLayout/WavesTop';
import WavesBottom from './worksLayout/WavesBottom';

export const Works = () => {
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

      <WavesTop/>
      <h1  style={h1Style}>Completed, or in Progress, Projects</h1>
      </div>
      <div className="card-container">
        <Covid />
        <RockPaper />
      </div>
      <WavesBottom />
    </div>
  );
};



export default Works;
