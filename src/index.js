import React from "react";
import ReactDOM from "react-dom";
// import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import CommunityInitiativePage from "./Pages/CommunityInitiative/CommunityInitiative";
import FertilizerEducation from './Pages/Education/Fertilizers'
import FungicidesEducation from "./Pages/Education/Fungicides";
import PesticidesEducation from "./Pages/Education/Pesticides";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/mandera-irrigation-project" element={<CommunityInitiativePage />} />
    <Route path="/fertilizers" element={<FertilizerEducation />} />
    <Route path="/fungicides" element={<FungicidesEducation />} />
    <Route path="/pesticides" element={<PesticidesEducation />} />
  </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
