import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
//pages
import Landing from "./pages/Landing";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
