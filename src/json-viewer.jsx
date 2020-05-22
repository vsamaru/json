import React, { useState, Fragment, useCallback } from "react";
import Search from "./search";
import { getType, buildPath } from "./helpers";
import highlighter from "./items/highlight-json-viewer";
import ArrayJsonViewer from "./items/array-json-viewer";
import ObjectJsonViewer from "./items/object-json-viewer";
import PrimitiveJsonViewer from "./items/primitive-json-viewer";

const parse = (value, search, display) => {
  const highlightText = highlighter(search);

  const buildComponentTree = (value, name, path, level) => {
    const type = getType(value);
    const newPath = buildPath(path, name, type);

    switch (type) {
      case "object":
        return (
          <ObjectJsonViewer
            name={highlightText(name)}
            level={level}
            expanded={display}
          >
            {Object.entries(value).map(([key, value]) => (
              <Fragment key={`${name}.${key}`}>
                {buildComponentTree(value, key, path, level + 1)}
              </Fragment>
            ))}
          </ObjectJsonViewer>
        );
      case "array":
        return (
          <ArrayJsonViewer
            name={highlightText(name)}
            level={level}
            expanded={display}
          >
            {value.map((value, index) => (
              <Fragment key={`${name}.${index}`}>
                {buildComponentTree(value, undefined, path, level + 1)}
              </Fragment>
            ))}
          </ArrayJsonViewer>
        );
      default:
        return (
          <PrimitiveJsonViewer
            name={highlightText(name)}
            value={highlightText(value)}
            level={level}
          />
        );
    }
  };

  return buildComponentTree(value, "", "", 0);
};

const JsonViewer = ({ json }) => {
  const [text, setText] = useState("");
  const [display, setDisplay] = useState(true);

  const expandAll = useCallback(() => setDisplay(true), []);
  const collapseAll = useCallback(() => setDisplay(false), []);

  const handleChange = value => setText(value);
  return (
    <>
      <Search onChange={handleChange} />
      <button disabled={display} onClick={expandAll}>
        Expand All
      </button>
      <button disabled={!display} onClick={collapseAll}>
        Collapse All
      </button>
      <div className="json-viewer">{parse(json, text, display)}</div>
    </>
  );
};

export default JsonViewer;
