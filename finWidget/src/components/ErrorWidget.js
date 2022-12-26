import React from "react";

export const ErrorWidget = () => (
  <div draggable className="flex">
    <Template />
    <img
      className="image close-button"
      width="30px"
      height="30px"
      src="https://gist.githubusercontent.com/madhavms/3a399c50af05007ff9ab74701a1cb062/raw/ac6d9229c5bb5ce22c92cf045489bf4d904b6246/close-icon.svg"
    ></img>
  </div>
);

const Template = () => {
  const varColor = "text-green-500";
  return (
    <div>
      <div className={"quote rounded-lg shadow-md p-4 bg-gray-800 w-64 h-52px"}>
        <span className="text-white">
          Sorry unable to load data. <br />
          Please contact support.
          <br /> (+44 0000 000000)
        </span>
      </div>
    </div>
  );
};
