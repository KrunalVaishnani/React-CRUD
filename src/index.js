import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Ensure this is correct
import { GetAll } from "./GetAll";
import { FacultyDetail } from "./FacultyDetail";
import { Edit } from "./Edit";
import { Add } from "./Add";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<GetAll />} />
      <Route path="/fac/:id" element={<FacultyDetail />} />
      <Route path="/Edit/:id" element={<Edit />} />
      <Route path="/Add" element={<Add />} />
    </Routes>
  </BrowserRouter>
);
