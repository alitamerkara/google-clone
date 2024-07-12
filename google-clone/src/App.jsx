import React from "react";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
