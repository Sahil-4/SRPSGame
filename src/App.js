import React from "react";
import "./App.css";
import Index from "./Pages/Index";
import Help from "./Pages/Help";
import About from "./Pages/About";
import Game from "./Pages/Game";
import Start from "./Components/Start";
import Selectgame from "./Components/Selectgame";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameState from "./Context/Game/GameState";
import Alert from "./Components/Alert";

function App() {
  return (
    <GameState>
      <Alert />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Index>
                <Start />
              </Index>
            }
          />
          <Route
            path="/game-type?"
            element={
              <Index>
                <Selectgame />
              </Index>
            }
          />
          <Route
            path="/login"
            element={
              <Index>
                <Login />
              </Index>
            }
          />
          <Route path="/game/:type" element={<Game />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </GameState>
  );
}

export default App;
