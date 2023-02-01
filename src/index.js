import React from "react";
import ReactDOM from "react-dom/client";
import Table from "./09_fragment_&_css/Lesson";

React.createElement("div", null, "Simple div with text");
React.createElement("input", { className: "just-class" });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Table />);
