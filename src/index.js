import React from "react";
import ReactDOM from "react-dom/client";
// style
import "./style/index.css";
// routes
import AppRouter from "./router/AppRouter";
// i18n
import "./i18n/i18n";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppRouter />);
