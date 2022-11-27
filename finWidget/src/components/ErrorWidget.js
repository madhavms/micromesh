import React from "react";
import moment from "moment";
export const ErrorWidget = () => (
  <div draggable className="flex">
    <Template />
    <img
      className="image"
      src="https://gist.githubusercontent.com/madhavms/8cb87494048689fe98177ed2bb6ba329/raw/4d5b97da61310840957cf83fc101004f117a9947/trashcan.svg"
    ></img>
  </div>
);

const Template = () => {
  const varColor = "text-green-500";
  return (
    <div>
      <div className={"quote rounded-lg shadow-md p-4 bg-gray-800 w-64 h-52px"}>
      <span className="text-white">Sorry unable to load data. <br/>Please contact support.    
      <br/> (+44 0000 000000)</span>
      </div>
    </div>
  );
};
