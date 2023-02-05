import React from "react";
import ReactDOM from "react-dom/client";
import News from "./16_work_with_API/News";

React.createElement("div", null, "Simple div with text");
React.createElement("input", { className: "just-class" });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<News />);
