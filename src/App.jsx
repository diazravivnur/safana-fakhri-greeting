import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import ScanComponent from "./ScanComponent";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/scan" element={<ScanComponent />} />
      </Routes>
    </div>
  );
}

export default App;
