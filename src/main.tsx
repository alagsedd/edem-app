import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/Global.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
