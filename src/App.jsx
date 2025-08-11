import React from "react";
import Hero from "./Pages/Hero";
import Faq from "./Pages/Faq/Faq";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Faq />} />
        
      </Routes>
    </Router>
  );
};

export default App;
