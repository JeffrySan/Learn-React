import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import LoginPage from "./LoginPage";

import "./index.css";
import "./LoginPage.css";

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <LoginPage />
    </React.StrictMode>
);