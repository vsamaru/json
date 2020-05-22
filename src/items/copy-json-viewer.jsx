import React, { useCallback } from "react";
import "./copy-json-viewer.css";

const CopyJsonViewer = ({ text = "" }) => {
  const handleCopyClick = useCallback(
    () => navigator.clipboard.writeText(text),
    [text]
  );

  return (
    <div className="copy-json-viewer">
      <span role="button" onClick={handleCopyClick}>
        Copy
      </span>
    </div>
  );
};

export default CopyJsonViewer;
