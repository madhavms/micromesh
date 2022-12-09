import React, { createContext, useRef, useState } from "react";

// creating context
export const DragContext = createContext();

// context provider
export const DragContextProvider = (props) => {
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragNode = useRef();
  const enteredNode = useRef();

  return (
    <DragContext.Provider
      value={[dragging, setDragging, dragItem, dragNode, enteredNode]}
    >
      {props.children}
    </DragContext.Provider>
  );
};
