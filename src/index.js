import React from "react";
import ReactDOM from "react-dom/client";
import { Lesson, Counter, Button } from "./05_props/Lesson";

React.createElement("div", null, "Simple div with text");
React.createElement("input", { className: "just-class" });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Lesson child={<Button />}><Counter /></Lesson>);
