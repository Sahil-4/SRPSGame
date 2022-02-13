import React from "react";
import './App.css';
import Home from './Components/Home';
import Help from './Components/Help';
import About from './Components/About';
import Game from "./Components/Game";
import Login from "./Components/Login";
import GameMultiplayer from "./Components/GameMultiplayer";
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
            <Route exact path="/play" element={<Game />} />
            <Route exact path="/join" element={<Login />} />
            <Route exact path="/play-two" element={<GameMultiplayer />} />
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
