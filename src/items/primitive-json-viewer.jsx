import React from "react";

import CopyJsonViewer from "./copy-json-viewer";

import "./primitive-json-viewer.css";
import SeparatorViewer from "./separator-json-viewer";

const PrimitiveJsonViewer = ({ name, value, level }) => (
  <div className="primitive-viewer">
    <SeparatorViewer level={level} />
    <span className="primitive-viewer__label">{name}</span>
    <span className="primitive-viewer__value">{value}</span>
    <CopyJsonViewer text={value} />
  </div>
);

export default PrimitiveJsonViewer;
