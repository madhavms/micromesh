import React from "react";
import "./style/LoadingCircle.css"; // Assuming you create a new CSS file for the circular loading animation

function LoadingCircle() {
  return (
    <div className="loading-circle-container">
      {[...Array(8)].map((_, index) => (
        <div key={index} className={`loading-circle loading-circle-${index}`} />
      ))}
    </div>
  );
}

export default LoadingCircle;
