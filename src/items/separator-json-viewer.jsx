import React, { memo } from "react";

import "./separator-json-viewer.css";

const SeparatorViewer = ({ id = "", level }) => {
  const separators = [];
  while (level > 0) {
    separators.push(<div key={`${id}.${level}`} className="separator" />);
    level -= 1;
  }
  return <>{separators}</>;
};

export default memo(SeparatorViewer);
