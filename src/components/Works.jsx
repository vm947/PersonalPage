import React from "react";
import Covid from "../components/worksLayout/Covid";
import RedDivide from "./RedDivide";
import RockPaper from "./worksLayout/RockPaper";

export const Works = () => {
  return (
    <div>
      <RedDivide />
      <div className="card-container">
        <Covid />
        <RockPaper />
      </div>
      <RedDivide />
    </div>
  );
};

export default Works;
