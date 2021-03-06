import React from "react";
import WavesTop from "./worksLayout/WavesTop";
import WavesBottom from "./worksLayout/WavesBottom";

export const StoryTime = () => {
  return (
    <div>
      <div className="wave-container">
        <WavesTop />
        {/* <h1 className="wave-header">StoryTime Blog</h1> */}
      </div>
      <div className="storytime-container">
        <h1>Coming in the Future</h1>
      </div>
      <WavesBottom />
    </div>
  );
};

export default StoryTime;
