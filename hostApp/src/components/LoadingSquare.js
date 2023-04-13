import React from "react";
import "./style/LoadingSquare.css";

function LoadingSquare() {
  return (
    <div className="loading-square-container">
      {[...Array(16)].map((_, index) => (
        <div key={index} className={`loading-square loading-square-${index}`} />
      ))}
    </div>
  );
}

export default LoadingSquare;
