import React from "react";
import ReactDOM from "react-dom/client";
import App from "./08_lists_and_keys/Lesson";

React.createElement("div", null, "Simple div with text");
React.createElement("input", { className: "just-class" });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
