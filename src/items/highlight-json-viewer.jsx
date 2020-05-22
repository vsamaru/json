import React from "react";
import "./highlight-json-viewer.css";

const replaceAt = (text, expression, Component) => {
  const match = expression.exec(text);
  if (!match) {
    return [text];
  }

  const [token] = match;
  return [
    text.substr(0, match.index),
    <Component>{token}</Component>,
    ...replaceAt(text.substr(match.index + token.length), expression, Component)
  ];
};

const Highlight = ({ id, children }) => (
  <mark id={id} className="highlight">
    {children}
  </mark>
);

const highlighter = expression => {
  const pattern = new RegExp(expression.trim(), "gi");
  return text =>
    pattern.source === "(?:)" ? text : replaceAt(text, pattern, Highlight);
};

export default highlighter;
