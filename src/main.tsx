import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes,Route } from "react-router-dom";
import App from "./App";
import { Detail } from "./Detail";
import Home from "./Home";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="detail" element={<Detail />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
