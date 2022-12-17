import React from "react";
import "./App.css";
import Index from "./Pages/Index";
import Start from "./Components/Start";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Index>
              <Start />
            </Index>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
