import React, { useState, useEffect } from "react";

import CopyJsonViewer from "./copy-json-viewer";

import "./object-json-viewer.css";
import SeparatorViewer from "./separator-json-viewer";

const CounterObjectJsonVierwer = ({ value }) => (
  <div className="counter-viewer">{value} Items</div>
);

const ObjectJsonViewer = ({ name, expanded, level, children }) => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const classname = `object-viewer${isExpanded ? " expanded" : ""}`;
  useEffect(() => setIsExpanded(expanded), [expanded]);

  return (
    <>
      <div className={classname}>
        <SeparatorViewer level={level} />
        <span
          className="object-viewer__label"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {name}
          <CounterObjectJsonVierwer value={children.length} />
          <CopyJsonViewer text={name} />
        </span>
      </div>
      {isExpanded && children}
    </>
  );
};

export default ObjectJsonViewer;
