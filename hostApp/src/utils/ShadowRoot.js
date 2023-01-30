import React, { Fragment, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const ShadowRoot = ({ children, style, placeholder }) => {
  const [shadowRoot, setShadowRoot] = useState(null);
  const node = useRef();
  const [styleLoaded, setStyleLoaded] = useState(false);

  useEffect(() => {
    const refNode = node.current;
    setShadowRoot(refNode.attachShadow({ mode: "open" }));
    const styleElement = document.createElement("style");
    styleElement.innerHTML = "div { display:none;}";
    refNode.shadowRoot.appendChild(styleElement);
  }, []);

  useEffect(() => {
    if (!!style) {
      setStyleLoaded(true);
      const refNode = node.current;
      const styleElement = document.createElement("style");
      styleElement.innerHTML = style.innerHTML + "div { display:block;}";
      refNode.shadowRoot.appendChild(styleElement);
    }
  }, [style]);

  return (
    <Fragment>
      <div ref={node} className="host-node" />
      {shadowRoot && createPortal(children, shadowRoot)}
      {!styleLoaded && placeholder}
    </Fragment>
  );
};

export default ShadowRoot;
