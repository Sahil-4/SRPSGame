import React from "react";
import './App.css';
import Home from './Components/Home';
import Help from './Components/Help';
import About from './Components/About';
import Game from "./Components/Game";
import Test from "./Components/Test";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import GameState from "./Context/Game/GameState";

function App() {
  return (
    <>
      <GameState>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/start" element={<Game />} />
            <Route exact path="/help" element={<Help />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/test" element={<Test />} />
          </Routes>
        </Router>
      </GameState>
    </>
  );
}

export default App;
