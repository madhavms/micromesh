import React, {
  createElement,
  Fragment,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

const ShadowRoot = ({ children, style, id }) => {
  const [shadowRoot, setShadowRoot] = useState(null);
  const node = useRef();

  useEffect(() => {
    const refNode = node.current;
    setShadowRoot(refNode.attachShadow({ mode: "open" }));
  }, []);

  useEffect(() => {
    if (!!style) {
      const refNode = node.current;
      const styleElement = document.createElement("style");
      styleElement.innerHTML = style.innerHTML;
      refNode.shadowRoot.appendChild(styleElement);
    }
  }, [style]);

  return (
    <Fragment>
      <div ref={node} />
      {shadowRoot && createPortal(children, shadowRoot)}
    </Fragment>
  );
};

export default ShadowRoot;
