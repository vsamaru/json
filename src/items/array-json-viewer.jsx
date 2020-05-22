import React, { useState, useEffect } from "react";

import CopyJsonViewer from "./copy-json-viewer";

import "./array-json-viewer.css";
import SeparatorViewer from "./separator-json-viewer";

const CounterArrayJsonVierwer = ({ value }) => (
  <div className="counter-viewer">{value} Items</div>
);

const ArrayJsonViewer = ({ name, expanded, level, children }) => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const classname = `array-viewer${isExpanded ? " expanded" : ""}`;
  useEffect(() => setIsExpanded(expanded), [expanded]);

  return (
    <>
      <div className={classname}>
        <SeparatorViewer level={level} />
        <span
          className="array-viewer__label"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {name}
          <CounterArrayJsonVierwer value={children.length} />
          <CopyJsonViewer text={name} />
        </span>
        {/*<div className="array-viewer__children">{isExpanded && children}</div>*/}
      </div>
      {isExpanded && children}
    </>
  );
};

export default ArrayJsonViewer;
