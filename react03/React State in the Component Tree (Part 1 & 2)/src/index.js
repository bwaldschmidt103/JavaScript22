import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Destructuring arrays - 1
const checklist = [
  "wrapping paper",
  "gift bags",
  "ribbon",
  "bows",
  "tissue paper",
];
console.log(checklist);

// Destructuring arrays - 2
const [, , , sock] = ["wreath", "angels", "candy canes", "stockings", "star"];
console.log(sock);

ReactDOM.render(<App authorized={true} />, document.getElementById("root"));
