import React from "react";
import WavesTop from "./worksLayout/WavesTop";
import WavesBottom from "./worksLayout/WavesBottom";

export const StoryTime = () => {
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
        <h1 style={h1Style}>StoryTime Blog Coming Soon</h1>
      </div>
      <div className="storytime-container">
        <h1>Coming in the Future</h1>
      </div>
      <WavesBottom />
    </div>
  );
};

export default StoryTime;
