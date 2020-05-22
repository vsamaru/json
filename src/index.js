import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import JsonViewer from "./json-viewer";
import DATA from "./data.json";

const rootElement = document.getElementById("root");
ReactDOM.render(<JsonViewer json={{ ...DATA }} />, rootElement);
