import React from "react";
import RedDivide from "./RedDivide";

export const Home = () => {
  return (
    <div>
      <RedDivide />
      <div className="home-container">
        <h1>Welcome</h1>
        <p className="p-home">
          Welcome to this homepage. It is a React practice homepage where I will
          try to update with future practice projects!
        </p>
      </div>
      <RedDivide />
    </div>
  );
};

export default Home;
