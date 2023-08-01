import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./components/home/home.css";
import "./components/navbar/navbar.css";
import "./components/about/about.css";
import "./components/project/project.css";
import "./components/contact/contact.css";
import { Context } from "./components/Context.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
);
