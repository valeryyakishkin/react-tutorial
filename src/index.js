import React from "react";
import ReactDOM from "react-dom/client";
import App from "./18_router/Lesson";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
